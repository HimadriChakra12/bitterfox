// @name         eaterfox
// @version      1.0.0
// ---- scripts/custom.js ----

// ---- scripts/Fastfox.js ----
 * Fastfox                                                                              *
 * "Non ducor duco"                                                                     *
 * priority: speedy browsing                                                            *
 * version: 154                                                                         *
 * url: https://github.com/yokoffing/Betterfox                                          *
 ***************************************************************************************/
 * SECTION: GENERAL                                                        *
****************************************************************************/
user_pref("gfx.content.skia-font-cache-size", 20); // 20 MB; default=5; Chrome=20
user_pref("content.notify.interval", 100000); // (.10s); default=120000 (.12s)
 * SECTION: GFX RENDERING TWEAKS                                            *
****************************************************************************/
    user_pref("gfx.canvas.accelerated.cache-size", 512); // default=256; Chrome=512; max=2048 [4]
 * SECTION: JAVASCRIPT OPTIONS                                              *
****************************************************************************/
 * SECTION: DISK CACHE                                                     *
****************************************************************************/
 * SECTION: MEMORY CACHE                                                   *
****************************************************************************/
 * SECTION: MEDIA CACHE                                                     *
****************************************************************************/
user_pref("media.cache_readahead_limit", 3600); // 60 min; default=60 sec; stop reading ahead when our buffered data is this many seconds ahead of the current playback
user_pref("media.cache_resume_threshold", 1800); // 30 min; default=30 sec; when a network connection is suspended, don't resume it until the amount of buffered data falls below this threshold
 * SECTION: IMAGE CACHE                                                     *
****************************************************************************/
user_pref("image.mem.decode_bytes_at_a_time", 32768); // default=16384; chunk size for calls to the image decoders
 * SECTION: NETWORK                                                         *
****************************************************************************/
user_pref("network.buffer.cache.size", 65535); // default=32768 (32 kb); 262144 too large
user_pref("network.buffer.cache.count", 48); // default=24; 128 too large
user_pref("network.http.max-connections", 1800); // default=900
user_pref("network.http.max-persistent-connections-per-server", 10); // default=6; download connections; anything above 10 is excessive
    user_pref("network.http.max-urgent-start-excessive-connections-per-host", 5); // default=3
user_pref("network.http.request.max-start-delay", 5); // default=10
user_pref("network.dnsCacheExpiration", 3600); // keep entries for 1 hour; default=60
 * SECTION: TAB UNLOAD                                                      *
****************************************************************************/
 * SECTION: PROCESS COUNT                                                  *
****************************************************************************/

// ---- scripts/Peskyfox.js ----
 * Peskyfox                                                                 *
 * "Aquila non capit muscas"                                                *
 * priority: remove annoyances                                              *
 * version: 152                                                             *
 * url: https://github.com/yokoffing/Betterfox                              *
 * credit: Some prefs are reproduced and adapted from the arkenfox project  *
 * credit urL: https://github.com/arkenfox/user.js                          *
 ***************************************************************************/
 * SECTION: MOZILLA UI                                                      *
****************************************************************************/
user_pref("extensions.getAddons.showPane", false); // HIDDEN
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);
user_pref("browser.discovery.enabled", false);
user_pref("browser.shell.checkDefaultBrowser", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);
user_pref("browser.preferences.moreFromMozilla", false);
user_pref("browser.aboutConfig.showWarning", false);
user_pref("browser.startup.homepage_override.mstone", "ignore");
user_pref("browser.aboutwelcome.enabled", false); // disable Intro screens
user_pref("browser.profiles.enabled", true);
 * SECTION: THEME ADJUSTMENTS                                              *
****************************************************************************/
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);
user_pref("browser.compactmode.show", true);
user_pref("layout.css.prefers-color-scheme.content-override", 2);
user_pref("browser.privateWindowSeparation.enabled", false);
 * SECTION: AI                                                              *
****************************************************************************/
user_pref("browser.ai.control.default", "blocked");
user_pref("browser.ml.enable", false);
user_pref("browser.tabs.groups.smart.enabled", false);
user_pref("browser.ml.linkPreview.enabled", false);
user_pref("browser.ml.chat.enabled", false);
user_pref("browser.ml.chat.menu", false);
 * SECTION: TRANSLATIONS                                                    *
