/*
*  For more information
*   Read:  https://developers.google.com/android/reference/com/google/android/gms/ads/AdSize
* */
export var AdSize;
(function (AdSize) {
    // Mobile Marketing Association (MMA)
    // banner ad size (320x50 density-independent pixels).
    AdSize["BANNER"] = "BANNER";
    // A dynamically sized banner that matches its parent's
    // width and expands/contracts its height to match the ad's
    // content after loading completes.
    AdSize["FLUID"] = "FLUID";
    //Interactive Advertising Bureau (IAB)
    // full banner ad size (468x60 density-independent pixels).
    AdSize["FULL_BANNER"] = "FULL_BANNER";
    // Large banner ad size (320x100 density-independent pixels).
    AdSize["LARGE_BANNER"] = "LARGE_BANNER";
    // Interactive Advertising Bureau (IAB)
    // leaderboard ad size (728x90 density-independent pixels).
    AdSize["LEADERBOARD"] = "LEADERBOARD";
    // Interactive Advertising Bureau (IAB)
    // medium rectangle ad size (300x250 density-independent pixels).
    AdSize["MEDIUM_RECTANGLE"] = "MEDIUM_RECTANGLE";
    // A dynamically sized banner that is full-width and auto-height.
    AdSize["SMART_BANNER"] = "SMART_BANNER";
    // A special variant of FLUID to be set on SearchAdView when
    // loading a DynamicHeightSearchAdRequest.
    // SEARCH = 'SEARCH',
    // IAB wide skyscraper ad size (160x600 density-independent pixels).
    // This size is currently not supported by the Google Mobile Ads network;
    // this is intended for mediation ad networks only.
    // WIDE_SKYSCRAPER = 'WIDE_SKYSCRAPER',
    // To define a custom banner size, set your desired AdSize
    AdSize["CUSTOM"] = "CUSTOM";
})(AdSize || (AdSize = {}));
/*
*
* More information
* https://developer.android.com/reference/android/widget/LinearLayout#attr_android:gravity
* */
export var AdPosition;
(function (AdPosition) {
    AdPosition["TOP_CENTER"] = "TOP_CENTER";
    AdPosition["CENTER"] = "CENTER";
    AdPosition["BOTTOM_CENTER"] = "BOTTOM_CENTER";
})(AdPosition || (AdPosition = {}));
//# sourceMappingURL=definitions.js.map