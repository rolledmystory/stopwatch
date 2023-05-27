function Main(urlData) {
    "use strict";
    var downTimer;
    var animationBar_mc = exportRoot.scr_timer.animatedObject_mc.white_mc;
    var loopsDone;
    var timerObj = {
        value: 10000,
        loop: 0,
        pause: false
    };
    var allTime = 0;
    if (isIE()) {
        window.dispatchEvent(createIEevent('resize'));
    } else {
        window.dispatchEvent(new Event('resize'));
    }
    exportRoot.onlinestopwatch.on("mousedown", function() {
        window.open('https://www.online-stopwatch.com', '_blank');
    });
    downTimer = new Timer({
        tick: 0.032,
        ontick: onTimer,
        onend: onFinish
    });
    exportRoot.scr_timer.grc_start.addEventListener("mousedown", startPauseAnimation);
    exportRoot.scr_timer.grc_clear.addEventListener("mousedown", stopAnimation);
    exportRoot.scr_timer.btn_back.addEventListener("mousedown", backHandler);
    $("#loopForever").prop("checked", true);
    injectUrlData();
    function injectUrlData() {
        var realWindow = window.parent || window;
        realWindow.addEventListener("keyup", keyboardEventHandler, false);
        if (urlData.language) {
            overWriteLanguage(urlData.language);
        } else {
            urlData.language = {};
            urlData.language.start = "start";
            urlData.language.pause = "pause";
            urlData.language.continue = "continue";
        }
        urlData.countdown = (/[0-9]{2}:[0-9]{2}:[0-9]{2}/.test(urlData.countdown)) ? urlData.countdown : null;
        if (urlData.countdown != "00:00:00") {
            settings(urlData.countdown);
        }
        if (urlData.autoplay == "true" && urlData.countdown != "00:00:00") {
            exportRoot.scr_set.grc_set.dispatchEvent("mousedown");
            if (!isMobile.any)
                exportRoot.scr_timer.grc_start.dispatchEvent("mousedown");
        } else if (urlData.autoplay != "true" && urlData.countdown != "00:00:00") {
            settings(urlData.countdown);
        } else {
            settings(null);
        }
        if (urlData.mute == "true") {
            soundHandler("mute");
        }
        function overWriteLanguage(data) {
            exportRoot.scr_set.txt_set.text = data.set.ucfirst();
            exportRoot.scr_set.txt_clear.text = data.clear.ucfirst();
            exportRoot.scr_timer.txt_start.text = data.start.ucfirst();
            exportRoot.scr_timer.txt_clear.text = data.clear.ucfirst();
            exportRoot.scr_timer.btn_back.txt_back.text = data.back.ucfirst();
            $("label[for = pauseTimers]").text(data.pause_timer_between_each_loop.ucfirst());
            $("label[for = loopNum]").text(data.loop.ucfirst());
            $("#label0").text(data.times.ucfirst());
            $("label[for = loopForever]").text(data.loop_forever.ucfirst());
            exportRoot.scr_timer.loops.text = data.loops.ucfirst();
        }
    }
    function backHandler() {
        stopAnimation();
        exportRoot.scr_set.txt_timer.text = timerObj.value.toString().formatedMilliseconds().hms;
        settings();
    }
    function startPauseAnimation(e) {
        switch (exportRoot.scr_timer.txt_start.text.toLowerCase()) {
        case urlData.language.start:
            exportRoot.scr_timer.txt_start.text = urlData.language.pause.ucfirst();
            exportRoot.scr_timer.grc_start.gotoAndStop(1);
            downTimer.start(timerObj.value / 1000);
            createjs.Tween.get(animationBar_mc).to({
                scaleX: 0
            }, 0).to({
                scaleX: 1
            }, timerObj.value);
            break;
        case urlData.language.pause:
            exportRoot.scr_timer.txt_start.text = urlData.language.continue.ucfirst();
            createjs.Tween.pauseAllTweens();
            exportRoot.scr_timer.grc_start.gotoAndStop(2);
            downTimer.pause();
            break;
        case urlData.language.continue:
            createjs.Tween.resumeAllTweens();
            exportRoot.scr_timer.txt_start.text = urlData.language.pause.ucfirst();
            exportRoot.scr_timer.grc_start.gotoAndStop(1);
            downTimer.start();
            break;
        }
    }
    function stopAnimation(e) {
        createjs.Sound.stop();
        exportRoot.scr_timer.flashScreen.gotoAndStop(0);
        createjs.Tween.removeAllTweens();
        downTimer.stop();
        allTime = 0;
        onTimer(timerObj.value);
        animationBar_mc.scaleX = 0;
        exportRoot.scr_timer.txt_start.text = urlData.language.start.ucfirst();
        exportRoot.scr_timer.totalRun_txt.text = urlData.language.total_running_time.ucfirst() + ": 00:00:00.000";
        if (timerObj.loop != 0) {
            loopsDone = timerObj.loop;
            exportRoot.scr_timer.grc_start.gotoAndStop(0);
            exportRoot.scr_timer.showLoops_txt.text = (timerObj.loop - loopsDone) + "/" + timerObj.loop;
        } else {
            exportRoot.scr_timer.grc_start.gotoAndStop(0);
            exportRoot.scr_timer.showLoops_txt.text = "0";
        }
    }
    function onTimer(e) {
        var got = e.toString().formatedMilliseconds();
        exportRoot.scr_timer.txt_timer.text = got.hms;
        exportRoot.scr_timer.txt_mils.text = got.ms;
        top.document.title = got.hms;
        got = (allTime + (timerObj.value - e)).toString().formatedMilliseconds();
        exportRoot.scr_timer.totalRun_txt.text = urlData.language.total_running_time.ucfirst() + ": " + got.hms + "." + got.ms;
    }
    function onFinish(e) {
        onTimer(0);
        createjs.Tween.removeAllTweens();
        if (timerObj.loop !== 0) {
            loopsDone--;
            exportRoot.scr_timer.showLoops_txt.text = (timerObj.loop - loopsDone) + "/" + timerObj.loop;
            allTime = timerObj.value * (timerObj.loop - loopsDone);
            if (loopsDone == 0 && timerObj.loop != 0) {
                exportRoot.scr_timer.txt_start.text = "";
                exportRoot.scr_timer.grc_start.gotoAndStop(3);
                var snd = (urlData.ns) ? urlData.ns : "bell2";
                var rpt = (urlData.nslen) ? parseInt(urlData.nslen) : 999;
                createjs.Sound.play(snd, createjs.Sound.INTERRUPT_EARLY, 0, 0, rpt, 1, 0, null, null);
                exportRoot.scr_timer.flashScreen.gotoAndPlay("loopA");
                return;
            }
        }
        exportRoot.scr_timer.flashScreen.gotoAndPlay(1);
        var snd = (urlData.ns) ? urlData.ns : "alarm2";
        var rpt = (urlData.nslen) ? parseInt(urlData.nslen) : 999;
        createjs.Sound.play(snd, createjs.Sound.INTERRUPT_EARLY, 0, 0, rpt, 1, 0, null, null);
        if (timerObj.loop == 0) {
            allTime += timerObj.value;
            exportRoot.scr_timer.showLoops_txt.text = parseInt(allTime / timerObj.value);
        }
        downTimer.start(timerObj.value / 1000);
        createjs.Tween.get(animationBar_mc).to({
            scaleX: 0
        }, 0).to({
            scaleX: 1
        }, timerObj.value);
        if (timerObj.pause) {
            startPauseAnimation();
            return;
        }
    }
    function setTitle(val) {
        exportRoot.scr_set.txt_timer.text = val;
        var mill = val.timeToMill();
        timerObj.value = mill;
        top.document.title = val;
    }
    function isSettingsActive() {
        return (exportRoot.scr_set.visible == true || exportRoot.scr_set.x == 0) ? true : false;
    }
    function settings(val) {
        exportRoot.scr_set.x = 0;
        exportRoot.scr_set.visible = true;
        exportRoot.scr_timer.visible = false;
        exportRoot.scr_set.scaleX = 1.01;
        var i;
        var typed = "";
        var showText = (val) ? val : "00:00:00";
        setTitle(showText);
        $("input").show();
        exportRoot.scr_set.grc_set.addEventListener("mousedown", setSetBtn);
        function setSetBtn(e) {
            if (showText == "00:00:00" || showText == "")
                showText = "00:00:10";
            var mill = showText.timeToMill();
            timerObj.value = mill;
            onTimer(mill);
            if ($('input[id=loopForever]:checked').val() != undefined) {
                timerObj.loop = 0;
            } else {
                timerObj.loop = (isNaN($("#howMany").val())) ? 1 : parseInt($("#howMany").val());
                loopsDone = timerObj.loop;
            }
            exportRoot.scr_timer.showLoops_txt.text = (timerObj.loop == 0) ? "0" : "0/" + timerObj.loop.toString();
            timerObj.pause = ($('input[id=pauseTimers]:checked').val() != undefined) ? true : false;
            exportRoot.scr_set.x = -2000;
            exportRoot.scr_set.visible = false;
            exportRoot.scr_timer.visible = true;
            $("input").hide();
        }
        exportRoot.scr_set.grc_clear.addEventListener("mousedown", setClearBtn);
        function setClearBtn(e) {
            showText = "00:00:00";
            typed = "";
            exportRoot.scr_set.txt_timer.text = showText;
        }
        for (i = 0; i < 10; i++) {
            exportRoot.scr_set["grc_b" + i].name = i;
            exportRoot.scr_set["grc_b" + i].removeEventListener("mousedown", setupNumBtn);
            exportRoot.scr_set["grc_b" + i].addEventListener("mousedown", setupNumBtn);
        }
        function setupNumBtn(e) {
            if (typed.length == 6)
                return
            var num = e.currentTarget.name;
            typed += num;
            var newNum = typed.zeroPad(6);
            showText = newNum.splice(2, 0, ":");
            showText = showText.splice(5, 0, ":");
            exportRoot.scr_set.txt_timer.text = showText;
        }
    }
    function keyboardEventHandler(e) {
        e.stopImmediatePropagation();
        e.preventDefault();
        if (e.which == 13 || e.which == 32) {
            if (isSettingsActive()) {
                exportRoot.scr_set.grc_set.dispatchEvent("mousedown");
                setTimeout(function() {
                    exportRoot.scr_set.grc_set.dispatchEvent("pressup");
                }, 100);
            } else if (exportRoot.scr_timer.txt_start.text != "" && !isSettingsActive()) {
                startPauseAnimation();
            } else if (exportRoot.scr_timer.txt_start.text == "" && !isSettingsActive()) {
                exportRoot.scr_timer.grc_clear.dispatchEvent("mousedown");
            }
        }
        if (e.which == 37) {
            exportRoot.scr_timer.btn_back.dispatchEvent("mousedown");
        }
        if (e.key.match(/[0-9]+/) && isSettingsActive()) {
            exportRoot.scr_set["grc_b" + e.key].dispatchEvent("mousedown");
            setTimeout(function() {
                exportRoot.scr_set["grc_b" + e.key].dispatchEvent("pressup");
            }, 100);
        } else if (e.which == 67 && isSettingsActive()) {
            exportRoot.scr_set.grc_clear.dispatchEvent("mousedown");
            setTimeout(function() {
                exportRoot.scr_set.grc_clear.dispatchEvent("pressup");
            }, 100);
        } else if (e.which == 67 && !isSettingsActive()) {
            exportRoot.scr_timer.grc_clear.dispatchEvent("mousedown");
        }
    }
}