****************************************************************************/
 * SECTION: FULLSCREEN NOTICE                                               *
****************************************************************************/
user_pref("full-screen-api.transition-duration.enter", "0 0"); // default=200 200
user_pref("full-screen-api.transition-duration.leave", "0 0"); // default=200 200
 * SECTION: FONT APPEARANCE                                                 *
****************************************************************************/
 * SECTION: URL BAR                                                         *
****************************************************************************/
user_pref("browser.urlbar.suggest.engines", false);
user_pref("browser.urlbar.trending.featureGate", false);
 * SECTION: AUTOPLAY                                                        *
****************************************************************************/
 * SECTION: NEW TAB PAGE                                                    *
****************************************************************************/
      user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false); // Sponsored shortcuts [FF83+]
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false); // Recommended by Pocket
user_pref("browser.newtabpage.activity-stream.showSponsored", false); // Sponsored stories [FF58+]  
user_pref("browser.newtabpage.activity-stream.showSponsoredCheckboxes", false); // [FF140+] Support Firefox
user_pref("browser.newtabpage.activity-stream.default.sites", "");
      
 * SECTION: POCKET                                                            *
******************************************************************************/
 * SECTION: DOWNLOADS                                 *
******************************************************************************/
user_pref("browser.download.manager.addToRecentDocs", false);
 * SECTION: PDF                                                             *
****************************************************************************/
user_pref("browser.download.open_pdf_attachments_inline", true);
 * SECTION: DOM (DOCUMENT OBJECT MODEL)                                     *
****************************************************************************/
 * SECTION: TAB BEHAVIOR                                                    *
****************************************************************************/
user_pref("browser.bookmarks.openInTabClosesMenu", false);
user_pref("findbar.highlightAll", true);
 * SECTION: KEYBOARD AND SHORTCUTS                                          *
 ****************************************************************************/
 * SECTION: ACCESSIBILITY AND USABILITY                                     *
 ****************************************************************************/
 * SECTION: BOOKMARK MANAGEMENT                                             *
 ****************************************************************************/
 * SECTION: ZOOM AND DISPLAY SETTINGS                                       *
 ****************************************************************************/
 * SECTION: DEVELOPER TOOLS                                                 *
 ****************************************************************************/
 * SECTION: IMAGE AND MEDIA HANDLING                                        *
 ****************************************************************************/

// ---- scripts/Securefox.js ----
 * Securefox                                                                *
 * "Natura non contristatur"                                                *     
 * priority: provide sensible security and privacy                          *
 * version: 154                                                             *
 * url: https://github.com/yokoffing/Betterfox                              *
 * credit: Most prefs are reproduced and adapted from the arkenfox project  *
 * credit urL: https://github.com/arkenfox/user.js                          *
****************************************************************************/
 * SECTION: TRACKING PROTECTION                                             *
****************************************************************************/
user_pref("browser.contentblocking.category", "strict"); // [HIDDEN PREF]
user_pref("browser.download.start_downloads_in_tmp_dir", true); // [FF102+]
user_pref("browser.uitour.enabled", false);
user_pref("privacy.globalprivacycontrol.enabled", true);
 * SECTION: OSCP & CERTS / HPKP (HTTP Public Key Pinning)                   *
****************************************************************************/
user_pref("security.OCSP.enabled", 0);
      
user_pref("privacy.antitracking.isolateContentScriptResources", true);
user_pref("security.csp.reporting.enabled", false);
 * SECTION: SSL (Secure Sockets Layer) / TLS (Transport Layer Security)    *
****************************************************************************/
user_pref("security.ssl.treat_unsafe_negotiation_as_broken", true);
user_pref("browser.xul.error_pages.expert_bad_cert", true);
user_pref("security.tls.enable_0rtt_data", false);
 * SECTION: FINGERPRINT PROTECTION (FPP)                                    *
****************************************************************************/
 * SECTION: RESIST FINGERPRINTING (RFP)                                     *
****************************************************************************/
 * SECTION: DISK AVOIDANCE                                                  *
****************************************************************************/
user_pref("browser.cache.disk.enable", false);
user_pref("browser.privatebrowsing.forceMediaMemoryCache", true);
user_pref("media.memory_cache_max_size", 65536); // 64 MB; default=8192; AF=65536
user_pref("browser.sessionstore.interval", 60000); // 1 minute; default=15000 (15s); 900000=15 min; 1800000=30 min
 * SECTION: SANITIZE HISTORY                                                  *
