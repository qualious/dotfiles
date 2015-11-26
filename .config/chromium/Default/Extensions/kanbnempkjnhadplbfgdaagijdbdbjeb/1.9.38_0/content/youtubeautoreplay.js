var replayobj = {
    replayID: "yReplayBox",
    player: undefined,
    totalDuration: undefined,
    timerID: undefined,
    startSeekTime: 0,
    endSeekTime: undefined,

    buttonClosed: "&raquo;",

    showReplayOptToolTip: "Show Auto Replay Options",
    hideReplayOptToolTip: "Hide Auto Replay Options",

    optionsShowing: false,

    currentVideoID: null,

    cycle: 0,

    readFragments: function () {
        //var frag = replayobj._document.location.hash;
        var frag = document.location.hash;
        if (frag.length == 0) {
            return;
        }
        frag = frag.split("#")[1];
        var xfrags = frag.split(";");
        var robj = {};
        for (var i = 0; i < xfrags.length; i++) {
            var _frags = xfrags[i].split("=");
            if (_frags.length != 2) {
                continue;
            }
            robj[_frags[0]] = _frags[1];
        }
        if (robj.start) {
            replayobj.seekChanged(robj.start, true, true);
            replayobj.player.seekTo(replayobj.startSeekTime, true);
        }
        if (robj.end) {
            replayobj.seekChanged(robj.end, false, true);
        }
        if (!robj.cycles) {
            robj.cycles = "";
        }
        replayobj.cyclesChanged(robj.cycles, true);
        replayobj.enableAutoReplay((robj.autoreplay === 'true'));
        if (robj.showoptions === 'true') {
            replayobj.showSeekOptions(true);
        }
    },

    fixFrags: function () {
        var frag = "";
        frag += "start=" + replayobj.getTimeInMinutes(replayobj.startSeekTime);
        frag += ";end=" + replayobj.getTimeInMinutes(replayobj.endSeekTime);
        if (replayobj.requestedCycles) {
            frag += ";cycles=" + replayobj.requestedCycles;
        }
        frag += ";autoreplay=" + !!replayobj.autoreplayEnabled;
        replayobj._document.location.hash = frag;
    },

    isHTML5: false,

    createHTML5Player: function (videoEle) {
        replayobj.isHTML5 = true;
        replayobj.videoEle = videoEle;
        return {
            getDuration: function () {
                return videoEle.duration;
            },
            getCurrentTime: function () {
                return videoEle.currentTime;
            },
            seekTo: function (time) {
                videoEle.currentTime = time;
            },
            getPlayerState: function () {
                return videoEle.ended ? 0 : 1;
            },
            pauseVideo: function () {
                videoEle.pause();
            },
            playVideo: function () {
                videoEle.play();
            }
        };
    },

    afixReplayButton: function (buttons) {
        if (!replayobj.videoEle) {
            /*Flash player*/
            var par = $(replayobj.player).parent();
            par.append(buttons).css({
                "paddingBottom": buttons.height() + 1,
                "backgroundColor": 'transparent'
            });
        } else {
            /*HTML5 Video player*/
            buttons.addClass('html5Controls');
            var htmlParent = $("#player-api-legacy");
            if (!htmlParent.length) {
                htmlParent = $("#player-api");
            }
            htmlParent.append(buttons).css({
                "margin-bottom": "18px"
            });
            $(buttons).css({
                "position": "absolute",
                "z-index": "920",
                "left": "auto"
            });
        }
    },

    getPlayerContainer: function () {
        if (replayobj.videoEle) {
            return replayobj.videoEle.parentNode.parentNode.parentNode.parentNode;
            //return document.getElementById("watch-ratings-views");
        }
        return replayobj.player;
    },

    getMoviePlayer: function () {
        var p = $("#movie_player"),
            playerFound = false;

        if (p.is('.html5-video-player')) {
            var _p = p.find('video')[0];
            if (_p) {
                playerFound = true;
                p = replayobj.createHTML5Player(_p);
                _p.addEventListener('loadedmetadata', function (e) {
                    if (!isNaN(e.target.duration)) {
                        replayobj.checkAndResetAll(window.location.hash.length == 0);
                    }
                });
            }
        } else {
            p = p[0];
            var callback = function () {
                replayobj.checkAndResetAll(window.location.hash.length == 0);
            };
            document.body.removeEventListener('vidChanged', callback);
            document.body.addEventListener('vidChanged', callback);
            playerFound = true;
            var s = $("<script>").text("window.__vidChanged = function(state){" +
                    "if(state === 1) {" +
                        "document.body.dispatchEvent(new Event('vidChanged'))" +
                    "}" +
                "}" +
                "\n" +
                "if(document.querySelector('#movie_player')){" +
                    "document.querySelector('#movie_player').addEventListener('onStateChange', '__vidChanged');" +
                "}");
            $('body')[0].appendChild(s[0]);
        }

        if(!playerFound) {
            window.addEventListener('loadedmetadata', function (e) {
                replayobj.checkAndResetAll(window.location.hash.length == 0);
            });
        }
        return p;
    },

    checkAndResetAll: function (initial) {
        if (replayobj.didVideoIDChange() || replayobj.didDurationChange()) {
            replayobj.setCurrentVideoID();
            replayobj.endSeekTime = null;
            replayobj.populateSeekOptions(initial);
        }
    },

    isFeatherLite: function () {
        return !!$(".www-feather").length;
    },

    initAndShowSeekOptions: function () {
        var callback = function () {
            replayobj.createSeekOptions();
            //try{
            replayobj.readFragments();
            //}catch(e){
            //}
        };
        replayobj.initDurationDetails(callback);
    },

    createSeekOptions: function () {
        if (!replayobj.seekOptionsDiv) {
            var sopt = $("<div>").addClass('optionsContainer')
                .append($('<span>').addClass('texts').text('Replay From:'))
                .append($("<input>").addClass('inputs').attr('id', 'yStartSeekTime'))
                .append($('<span>').addClass('texts').text('To:'))
                .append($("<input>").addClass('inputs').attr('id', 'yEndSeekTime'))
                .append($('<span>').addClass('texts').text('Cycles:'))
                .append($("<input>").addClass('inputs cycles').attr('id', 'yCycles'));
            if (replayobj.videoEle) {
                sopt.css('margin-top', '-1px');
            }
            replayobj.seekOptionsDiv = sopt;
            replayobj.setBGColorForOpts();
            replayobj.optDiv.append(replayobj.seekOptionsDiv);

            replayobj.ystart = $("#yStartSeekTime");
            replayobj.yend = $("#yEndSeekTime");
            replayobj.ycycles = $("#yCycles");
            replayobj.ycycles.val('∞');
            replayobj.ycycles.addClass('noCycles');

            replayobj.ystart.change(function () {
                replayobj.seekChanged(this.value, true);
            });

            replayobj.yend.change(function () {
                replayobj.seekChanged(this.value);
            });

            replayobj.ycycles.change(function () {
                replayobj.cyclesChanged(this.value);
            });

            replayobj.ystart[0].onkeyup = replayobj.yend[0].onkeyup = replayobj.handleShortCut;
        }
    },

    handleShortCut: function (e) {
        var val = undefined;
        var tar = e.target;
        var cval = parseFloat(replayobj.getTimeInSecs(tar.value + ""));
        var jump = e.shiftKey ? 5 : 1;
        switch (e.keyCode) {
            case 13:    //Enter
                if (e.shiftKey) {
                    val = replayobj.player.getCurrentTime();
                }
                break;
            case 38:    //Up
                val = cval - jump;
                break;
            case 40:    //Down
                val = cval + jump;
                break;
        }
        if (val != undefined) {
            e.preventDefault();
            e.stopPropagation();
            replayobj.seekChanged(val, (tar == replayobj.ystart[0]));
            tar.select();
        }
    },

    showSeekOptions: function (initial) {
        replayobj.createSeekOptions();
        if (replayobj.optionsShowing) {
            replayobj.optDiv.removeClass('optionsShown');
            replayobj.expander.removeClass('optionsShown')
                .attr('title', replayobj.showReplayOptToolTip);
        } else {
            replayobj.optDiv.addClass('optionsShown');
            replayobj.expander.addClass('optionsShown')
                .attr('title', replayobj.hideReplayOptToolTip);

            replayobj.populateSeekOptions(initial);

        }
        replayobj.optionsShowing = !replayobj.optionsShowing;
    },

    populateSeekOptions: function (initial) {
        replayobj.initDurationDetails(null, true);
        replayobj.ystart.val(replayobj.getTimeInMinutes(replayobj.startSeekTime))
            .attr('title', replayobj.getTimeInMinutes(replayobj.startSeekTime) + " mins");

        replayobj.yend.val(replayobj.getTimeInMinutes(replayobj.endSeekTime))
            .attr('title', replayobj.getTimeInMinutes(replayobj.endSeekTime) + " mins");

        replayobj.cyclesChanged('', initial);
    },

    seekChanged: function (value, isStart, initial) {
        if (value == undefined) {
            return;
        }
        value = value + "";
        var txt = replayobj[isStart ? 'ystart' : 'yend'];
        if (value.indexOf(":") != -1) {
            value = replayobj.getTimeInSecs(value);
        }
        value = parseInt(value);
        if (isStart) {
            if (isNaN(value) || value < 0 || value * 1 > replayobj.endSeekTime) {
                value = replayobj.startSeekTime;
            }
            replayobj.startSeekTime = value;
        } else {
            if (isNaN(value) || value * 1 > replayobj.totalDuration || value * 1 < replayobj.startSeekTime) {
                value = replayobj.endSeekTime;
            }
            replayobj.endSeekTime = value;
        }
        txt.val(replayobj.getTimeInMinutes(value))
            .attr('title', replayobj.getTimeInMinutes(value) + " mins");
        if (!initial) {
            replayobj.fixFrags();
        }
    },

    isVideoPlaying: function () {
        if (this.isHTML5) {
            return !replayobj.player.paused;
        } else {
            return (replayobj.player.getPlayerState() === 1);
        }
    },

    cyclesChanged: function (value, initial) {
        replayobj.cycle = 0;
        if (!value.trim().length || isNaN(value) || parseInt(value) < 1) {
            replayobj.ycycles.val('∞');
            replayobj.requestedCycles = -1;
            replayobj.ycycles.css('backgroundPosition', '0 0');
            replayobj.ycycles.addClass('noCycles');
        } else {
            replayobj.ycycles.val(value);
            replayobj.requestedCycles = parseInt(value);
            replayobj.ycycles.css("backgroundPosition", "-27px 0");
            replayobj.ycycles.removeClass('noCycles');
        }

        if (!initial) {
            replayobj.player.playVideo();
        }
        replayobj.cyclesCompleted = false;
        replayobj.ycycles.removeClass('completed');

        if (!initial) {
            replayobj.fixFrags();
        }
    },

    didVideoIDChange: function () {
        return replayobj.currentVideoID !== window.location.search;
    },

    setCurrentVideoID: function () {
        replayobj.currentVideoID = window.location.search;
    },

    destroyReplayCheckbox: function () {
        if(replayobj.seekOptionsDiv) {
            replayobj.seekOptionsDiv.remove();
            replayobj.seekOptionsDiv = null;
            replayobj.endSeekTime = 0;
        }
        replayobj.videoEle = null;
        replayobj.optionsShowing = replayobj.autoreplayEnabled = replayobj.enabled = false;
        $("#" + replayobj.replayID).remove();
    },

    addReplayCheckbox: function () {
        replayobj.destroyReplayCheckbox();
        replayobj._document = window.document;
        replayobj.setCurrentVideoID();

        var mPlayer = replayobj.getMoviePlayer();
        if (mPlayer) {
            replayobj.player = mPlayer;
            if ($(replayobj.replayID).length) {
                return;
            }
            var expander = $("<div>");
            expander.html(replayobj.buttonClosed)
                .addClass("expander")
                .click(function () {
                    replayobj.showSeekOptions(true);
                }).attr('title', replayobj.showReplayOptToolTip);
            replayobj.expander = expander;

            var optDiv = $("<div>").addClass('options');
            replayobj.optDiv = optDiv;

            var replayDiv = $("<div>").attr("id", replayobj.replayID);
            if (this.isFeatherLite()) {
                replayDiv.addClass('featherLite');
            }

            var autoReplayLabel = $("<label>");
            var autoReplayCheckBox = $("<input type='checkbox'>")
                .attr('check', 'false')
                .addClass('checkbox');

            if (replayobj.videoEle) {
                autoReplayCheckBox.css({
                    'margin-top': '2px'
                });
            }

            autoReplayCheckBox.change(function () {
                replayobj.enableAutoReplay(autoReplayCheckBox[0].checked, true);
                replayobj.fixFrags();
            });

            replayobj.autoReplayCheckBox = autoReplayCheckBox;
            var txt = $("<div>").addClass('text').text("Auto Replay");

            autoReplayLabel.addClass('replay-container').append(autoReplayCheckBox, txt);

            replayDiv.append(expander, optDiv, autoReplayLabel);
            replayobj.afixReplayButton(replayDiv);
            replayobj.initAndShowSeekOptions();
        }
    },

    didDurationChange: function () {
        return replayobj.player.getDuration() !== replayobj.totalDuration;
    },

    initDurationDetails: function (callBack, hardReset) {
        try {
            replayobj.totalDuration = replayobj.player.getDuration();
            if (!parseInt(replayobj.totalDuration) || replayobj.totalDuration <= 0) {
                replayobj.retryInit(callBack);
            }
            if ((hardReset || !replayobj.endSeekTime) && replayobj.totalDuration > 0) {
                replayobj.endSeekTime = replayobj.endSeekTime ? replayobj.endSeekTime : replayobj.totalDuration;
            }
            if (callBack) {
                callBack();
            }
        } catch (e) {
            replayobj.retryInit(callBack);
        }
    },

    retryCounter: 0,

    retryInit: function (callBack) {
        replayobj.retryCounter++;
        if (replayobj.retryCounter > 30) {
            return;
        }
        setTimeout(function () {
            replayobj.initDurationDetails(callBack);
        }, 1000);
    },

    getTimeInMinutes: function (secs) {
        var split = 60;
        var min = 0;
        var rsecs = 0;

        if (secs > split) {
            min = Math.floor(secs / split).toFixed(0);
            rsecs = (secs % split).toFixed(0);
        } else {
            rsecs = (secs * 1).toFixed(0);
        }
        if (rsecs < 10) {
            rsecs = "0" + rsecs;
        }
        var rmins = min + ":" + rsecs;
        return rmins;
    },

    getTimeInSecs: function (mins) {
        var tsplit = (mins + "").split(":");
        var rsecs = tsplit[0] * 60;
        var secs = tsplit[1];
        if (secs) {
            rsecs += (secs * 1);
        }
        return rsecs.toFixed(0);
    },

    enableAutoReplay: function (enable, isInternal) {
        replayobj.enabled = enable;
        replayobj.setBGColorForOpts();
        var f = function () {
            replayobj.startListening(enable);
        };
        replayobj.initDurationDetails(f);
        if (!isInternal) {
            replayobj.autoReplayCheckBox[0].checked = enable;
            replayobj.fixFrags();
        }
    },

    setBGColorForOpts: function () {
        $(replayobj.seekOptionsDiv)[(replayobj.enabled) ? 'addClass' : 'removeClass']('replay-active');
    },

    startListening: function (enable) {
        replayobj.autoreplayEnabled = enable;
        if (replayobj.endSeekTime) {
            replayobj.clearTimer();
        }
        if (enable) {
            replayobj.startListener();
        }
    },

    startListener: function () {
        replayobj.timerID = setInterval(replayobj.checkAndReplay, 500);
    },

    clearTimer: function () {
        if (replayobj.timerID) {
            clearTimeout(replayobj.timerID);
        }
    },

    checkAndReplay: function () {
        var ctime = replayobj.player.getCurrentTime(),
            progressPos = 0, totalWidth = 27;

        ctime = ctime.toFixed(0);

        if (replayobj.requestedCycles != -1 && replayobj.cycle >= replayobj.requestedCycles) {
            replayobj.cycle = 0;
            replayobj.player.pauseVideo();
            replayobj.cyclesCompleted = true;
            replayobj.ycycles.addClass('completed');
            return;
        }

        if (replayobj.endSeekTime <= ctime || replayobj.player.getPlayerState() == 0) { //if players state is 0, it means the video has ended
            replayobj.player.seekTo(replayobj.startSeekTime, true);
            replayobj.player.pauseVideo();
            replayobj.player.playVideo();
            replayobj.cycle++;
        }

        if (replayobj.requestedCycles != -1 && !replayobj.cyclesCompleted) {
            progressPos = -1 * (totalWidth - Math.round(totalWidth * (replayobj.cycle / replayobj.requestedCycles)));
            replayobj.ycycles.css('backgroundPosition', progressPos + 'px 0');
        }
    }
};

var mutationObserver = new MutationObserver(function(mutations, observer) {
    for(var i=0; i<mutations.length; ++i) {
        for(var j=0; j<mutations[i].addedNodes.length; ++j) {
            var node = $(mutations[i].addedNodes[j]);
            if(node.is("video.html5-main-video")) {
                node.one('loadedmetadata', function (e) {
                    if (!isNaN(e.target.duration)) {
                        replayobj.addReplayCheckbox();
                    }
                });
            } else if (node.is("#movie_player") && !node.is("div")) {
                replayobj.addReplayCheckbox();
            }
        }
    }
});

mutationObserver.observe(document.body, {
    childList: true,
    subtree: true
});

setTimeout(function () {
    replayobj.addReplayCheckbox();
    var resetFn = function () {
        if (replayobj.didVideoIDChange()) {
            replayobj.addReplayCheckbox();
        }
    };

    /*chrome.runtime.sendMessage({query: "AdBlock"}, function(response) {
        if(response.isEnabled) {
            replayobj.AD_BLOCK_ENABLED = true;
        }
    });*/

    window.document.addEventListener("spfreceived", function(){
        resetFn();
    });
}, 1000);