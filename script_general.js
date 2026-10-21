(function(){
let translateObjs = {};
const trans = (...a) => {
    return translateObjs[a[0x0]] = a, '';
};
function regTextVar(a, b) {
    var c = ![];
    return d(b);
    function d(k, l) {
        switch (k['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var m = (function () {
                switch (k['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }());
            if (m)
                return function () {
                    var r, s, t = (l && l['viewerName'] ? this['getComponentByName'](l['viewerName']) : undefined) || this['getMainViewer']();
                    if (k['toLowerCase']()['startsWith']('photo'))
                        r = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (v) {
                            var w = v['get']('player');
                            return w && w['get']('viewerArea') == t;
                        })['map'](function (v) {
                            return v['get']('media')['get']('playList');
                        });
                    else
                        r = this['_getPlayListsWithViewer'](t), s = j['bind'](this, t);
                    if (!c) {
                        for (var u = 0x0; u < r['length']; ++u) {
                            r[u]['bind']('changing', f, this);
                        }
                        c = !![];
                    }
                    return i['call'](this, r, m, s);
                };
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](k);
            };
        default:
            if (k['toLowerCase']()['startsWith']('viewer.')) {
                var n = k['split']('.')['map'](function (r) {
                        return r['trim']();
                    }), o = n[0x1];
                if (o) {
                    var p = n['slice'](0x2)['join']('.');
                    return d(p, { 'viewerName': o });
                }
            } else {
                if (k['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                    var q = undefined, m = (function () {
                            switch (k['toLowerCase']()) {
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                            case 'quiz.score':
                                return TDV['Quiz']['PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.time.remaining':
                                return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                            case 'quiz.time.elapsed':
                                return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                            case 'quiz.time.limit':
                                return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            case 'quiz.media.index':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                            case 'quiz.media.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                            case 'quiz.media.visited':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                            default:
                                var s = /quiz\.([\w_]+)\.(.+)/['exec'](k);
                                if (s) {
                                    q = s[0x1];
                                    switch ('quiz.' + s[0x2]) {
                                    case 'quiz.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                                    case 'quiz.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                                    case 'quiz.media.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                                    case 'quiz.media.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                                    case 'quiz.media.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                                    case 'quiz.media.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                                    case 'quiz.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                                    case 'quiz.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                                    case 'quiz.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                                    case 'quiz.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                                    case 'quiz.media.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                                    case 'quiz.media.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                                    }
                                }
                            }
                        }());
                    if (m)
                        return function () {
                            var r = this['get']('data')['quiz'];
                            if (r) {
                                if (!c) {
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, t[u]['id'], m), this);
                                            }
                                        } else
                                            r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, q, m), this);
                                    } else
                                        r['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], g['call'](this, m), this);
                                    c = !![];
                                }
                                try {
                                    var w = 0x0;
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                w += r['getObjective'](t[u]['id'], m);
                                            }
                                        } else
                                            w = r['getObjective'](q, m);
                                    } else {
                                        w = r['get'](m);
                                        if (m == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                            w += 0x1;
                                    }
                                    return w;
                                } catch (x) {
                                    return undefined;
                                }
                            }
                        };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function e() {
        var k = this['get']('data');
        k['updateText'](k['translateObjs'][a], a['split']('.')[0x0]);
        let l = a['split']('.'), m = l[0x0] + '_vr';
        m in this && k['updateText'](k['translateObjs'][a], m);
    }
    function f(k) {
        var l = k['data']['nextSelectedIndex'];
        if (l >= 0x0) {
            var m = k['source']['get']('items')[l], n = function () {
                    m['unbind']('begin', n, this, !![]), e['call'](this);
                };
            m['bind']('begin', n, this, !![]);
        }
    }
    function g(k) {
        return function (l) {
            k in l && e['call'](this);
        }['bind'](this);
    }
    function h(k, l) {
        return function (m, n) {
            k == m && l in n && e['call'](this);
        }['bind'](this);
    }
    function i(k, l, m) {
        for (var n = 0x0; n < k['length']; ++n) {
            var o = k[n], p = o['get']('selectedIndex');
            if (p >= 0x0) {
                var q = l['split']('.'), r = o['get']('items')[p];
                if (m !== undefined && !m['call'](this, r))
                    continue;
                for (var s = 0x0; s < q['length']; ++s) {
                    if (r == undefined)
                        return '';
                    r = 'get' in r ? r['get'](q[s]) : r[q[s]];
                }
                return r;
            }
        }
        return '';
    }
    function j(k, l) {
        var m = l['get']('player');
        return m !== undefined && m['get']('viewerArea') == k;
    }
}
var script = {"width":"100%","start":"this.init()","class":"Player","scripts":{"getMainViewer":TDV.Tour.Script.getMainViewer,"historyGoForward":TDV.Tour.Script.historyGoForward,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"openLink":TDV.Tour.Script.openLink,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"clone":TDV.Tour.Script.clone,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"setValue":TDV.Tour.Script.setValue,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"showWindowBase":TDV.Tour.Script.showWindowBase,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"mixObject":TDV.Tour.Script.mixObject,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"initQuiz":TDV.Tour.Script.initQuiz,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"executeJS":TDV.Tour.Script.executeJS,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"setModel3DCameraWithCurrentSpot":TDV.Tour.Script.setModel3DCameraWithCurrentSpot,"getKey":TDV.Tour.Script.getKey,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"isPanorama":TDV.Tour.Script.isPanorama,"updateIndexGlobalZoomImage":TDV.Tour.Script.updateIndexGlobalZoomImage,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"isComponentVisible":TDV.Tour.Script.isComponentVisible,"setMapLocation":TDV.Tour.Script.setMapLocation,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"quizFinish":TDV.Tour.Script.quizFinish,"historyGoBack":TDV.Tour.Script.historyGoBack,"getPixels":TDV.Tour.Script.getPixels,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"shareSocial":TDV.Tour.Script.shareSocial,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"showPopupImage":TDV.Tour.Script.showPopupImage,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"unloadViewer":TDV.Tour.Script.unloadViewer,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"getOverlays":TDV.Tour.Script.getOverlays,"startMeasurement":TDV.Tour.Script.startMeasurement,"init":TDV.Tour.Script.init,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"showWindow":TDV.Tour.Script.showWindow,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"cloneBindings":TDV.Tour.Script.cloneBindings,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"getMediaByName":TDV.Tour.Script.getMediaByName,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"existsKey":TDV.Tour.Script.existsKey,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"createTweenModel3D":TDV.Tour.Script.createTweenModel3D,"quizShowScore":TDV.Tour.Script.quizShowScore,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"createTween":TDV.Tour.Script.createTween,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"textToSpeech":TDV.Tour.Script.textToSpeech,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"resumePlayers":TDV.Tour.Script.resumePlayers,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"disableVR":TDV.Tour.Script.disableVR,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"playAudioList":TDV.Tour.Script.playAudioList,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"downloadFile":TDV.Tour.Script.downloadFile,"registerKey":TDV.Tour.Script.registerKey,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"quizStart":TDV.Tour.Script.quizStart,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"toggleVR":TDV.Tour.Script.toggleVR,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"initAnalytics":TDV.Tour.Script.initAnalytics,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"translate":TDV.Tour.Script.translate,"getComponentByName":TDV.Tour.Script.getComponentByName,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"unregisterKey":TDV.Tour.Script.unregisterKey,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"enableVR":TDV.Tour.Script.enableVR,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"setLocale":TDV.Tour.Script.setLocale},"xrPanelsEnabled":true,"id":"rootPlayer","data":{"locales":{"es":"locale/es.txt"},"history":{},"defaultLocale":"es","displayTooltipInTouchScreens":true,"name":"Player1801","textToSpeechConfig":{"pitch":1,"stopBackgroundAudio":false,"rate":1,"speechOnInfoWindow":false,"speechOnTooltip":false,"volume":1,"speechOnQuizQuestion":false}},"backgroundColor":["#FFFFFF"],"layout":"absolute","propagateClick":false,"minHeight":0,"minWidth":0,"gap":10,"backgroundColorRatios":[0],"scrollBarMargin":2,"scrollBarColor":"#000000","watermark":false,"defaultMenu":["fullscreen","mute","rotation"],"height":"100%","children":["this.MainViewer"],"hash": "273e14751caf696ac3bfd87e47abcdcd798646b0caaefe742287767dab861fe5", "definitions": [{"hfovMax":130,"hfov":360,"vfov":180,"id":"panorama_53B5579D_5F29_3D4D_41C7_E39A405F7938","class":"Panorama","frames":[{"class":"CubicPanoramaFrame","cube":{"levels":[{"tags":"ondemand","rowCount":8,"url":"media/panorama_53B5579D_5F29_3D4D_41C7_E39A405F7938_0/{face}/0/{row}_{column}.webp","colCount":48,"height":4096,"class":"TiledImageResourceLevel","width":24576},{"tags":"ondemand","rowCount":4,"url":"media/panorama_53B5579D_5F29_3D4D_41C7_E39A405F7938_0/{face}/1/{row}_{column}.webp","colCount":24,"height":2048,"class":"TiledImageResourceLevel","width":12288},{"tags":"ondemand","rowCount":2,"url":"media/panorama_53B5579D_5F29_3D4D_41C7_E39A405F7938_0/{face}/2/{row}_{column}.webp","colCount":12,"height":1024,"class":"TiledImageResourceLevel","width":6144},{"tags":["ondemand","preload"],"rowCount":1,"url":"media/panorama_53B5579D_5F29_3D4D_41C7_E39A405F7938_0/{face}/3/{row}_{column}.webp","colCount":6,"height":512,"class":"TiledImageResourceLevel","width":3072}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_53B5579D_5F29_3D4D_41C7_E39A405F7938_t.webp"}],"data":{"label":"Sch\u00fcepwis 24c"},"hfovMin":"135%","label":trans('panorama_53B5579D_5F29_3D4D_41C7_E39A405F7938.label'),"thumbnailUrl":"media/panorama_53B5579D_5F29_3D4D_41C7_E39A405F7938_t.webp"},{"id":"MainViewerPanoramaPlayer","displayPlaybackBar":true,"arrowKeysAction":"translate","touchControlMode":"drag_rotation","mouseControlMode":"drag_rotation","viewerArea":"this.MainViewer","class":"PanoramaPlayer","aaEnabled":true,"keepModel3DLoadedWithoutLocation":true},{"id":"mainPlayList","items":[{"camera":"this.panorama_53B5579D_5F29_3D4D_41C7_E39A405F7938_camera","class":"PanoramaPlayListItem","media":"this.panorama_53B5579D_5F29_3D4D_41C7_E39A405F7938","end":"this.trigger('tourEnded')","player":"this.MainViewerPanoramaPlayer"}],"class":"PlayList"},{"initialPosition":{"pitch":0,"class":"PanoramaCameraPosition","yaw":0},"class":"PanoramaCamera","initialSequence":"this.sequence_F6F0DD9D_FD3A_5A10_41EB_5BE879A69E0F","id":"panorama_53B5579D_5F29_3D4D_41C7_E39A405F7938_camera","enterPointingToHorizon":true},{"progressBorderRadius":2,"width":"100%","toolTipFontColor":"#606060","playbackBarHeadShadowHorizontalLength":0,"subtitlesTextShadowHorizontalLength":1,"toolTipBackgroundColor":"#F6F6F6","subtitlesTextShadowVerticalLength":1,"playbackBarHeadShadowOpacity":0.7,"playbackBarBorderRadius":0,"playbackBarProgressBackgroundColorRatios":[0],"subtitlesGap":0,"playbackBarBorderColor":"#FFFFFF","playbackBarHeadBorderRadius":0,"playbackBarProgressBorderColor":"#000000","data":{"name":"Main Viewer"},"subtitlesBackgroundColor":"#000000","playbackBarHeadBorderColor":"#000000","playbackBarBorderSize":0,"progressBackgroundColorRatios":[0],"toolTipPaddingLeft":6,"surfaceReticleColor":"#FFFFFF","progressOpacity":0.7,"subtitlesTextShadowOpacity":1,"progressRight":"33%","progressBarBackgroundColorDirection":"horizontal","toolTipPaddingBottom":4,"subtitlesFontColor":"#FFFFFF","subtitlesTop":0,"playbackBarBackgroundOpacity":1,"subtitlesTextShadowColor":"#000000","playbackBarHeadShadowBlurRadius":3,"vrThumbstickRotationStep":20,"progressBarBorderColor":"#000000","progressBarBackgroundColorRatios":[0],"playbackBarLeft":0,"toolTipPaddingRight":6,"playbackBarHeadHeight":15,"vrPointerColor":"#FFFFFF","playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarHeadShadowColor":"#000000","playbackBarHeadShadowVerticalLength":0,"playbackBarHeadBorderSize":0,"class":"ViewerArea","id":"MainViewer","subtitlesFontSize":"3vmin","subtitlesBackgroundOpacity":0.2,"surfaceReticleSelectionColor":"#FFFFFF","progressBorderColor":"#000000","vrPointerSelectionColor":"#FF6600","subtitlesBorderColor":"#FFFFFF","playbackBarHeadShadow":true,"progressBarBackgroundColor":["#3399FF"],"toolTipPaddingTop":4,"progressBackgroundColor":["#000000"],"firstTransitionDuration":0,"subtitlesBottom":50,"playbackBarHeadBackgroundColor":["#111111","#666666"],"progressBottom":10,"propagateClick":false,"toolTipShadowColor":"#333138","minHeight":50,"playbackBarBottom":5,"progressHeight":2,"minWidth":100,"vrPointerSelectionTime":2000,"progressBarBorderSize":0,"toolTipFontFamily":"Arial","progressBorderSize":0,"playbackBarHeight":10,"progressBarBorderRadius":2,"toolTipTextShadowColor":"#000000","toolTipBorderColor":"#767676","playbackBarBackgroundColorDirection":"vertical","playbackBarProgressBorderSize":0,"toolTipFontSize":"1.11vmin","playbackBarRight":0,"playbackBarHeadWidth":6,"playbackBarProgressBorderRadius":0,"height":"100%","playbackBarBackgroundColor":["#FFFFFF"],"playbackBarProgressBackgroundColor":["#3399FF"],"subtitlesFontFamily":"Arial","progressLeft":"33%"},{"movements":[{"yawSpeed":7.96,"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawDelta":18.5},{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":323},{"yawSpeed":7.96,"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawDelta":18.5}],"id":"sequence_F6F0DD9D_FD3A_5A10_41EB_5BE879A69E0F","class":"PanoramaCameraSequence"}]};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs, script['data']['createQuizConfig'] = function () {
    let a = {}, b = this['get']('data')['translateObjs'];
    for (const c in translateObjs) {
        if (!b['hasOwnProperty'](c))
            b[c] = translateObjs[c];
    }
    return a;
}, TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device.js.map
})();
//Generated with v2026.1.2, Wed Oct 21 2026