******************************************************************************/
 * SECTION: SHUTDOWN & SANITIZING                                             *
******************************************************************************/
user_pref("privacy.history.custom", true);
 * SECTION: SPECULATIVE LOADING                                            *
****************************************************************************/
user_pref("network.http.speculative-parallel-limit", 0);
user_pref("network.dns.disablePrefetch", true);
    user_pref("network.dns.disablePrefetchFromHTTPS", true); // [FF127+ false]
user_pref("browser.urlbar.speculativeConnect.enabled", false);
user_pref("browser.places.speculativeConnect.enabled", false);
user_pref("network.prefetch-next", false);
 * SECTION: SEARCH / URL BAR                                                 *
******************************************************************************/
user_pref("browser.urlbar.trimHttps", true);
user_pref("browser.urlbar.untrimOnUserInteraction.featureGate", true);
user_pref("browser.search.separatePrivateDefault.ui.enabled", true);
user_pref("browser.search.suggest.enabled", false);
user_pref("browser.urlbar.quicksuggest.enabled", false); // controls whether the UI is shown
user_pref("browser.urlbar.groupLabels.enabled", false);
user_pref("browser.formfill.enable", false);
user_pref("network.IDN_show_punycode", true);
 * SECTION: HTTPS-FIRST POLICY                          *
******************************************************************************/
 * SECTION: HTTPS-ONLY MODE                              *
******************************************************************************/
user_pref("dom.security.https_only_mode", true); // [FF76+]
user_pref("dom.security.https_only_mode_error_page_user_suggestions", true);
 * SECTION: DNS-over-HTTPS                                                    *
******************************************************************************/
 * SECTION: PROXY / SOCKS / IPv6                           *
******************************************************************************/
 * SECTION: PASSWORDS                                                        *
******************************************************************************/
user_pref("signon.formlessCapture.enabled", false);
user_pref("signon.privateBrowsingCapture.enabled", false);
user_pref("network.auth.subresource-http-auth-allow", 1);
user_pref("editor.truncate_user_pastes", false);
 * SECTION: ADDRESS + CREDIT CARD MANAGER                                   *
****************************************************************************/
 * SECTION: EXTENSIONS                                                      *
****************************************************************************/
user_pref("extensions.enabledScopes", 5); // [HIDDEN PREF]
 * SECTION: HEADERS / REFERERS                                               *
******************************************************************************/
user_pref("network.http.referer.XOriginTrimmingPolicy", 2);
 * SECTION: CONTAINERS                                                       *
******************************************************************************/
 * SECTION: WEBRTC                                                           *
******************************************************************************/
 * SECTION: PLUGINS                                                          *
******************************************************************************/
 * SECTION: JIT & WASM                                                        *
******************************************************************************/
     
 * SECTION: VARIOUS                                                          *
******************************************************************************/
user_pref("pdfjs.enableScripting", false); // [FF86+]
 * SECTION: SAFE BROWSING (SB)                                               *
******************************************************************************/
      
user_pref("browser.safebrowsing.downloads.remote.enabled", false);
 * SECTION: MOZILLA                                                   *
******************************************************************************/
user_pref("permissions.default.desktop-notification", 2);
   
user_pref("permissions.default.geo", 2);
user_pref("geo.provider.network.url", "https://beacondb.net/v1/geolocate");
user_pref("browser.search.update", false);
user_pref("permissions.manager.defaultsUrl", "");
user_pref("extensions.getAddons.cache.enabled", false);
 * SECTION: TELEMETRY                                                   *
******************************************************************************/
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.enabled", false); // see [NOTE]
user_pref("toolkit.telemetry.server", "data:,");
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false); // [FF57+] Background Hang Reporter
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
user_pref("toolkit.telemetry.coverage.opt-out", true); // [HIDDEN PREF]
user_pref("toolkit.coverage.opt-out", true); // [FF64+] [HIDDEN PREF]
user_pref("toolkit.coverage.endpoint.base", "");
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);
user_pref("datareporting.usage.uploadEnabled", false);
 * SECTION: EXPERIMENTS                                                      *
******************************************************************************/
user_pref("app.shield.optoutstudies.enabled", false);
user_pref("app.normandy.enabled", false);
user_pref("app.normandy.api_url", "");
user_pref("nimbus.rollouts.enabled", false);
 * SECTION: CRASH REPORTS                                                    *
