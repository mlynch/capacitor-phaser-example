import { PluginListenerHandle } from '@capacitor/core';
declare global {
    interface PluginRegistry {
        AdMob?: AdMobPlugin;
    }
}
export interface AdMobPlugin {
    initialize(options: {
        appId: string;
    }): Promise<{
        value: boolean;
    }>;
    showBanner(options: AdOptions): Promise<{
        value: boolean;
    }>;
    hideBanner(): Promise<{
        value: boolean;
    }>;
    resumeBanner(): Promise<{
        value: boolean;
    }>;
    removeBanner(): Promise<{
        value: boolean;
    }>;
    prepareInterstitial(options: AdOptions): Promise<{
        value: boolean;
    }>;
    showInterstitial(): Promise<{
        value: boolean;
    }>;
    prepareRewardVideoAd(options: AdOptions): Promise<{
        value: boolean;
    }>;
    showRewardVideoAd(): Promise<{
        value: boolean;
    }>;
    pauseRewardedVideo(): Promise<{
        value: boolean;
    }>;
    resumeRewardedVideo(): Promise<{
        value: boolean;
    }>;
    stopRewardedVideo(): Promise<{
        value: boolean;
    }>;
    addListener(eventName: 'onAdLoaded', listenerFunc: (info: any) => void): PluginListenerHandle;
    addListener(eventName: 'onAdFailedToLoad', listenerFunc: (info: any) => void): PluginListenerHandle;
    addListener(eventName: 'onAdOpened', listenerFunc: (info: any) => void): PluginListenerHandle;
    addListener(eventName: 'onAdClosed', listenerFunc: (info: any) => void): PluginListenerHandle;
    addListener(eventName: 'onRewardedVideoAdLoaded', listenerFunc: (info: any) => void): PluginListenerHandle;
    addListener(eventName: 'onRewardedVideoAdOpened', listenerFunc: (info: any) => void): PluginListenerHandle;
    addListener(eventName: 'onAdLeftApplication', listenerFunc: (info: any) => void): PluginListenerHandle;
    addListener(eventName: 'onRewardedVideoStarted', listenerFunc: (info: any) => void): PluginListenerHandle;
    addListener(eventName: 'onRewardedVideoAdClosed', listenerFunc: (info: any) => void): PluginListenerHandle;
    addListener(eventName: 'onRewarded', listenerFunc: (info: any) => void): PluginListenerHandle;
    addListener(eventName: 'onRewardedVideoAdLeftApplication', listenerFunc: (info: any) => void): PluginListenerHandle;
    addListener(eventName: 'onRewardedVideoAdFailedToLoad', listenerFunc: (info: any) => void): PluginListenerHandle;
    addListener(eventName: 'onRewardedVideoCompleted', listenerFunc: (info: any) => void): PluginListenerHandle;
    addListener(eventName: 'adViewDidReceiveAd', listenerFunc: (info: any) => void): PluginListenerHandle;
    addListener(eventName: 'adView:didFailToReceiveAdWithError', listenerFunc: (info: any) => void): PluginListenerHandle;
    addListener(eventName: 'adViewWillPresentScreen', listenerFunc: (info: any) => void): PluginListenerHandle;
    addListener(eventName: 'adViewWillDismissScreen', listenerFunc: (info: any) => void): PluginListenerHandle;
    addListener(eventName: 'adViewDidDismissScreen', listenerFunc: (info: any) => void): PluginListenerHandle;
    addListener(eventName: 'adViewWillLeaveApplication', listenerFunc: (info: any) => void): PluginListenerHandle;
}
export interface AdOptions {
    adId: string;
    adSize?: AdSize;
    position?: AdPosition;
    isTesting?: boolean;
    margin?: number;
}
export declare enum AdSize {
    BANNER = "BANNER",
    FLUID = "FLUID",
    FULL_BANNER = "FULL_BANNER",
    LARGE_BANNER = "LARGE_BANNER",
    LEADERBOARD = "LEADERBOARD",
    MEDIUM_RECTANGLE = "MEDIUM_RECTANGLE",
    SMART_BANNER = "SMART_BANNER",
    CUSTOM = "CUSTOM"
}
export declare enum AdPosition {
    TOP_CENTER = "TOP_CENTER",
    CENTER = "CENTER",
    BOTTOM_CENTER = "BOTTOM_CENTER"
}
export interface AdExtras {
    color_bg?: string;
    color_bg_top?: string;
    color_border?: string;
    color_link?: string;
    color_text?: string;
    color_url?: string;
}
