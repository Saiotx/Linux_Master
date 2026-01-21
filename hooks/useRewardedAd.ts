
import { useState, useEffect, useCallback } from 'react';
import { AdMob, RewardAdOptions, AdLoadInfo, RewardAdPluginEvents, AdMobRewardItem } from '@capacitor-community/admob';
import { Capacitor } from '@capacitor/core';

// Identificadores de Pruebas (Google Test IDs)
const ANDROID_TEST_REWARDED = 'ca-app-pub-3940256099942544/5224354917';
const IOS_TEST_REWARDED = 'ca-app-pub-3940256099942544/1712485313';

// En producción usarías tus IDs reales
const ANDROID_PROD_REWARDED = 'ca-app-pub-XXXXXXXXXXXXXXXX/YYYYYYYYYY';
const IOS_PROD_REWARDED = 'ca-app-pub-XXXXXXXXXXXXXXXX/ZZZZZZZZZZ';

const isProduction = process.env.NODE_ENV === 'production';

export const useRewardedAd = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const adId = Capacitor.getPlatform() === 'ios'
        ? (isProduction ? IOS_PROD_REWARDED : IOS_TEST_REWARDED)
        : (isProduction ? ANDROID_PROD_REWARDED : ANDROID_TEST_REWARDED);

    const prepareAd = useCallback(async () => {
        if (!Capacitor.isNativePlatform()) {
            setIsLoaded(true); // En web siempre "cargamos" instantáneamente para simulación
            return;
        }

        try {
            setIsLoading(true);
            await AdMob.prepareRewardVideoAd({
                adId: adId,
                isTesting: !isProduction
            });
            // El evento onRewardedVideoAdLoaded se encargará de setIsLoaded(true)
        } catch (err: any) {
            console.error('Error preparing reward ad:', err);
            setError('Error cargando anuncio');
            setIsLoading(false);
        }
    }, [adId]);

    useEffect(() => {
        if (!Capacitor.isNativePlatform()) return;

        let loadListener: any;
        let failListener: any;

        const setupListeners = async () => {
            loadListener = await AdMob.addListener(RewardAdPluginEvents.Loaded, (info: AdLoadInfo) => {
                setIsLoaded(true);
                setIsLoading(false);
            });

            failListener = await AdMob.addListener(RewardAdPluginEvents.FailedToLoad, (info: any) => {
                setIsLoaded(false);
                setIsLoading(false);
                setError('Fallo al cargar anuncio');
            });
        };

        setupListeners();

        return () => {
            if (loadListener) loadListener.remove();
            if (failListener) failListener.remove();
        };
    }, []);

    const showAd = async (): Promise<boolean> => {
        return new Promise(async (resolve) => {
            if (!Capacitor.isNativePlatform()) {
                // Simulación Web
                console.log("Simulando Anuncio Web...");
                setTimeout(() => {
                    resolve(true);
                }, 3000); // 3 segundos de "anuncio"
                return;
            }

            if (!isLoaded) {
                await prepareAd();
                // Si intentamos mostrar sin estar cargado, intentamos cargar y rechazamos por ahora
                // Idealmente deberíamos esperar, pero para simplificar, pedimos al usuario intentar de nuevo
                resolve(false);
                return;
            }

            let rewarded = false;

            let rewardListener: any;
            let dismissListener: any;

            rewardListener = await AdMob.addListener(RewardAdPluginEvents.Rewarded, (item: AdMobRewardItem) => {
                rewarded = true;
            });

            dismissListener = await AdMob.addListener(RewardAdPluginEvents.Dismissed, () => {
                if (rewardListener) rewardListener.remove();
                if (dismissListener) dismissListener.remove();
                setIsLoaded(false); // Necesitamos recargar para el próximo
                prepareAd(); // Precargar el siguiente
                resolve(rewarded);
            });

            await AdMob.showRewardVideoAd();
        });
    };

    // Precargar inicial
    useEffect(() => {
        prepareAd();
    }, [prepareAd]);

    return {
        isLoaded,
        isLoading,
        error,
        showAd,
        prepareAd
    };
};