******************************************************************************/
user_pref("breakpad.reportURL", "");
user_pref("browser.tabs.crashReporting.sendReport", false);
user_pref("browser.crashReports.unsubmittedCheck.enabled", false); // [DEFAULT ENFORCE]
 * SECTION: DETECTION                                                        *
******************************************************************************/

// ---- scripts/Smoothfox.js ----
 * Smoothfox                                                                            *
 * "Faber est suae quisque fortunae"                                                    *
 * priority: better scrolling                                                           *
 * version: 152                                                                         *
 * url: https://github.com/yokoffing/Betterfox                                          *
 ***************************************************************************************/
 * OPTION: SHARPEN SCROLLING                                                           *
****************************************************************************************/
user_pref("apz.overscroll.enabled", true); // DEFAULT NON-LINUX
user_pref("general.smoothScroll", true); // DEFAULT
user_pref("mousewheel.min_line_scroll_amount", 10); // adjust this number to your liking; default=5
user_pref("general.smoothScroll.mouseWheel.durationMinMS", 80); // default=50
user_pref("general.smoothScroll.currentVelocityWeighting", "0.15"); // default=.25
user_pref("general.smoothScroll.stopDecelerationWeighting", "0.6"); // default=.4
user_pref("general.smoothScroll.msdPhysics.enabled", false); // [FF122+ Nightly]
 * OPTION: INSTANT SCROLLING (SIMPLE ADJUSTMENT)                                       *
****************************************************************************************/
user_pref("apz.overscroll.enabled", true); // DEFAULT NON-LINUX
user_pref("general.smoothScroll", true); // DEFAULT
user_pref("mousewheel.default.delta_multiplier_y", 275); // 250-400; adjust this number to your liking
user_pref("general.smoothScroll.msdPhysics.enabled", false); // [FF122+ Nightly]
 * OPTION: SMOOTH SCROLLING                                                            *
****************************************************************************************/
user_pref("apz.overscroll.enabled", true); // DEFAULT NON-LINUX
user_pref("general.smoothScroll", true); // DEFAULT
user_pref("general.smoothScroll.msdPhysics.enabled", true);
user_pref("mousewheel.default.delta_multiplier_y", 300); // 250-400; adjust this number to your liking
 * OPTION: ZEN SMOOTH SCROLLING                                                         *
****************************************************************************************/
user_pref("general.smoothScroll.msdPhysics.enabled", true);
user_pref("general.smoothScroll.currentVelocityWeighting", "0.15");
user_pref("general.smoothScroll.stopDecelerationWeighting", "0.6");
user_pref("mousewheel.min_line_scroll_amount", 10);
user_pref("general.smoothScroll.mouseWheel.durationMinMS", 80);
user_pref("general.smoothScroll.msdPhysics.continuousMotionMaxDeltaMS", 12);
user_pref("general.smoothScroll.msdPhysics.motionBeginSpringConstant", 600);
user_pref("general.smoothScroll.msdPhysics.regularSpringConstant", 650);
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaMS", 25);
user_pref("general.smoothScroll.msdPhysics.slowdownSpringConstant", 250);
user_pref("mousewheel.default.delta_multiplier_y", 200);
 * OPTION: NATURAL SMOOTH SCROLLING V3 [MODIFIED]                                      *
****************************************************************************************/
user_pref("apz.overscroll.enabled", true); // DEFAULT NON-LINUX
user_pref("general.smoothScroll", true); // DEFAULT
user_pref("general.smoothScroll.msdPhysics.continuousMotionMaxDeltaMS", 12);
user_pref("general.smoothScroll.msdPhysics.enabled", true);
user_pref("general.smoothScroll.msdPhysics.motionBeginSpringConstant", 600);
user_pref("general.smoothScroll.msdPhysics.regularSpringConstant", 650);
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaMS", 25);
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaRatio", "2");
user_pref("general.smoothScroll.msdPhysics.slowdownSpringConstant", 250);
user_pref("general.smoothScroll.currentVelocityWeighting", "1");
user_pref("general.smoothScroll.stopDecelerationWeighting", "1");
user_pref("mousewheel.default.delta_multiplier_y", 300); // 250-400; adjust this number to your liking

