import React, { useEffect, useState } from 'react';
import { AdMob, BannerAdSize, BannerAdPosition, BannerAdPluginEvents } from '@capacitor-community/admob';
import { Capacitor } from '@capacitor/core';

const AdBanner: React.FC = () => {
  const [isNative, setIsNative] = useState(false);

  useEffect(() => {
    const checkPlatform = async () => {
      if (Capacitor.isNativePlatform()) {
        setIsNative(true);
        await initializeAdMob();
      }
    };
    checkPlatform();

    return () => {
      if (Capacitor.isNativePlatform()) {
        AdMob.hideBanner().catch(err => console.error('Error hiding banner:', err));
      }
    };
  }, []);

  const initializeAdMob = async () => {
    try {
      await AdMob.requestTrackingAuthorization();

      await AdMob.initialize({
        testingDevices: ['2077ef9a63d2b398840261c8221a0c9b'],
        initializeForTesting: true,
      });

      await AdMob.showBanner({
        adId: 'ca-app-pub-3940256099942544/6300978111', // Test ID Android
        // Para iOS usar: 'ca-app-pub-3940256099942544/2934735716'
        adSize: BannerAdSize.BANNER,
        position: BannerAdPosition.BOTTOM_CENTER,
        margin: 0,
        isTesting: true
      });
    } catch (e) {
      console.error('Falló inicialización AdMob', e);
    }
  };

  // En web mostramos el placeholder, en nativo el banner de AdMob se superpone
  // pero mantenemos el div para reservar el espacio y que el contenido no quede tapado.
  return (
    <div className="bg-[#111] border-t border-gray-800 w-full h-16 flex items-center justify-center p-2 shrink-0 z-50">
      {!isNative ? (
        <div className="w-full h-full bg-[#1a1a1a] border border-dashed border-gray-700 rounded flex flex-col items-center justify-center text-[10px] text-gray-500 uppercase tracking-widest font-bold text-center">
          <span>Zona de Publicidad</span>
          <span className="text-[8px] opacity-50">Vista Web (Placeholder)</span>
        </div>
      ) : (
        <div className="w-full h-full flex items-center justify-center text-[8px] text-gray-800 uppercase">
          {/* Espacio reservado para el banner nativo */}
        </div>
      )}
    </div>
  );
};

export default AdBanner;
