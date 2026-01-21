import React, { useEffect, useState } from 'react';
import { AdMob, BannerAdSize, BannerAdPosition } from '@capacitor-community/admob';
import { Capacitor } from '@capacitor/core';

// --- CONFIGURACIÓN ADMOB ---
// TODO: REEMPLAZA ESTOS IDs CON TUS IDs REALES DE ADMOB ANTES DE SUBIR A PRODUCCIÓN
const ANDROID_PROD_ID = 'ca-app-pub-XXXXXXXXXXXXXXXX/YYYYYYYYYY'; // Tu ID de Banner Android Real
const IOS_PROD_ID = 'ca-app-pub-XXXXXXXXXXXXXXXX/ZZZZZZZZZZ';     // Tu ID de Banner iOS Real

// IDs de Prueba de Google (Seguros para usar mientras desarrollas)
const ANDROID_TEST_ID = 'ca-app-pub-3940256099942544/6300978111';
const IOS_TEST_ID = 'ca-app-pub-3940256099942544/2934735716';

const isProduction = process.env.NODE_ENV === 'production'; // O cambia a true manualmente cuando vayas a publicar

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

      // En producción, NO uses initializeForTesting ni testingDevices
      await AdMob.initialize({
        testingDevices: ['2077ef9a63d2b398840261c8221a0c9b'],
        initializeForTesting: !isProduction,
      });

      const adId = Capacitor.getPlatform() === 'ios'
        ? (isProduction ? IOS_PROD_ID : IOS_TEST_ID)
        : (isProduction ? ANDROID_PROD_ID : ANDROID_TEST_ID);

      await AdMob.showBanner({
        adId: adId,
        adSize: BannerAdSize.ADAPTIVE_BANNER, // Se adapta al ancho del dispositivo
        position: BannerAdPosition.BOTTOM_CENTER,
        margin: 0, 
        isTesting: !isProduction
      });
    } catch (e) {
      console.error('Falló inicialización AdMob', e);
    }
  };

  // En web mostramos el placeholder, en nativo el banner de AdMob se superpone
  // pero mantenemos el div para reservar el espacio y que el contenido no quede tapado.
  // Nota: Con ADAPTIVE_BANNER la altura puede variar, pero 60-70px es un buen estimado para reservar.
  return (
    <div className="bg-[#111] border-t border-gray-800 w-full min-h-[60px] flex items-center justify-center p-2 shrink-0 z-50">
      {!isNative ? (
        <div className="w-full h-full bg-[#1a1a1a] border border-dashed border-gray-700 rounded flex flex-col items-center justify-center text-[10px] text-gray-500 uppercase tracking-widest font-bold text-center p-2">
          <span>Zona de Publicidad</span>
          <span className="text-[8px] opacity-70 mt-1">
            {isProduction ? 'Modo Producción' : 'Modo Prueba'}
          </span>
           <span className="text-[7px] opacity-50 block mt-1">
            (Banner Nativo aparecerá aquí)
          </span>
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
