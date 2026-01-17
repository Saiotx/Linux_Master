
export interface DictionaryEntry {
  command: string;
  description: string;
  example: string;
}

export interface TheorySection {
  title: string;
  content: string;
}

export interface Mission {
  id: string;
  title: string;
  description: string;
  scenario: string;
  solution: string;
  hint: string;
}

export interface Level {
  id: number;
  title: string;
  theory: TheorySection[];
  dictionary: DictionaryEntry[];
  missions: Mission[];
  isExam?: boolean;
}

export interface Section {
  id: number;
  title: string;
  description: string;
  levelIds: number[];
}

export interface UserState {
  unlockedLevel: number;
  unlockedSection: number;
  completedMissions: string[];
  isLoggedIn?: boolean;
  username?: string;
}

export type View = 'login' | 'home' | 'section-levels' | 'level-menu' | 'theory' | 'dictionary' | 'mission' | 'success';
