import React, { useState, useEffect } from 'react';
import { UserState, View, Level, Section, Mission } from './types';
import { LEVELS, SECTIONS } from './constants';
import Header from './components/Header';
import HomeView from './components/HomeView';
import LoginView from './components/LoginView';
import ModuleMenuView from './components/ModuleMenuView';
import TheoryView from './components/TheoryView';
import DictionaryView from './components/DictionaryView';
import ExerciseView from './components/ExerciseView';
import SuccessView from './components/SuccessView';
import AdBanner from './components/AdBanner';
import { auth, db } from './firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';

const App: React.FC = () => {
  const [userState, setUserState] = useState<UserState>(() => {
    const saved = localStorage.getItem('linux_master_pro');
    return saved ? JSON.parse(saved) : {
      unlockedLevel: 1,
      unlockedSection: 1,
      completedMissions: [],
      isLoggedIn: false,
      username: ''
    };
  });

  const [currentView, setCurrentView] = useState<View | 'login'>(userState.isLoggedIn ? 'home' : 'login');
  const [selectedSection, setSelectedSection] = useState<Section | null>(null);
  const [selectedLevel, setSelectedLevel] = useState<Level | null>(null);
  const [selectedMission, setSelectedMission] = useState<Mission | null>(null);
  const [isSyncing, setIsSyncing] = useState(false); // To avoid saving while fetching

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        // User is signed in.
        const username = user.displayName || user.email || 'User';
        const uid = user.uid;

        setIsSyncing(true);
        // Fetch data from Firestore
        const userDocRef = doc(db, 'users', uid);
        const userDocSnap = await getDoc(userDocRef);

        if (userDocSnap.exists()) {
          // Cloud data exists, load it
          const cloudData = userDocSnap.data() as Partial<UserState>;
          // Ensure we merge with defaults in case of new fields, but prefer cloud data
          setUserState(prev => ({
            ...prev,
            ...cloudData,
            // Admin override
            unlockedLevel: user.email === 'saioagartzia@gmail.com' ? 40 : (cloudData.unlockedLevel || prev.unlockedLevel),
            unlockedSection: user.email === 'saioagartzia@gmail.com' ? 4 : (cloudData.unlockedSection || prev.unlockedSection),
            isLoggedIn: true,
            username: username
          }));
        } else {
          // No cloud data, upload local data (preserving existing progress)
          // We use current 'userState' but we need to be careful about closure freshness if we used 'userState' directly.
          // However, here we can just use the setter with prev or assume local storage was initial source.
          // Better: merge current local state with login info and save.

          setUserState(prev => {
            // Admin override also here just in case fresh cloud start
            const isAdmin = user.email === 'saioagartzia@gmail.com';
            const newState = {
              ...prev,
              unlockedLevel: isAdmin ? 40 : prev.unlockedLevel,
              unlockedSection: isAdmin ? 4 : prev.unlockedSection,
              isLoggedIn: true,
              username: username
            };
            // Fire and forget upload for initial sync
            setDoc(userDocRef, newState);
            return newState;
          });
        }
        setIsSyncing(false);
        setCurrentView(prev => prev === 'login' ? 'home' : prev);
      } else {
        // User is signed out.
        setUserState(prev => {
          if (!prev.isLoggedIn) return prev;
          return {
            ...prev,
            isLoggedIn: false
          };
        });
        setCurrentView('login');
      }
    });

    return () => unsubscribe();
  }, []);

  // Save to LocalStorage and Firestore
  useEffect(() => {
    // Save to local storage
    localStorage.setItem('linux_master_pro', JSON.stringify(userState));

    // Save to Firestore if logged in and not currently syncing (fetching)
    if (userState.isLoggedIn && auth.currentUser && !isSyncing) {
      const uid = auth.currentUser.uid;
      const userDocRef = doc(db, 'users', uid);
      // Debounce could be good here but for simplicity/robustness we save on state change.
      // Given the low frequency of significant state updates (completing levels/missions), direct save is fine.
      setDoc(userDocRef, userState).catch(err => console.error("Error saving to cloud", err));
    }
  }, [userState, isSyncing]);

  const handleLogin = (username: string) => {
    setUserState(prev => ({
      ...prev,
      isLoggedIn: true,
      username: username
    }));
    setCurrentView('home');
  };

  const handleLogout = () => {
    signOut(auth).then(() => {
      // State update will happen in onAuthStateChanged
    }).catch((error) => {
      console.error("Logout error", error);
      // Force local logout if firebase fails??
      setUserState(prev => ({
        ...prev,
        isLoggedIn: false
      }));
      setCurrentView('login');
    });
  };

  const handleMissionComplete = (missionId: string) => {
    setUserState(prev => {
      const newCompleted = prev.completedMissions.includes(missionId)
        ? prev.completedMissions
        : [...prev.completedMissions, missionId];

      let newUnlockedLevel = prev.unlockedLevel;
      let newUnlockedSection = prev.unlockedSection;

      if (selectedLevel) {
        const allMissionsInLevel = selectedLevel.missions.map(m => m.id);
        const completedInLevel = allMissionsInLevel.filter(id => newCompleted.includes(id));

        if (completedInLevel.length === allMissionsInLevel.length) {
          newUnlockedLevel = Math.max(prev.unlockedLevel, selectedLevel.id + 1);

          if (selectedLevel.isExam) {
            newUnlockedSection = Math.max(prev.unlockedSection, (selectedSection?.id || 0) + 1);
          }
        }
      }

      return {
        ...prev,
        completedMissions: newCompleted,
        unlockedLevel: newUnlockedLevel,
        unlockedSection: newUnlockedSection
      };
    });
    setCurrentView('success');
  };

  const handleSectionSelect = (section: Section) => {
    setSelectedSection(section);
    setCurrentView('section-levels');
  };

  const handleLevelSelect = (levelId: number) => {
    const level = LEVELS.find(l => l.id === levelId);
    if (level) {
      setSelectedLevel(level);
      setCurrentView('level-menu');
    }
  };

  // Función para calcular el número de nivel mostrado (saltando exámenes)
  const getDisplayLabel = (level: Level) => {
    if (level.isExam) return '¡RETO FINAL!';
    const examsBefore = LEVELS.filter(l => l.isExam && l.id < level.id).length;
    return `NIVEL ${level.id - examsBefore}`;
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#0c0c0c] text-white max-w-md mx-auto relative font-mono overflow-hidden shadow-2xl">
      {currentView !== 'login' && <Header onLogout={handleLogout} username={userState.username} />}

      <main className="flex-1 overflow-y-auto no-scrollbar p-4 pb-20">
        {currentView === 'login' && (
          <LoginView onLogin={handleLogin} />
        )}

        {currentView === 'home' && (
          <HomeView
            sections={SECTIONS}
            unlockedSection={userState.unlockedSection}
            onSelectSection={handleSectionSelect}
            username={userState.username}
          />
        )}

        {currentView === 'section-levels' && selectedSection && (
          <div className="space-y-6 animate-in slide-in-from-right duration-300">
            <button onClick={() => setCurrentView('home')} className="text-green-500 text-xs hover:underline flex items-center">
              <span className="mr-1">←</span> Volver a Secciones
            </button>
            <div className="border-b border-green-900 pb-2">
              <h2 className="text-xl font-bold uppercase">{selectedSection.title}</h2>
              <p className="text-[10px] text-gray-500">{selectedSection.description}</p>
            </div>

            <div className="grid gap-3">
              {selectedSection.levelIds.map(lId => {
                const level = LEVELS.find(l => l.id === lId);
                if (!level) return null;
                const isUnlocked = level.id <= userState.unlockedLevel;
                const isCompleted = level.missions.length > 0 && level.missions.every(m => userState.completedMissions.includes(m.id));

                return (
                  <button
                    key={lId}
                    disabled={!isUnlocked}
                    onClick={() => handleLevelSelect(lId)}
                    className={`p-4 rounded-lg border text-left flex justify-between items-center transition-all ${isUnlocked
                      ? 'border-green-500/30 bg-green-500/5 hover:border-green-500'
                      : 'border-gray-800 bg-gray-900/20 opacity-40'
                      }`}
                  >
                    <div>
                      <div className="text-[9px] text-green-500 font-bold mb-1 uppercase">
                        {getDisplayLabel(level)}
                      </div>
                      <div className="font-bold text-sm">{level.title}</div>
                    </div>
                    {isCompleted ? <span className="text-green-500">✓</span> : isUnlocked ? <span className="text-xs text-green-700">▶</span> : <span>🔒</span>}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {currentView === 'level-menu' && selectedLevel && (
          <ModuleMenuView
            level={selectedLevel}
            onBack={() => setCurrentView('section-levels')}
            onSelectSection={(section) => setCurrentView(section as View)}
          />
        )}

        {currentView === 'theory' && selectedLevel && (
          <TheoryView
            theory={selectedLevel.theory}
            onBack={() => setCurrentView('level-menu')}
          />
        )}

        {currentView === 'dictionary' && selectedLevel && (
          <DictionaryView
            dictionary={selectedLevel.dictionary}
            onBack={() => setCurrentView('level-menu')}
          />
        )}

        {currentView === 'mission' && selectedLevel && (
          <div className="space-y-4">
            <button onClick={() => setCurrentView('level-menu')} className="text-green-500 text-xs">← Volver al Menú</button>
            <h2 className="text-xl font-bold border-b border-green-900 pb-2 uppercase">{selectedLevel.isExam ? 'EXAMEN DE CERTIFICACIÓN' : 'ENTRENAMIENTO'}</h2>

            <div className="grid gap-2 max-h-[300px] overflow-y-auto pr-2 no-scrollbar">
              {selectedLevel.missions.map((m, idx) => (
                <button
                  key={m.id}
                  onClick={() => { setSelectedMission(m); }}
                  className={`p-3 border rounded text-left transition-all ${userState.completedMissions.includes(m.id) ? 'border-green-500 bg-green-900/10' : 'border-gray-800 bg-[#111]'}`}
                >
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-gray-300">MISIÓN {idx + 1}: {m.title}</span>
                    {userState.completedMissions.includes(m.id) && <span className="text-green-500 text-xs">OK</span>}
                  </div>
                </button>
              ))}
            </div>

            {selectedMission && (
              <div className="mt-4 pt-4 border-t border-gray-800">
                <ExerciseView
                  exercise={selectedMission}
                  onSuccess={() => handleMissionComplete(selectedMission.id)}
                  onBack={() => setSelectedMission(null)}
                />
              </div>
            )}
          </div>
        )}

        {currentView === 'success' && (
          <SuccessView
            onNext={() => setCurrentView('level-menu')}
            onHome={() => setCurrentView('home')}
          />
        )}
      </main>
      {currentView !== 'login' && <AdBanner />}
    </div>
  );
};

export default App;