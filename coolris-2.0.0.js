var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var constants = {
    memberUrl: '//member.coolschool.co.kr',
    searchUrl: '//search.coolschool.co.kr',
    clientIds: {
        'www': 'NjM2YzY5NjU2ZTc0NWY2OTY0M2E0MzRmNGY0YzUzNDM0ODRmNGY0Yw==',
        '': 'NjM2YzY5NjU2ZTc0NWY2OTY0M2E0MzRmNGY0YzUzNDM0ODRmNGY0Yw==',
        'coolendar': 'NjM2YzY5NjU2ZTc0NWY2OTY0M2E0MzRmNGY0YzRhNGY0Mg==',
        'coolendar3': 'NjM2YzY5NjU2ZTc0NWY2OTY0M2E0MzRmNGY0YzRhNGY0Mg==',
        'cooledu': 'NjM2YzY5NjU2ZTc0NWY2OTY0M2E0MzRmNGY0YzQ1NDQ1NQ==',
        'samstory': 'NjM2YzY5NjU2ZTc0NWY2OTY0M2E1MzQxNGQ1MzU0NGY1MjU5',
        'coolmessenger': 'NjM2YzY5NjU2ZTc0NWY2OTY0M2E0MzRmNGY0YzRkNDU1MzUzNDU0ZTQ3NDU1Mg==',
        'coolpama': 'NjM2YzY5NjU2ZTc0NWY2OTY0M2E0MzRmNGY0YzUwNDE0ZDQx',
        'coolbooks': 'NjM2YzY5NjU2ZTc0NWY2OTY0M2E0MzRmNGY0YzU0NDI0ZjRmNGI1Mw==',
        't-mall': 'NjM2YzY5NjU2ZTc0NWY2OTY0M2E1NzQ1NTQ0NTQxNDM0ODQ1NTI=',
        'coolmarket': 'NjM2YzY5NjU2ZTc0NWY2OTY0M2E0MzRmNGY0YzRkNDE1MjRiNDU1NA==',
        'coolmova': 'NjM2YzY5NjU2ZTc0NWY2OTY0M2E0ZDRmNTY0MQ==',
        't-fun': 'NjM2YzY5NjU2ZTc0NWY2OTY0M2E0NDQxNWE1YTRjNDU0NTQ0NTU=',
        'my': 'NjM2YzY5NjU2ZTc0NWY2OTY0M2E0MzRmNGY0YzUzNDM0ODRmNGY0Yw==',
        'member': 'NjM2YzY5NjU2ZTc0NWY2OTY0M2E0MzRmNGY0YzUzNDM0ODRmNGY0Yw==' // myInfo
    }
};
var Coolris = /** @class */ (function () {
    function Coolris(accessToken, serviceName) {
        if (accessToken === void 0) { accessToken = ''; }
        if (serviceName === void 0) { serviceName = 'coolschool'; }
        this.accessToken = accessToken;
        this.serviceName = serviceName;
        this.loginInfo = { result: false, data: undefined };
        this.isSlideMove = true;
        // include dot.js
        // @ts-ignore
        !function () {
            "use strict";
            var u, d = { name: "doT", version: "1.1.1", templateSettings: { evaluate: /\{\{([\s\S]+?(\}?)+)\}\}/g, interpolate: /\{\{=([\s\S]+?)\}\}/g, encode: /\{\{!([\s\S]+?)\}\}/g, use: /\{\{#([\s\S]+?)\}\}/g, useParams: /(^|[^\w$])def(?:\.|\[[\'\"])([\w$\.]+)(?:[\'\"]\])?\s*\:\s*([\w$\.]+|\"[^\"]+\"|\'[^\']+\'|\{[^\}]+\})/g, define: /\{\{##\s*([\w\.$]+)\s*(\:|=)([\s\S]+?)#\}\}/g, defineParams: /^\s*([\w$]+):([\s\S]+)/, conditional: /\{\{\?(\?)?\s*([\s\S]*?)\s*\}\}/g, iterate: /\{\{~\s*(?:\}\}|([\s\S]+?)\s*\:\s*([\w$]+)\s*(?:\:\s*([\w$]+))?\s*\}\})/g, varname: "it", strip: !0, append: !0, selfcontained: !1, doNotSkipEncoded: !1 }, template: void 0, compile: void 0, log: !0 };
            d.encodeHTMLSource = function (e) { var n = { "&": "&#38;", "<": "&#60;", ">": "&#62;", '"': "&#34;", "'": "&#39;", "/": "&#47;" }, t = e ? /[&<>"'\/]/g : /&(?!#?\w+;)|<|>|"|'|\//g; return function (e) { return e ? e.toString().replace(t, function (e) { return n[e] || e; }) : ""; }; }, u = function () { return this || (0, eval)("this"); }.apply(this), "undefined" != typeof module && module.exports ? module.exports = d : "function" == typeof define && define.amd ? define(function () { return d; }) : u.doT = d;
            var s = { append: { start: "'+(", end: ")+'", startencode: "'+encodeHTML(" }, split: { start: "';out+=(", end: ");out+='", startencode: "';out+=encodeHTML(" } }, p = /$^/;
            function l(e) { return e.replace(/\\('|\\)/g, "$1").replace(/[\r\t\n]/g, " "); }
            d.template = function (e, n, t) { var r, o, a = (n = n || d.templateSettings).append ? s.append : s.split, c = 0, i = n.use || n.define ? function r(o, e, a) { return ("string" == typeof e ? e : e.toString()).replace(o.define || p, function (e, r, n, t) { return 0 === r.indexOf("def.") && (r = r.substring(4)), r in a || (":" === n ? (o.defineParams && t.replace(o.defineParams, function (e, n, t) { a[r] = { arg: n, text: t }; }), r in a || (a[r] = t)) : new Function("def", "def['" + r + "']=" + t)(a)), ""; }).replace(o.use || p, function (e, n) { o.useParams && (n = n.replace(o.useParams, function (e, n, t, r) { if (a[t] && a[t].arg && r) {
                var o = (t + ":" + r).replace(/'|\\/g, "_");
                return a.__exp = a.__exp || {}, a.__exp[o] = a[t].text.replace(new RegExp("(^|[^\\w$])" + a[t].arg + "([^\\w$])", "g"), "$1" + r + "$2"), n + "def.__exp['" + o + "']";
            } })); var t = new Function("def", "return " + n)(a); return t ? r(o, t, a) : t; }); }(n, e, t || {}) : e; i = ("var out='" + (n.strip ? i.replace(/(^|\r|\n)\t* +| +\t*(\r|\n|$)/g, " ").replace(/\r|\n|\t|\/\*[\s\S]*?\*\//g, "") : i).replace(/'|\\/g, "\\$&").replace(n.interpolate || p, function (e, n) { return a.start + l(n) + a.end; }).replace(n.encode || p, function (e, n) { return r = !0, a.startencode + l(n) + a.end; }).replace(n.conditional || p, function (e, n, t) { return n ? t ? "';}else if(" + l(t) + "){out+='" : "';}else{out+='" : t ? "';if(" + l(t) + "){out+='" : "';}out+='"; }).replace(n.iterate || p, function (e, n, t, r) { return n ? (c += 1, o = r || "i" + c, n = l(n), "';var arr" + c + "=" + n + ";if(arr" + c + "){var " + t + "," + o + "=-1,l" + c + "=arr" + c + ".length-1;while(" + o + "<l" + c + "){" + t + "=arr" + c + "[" + o + "+=1];out+='") : "';} } out+='"; }).replace(n.evaluate || p, function (e, n) { return "';" + l(n) + "out+='"; }) + "';return out;").replace(/\n/g, "\\n").replace(/\t/g, "\\t").replace(/\r/g, "\\r").replace(/(\s|;|\}|^|\{)out\+='';/g, "$1").replace(/\+''/g, ""), r && (n.selfcontained || !u || u._encodeHTML || (u._encodeHTML = d.encodeHTMLSource(n.doNotSkipEncoded)), i = "var encodeHTML = typeof _encodeHTML !== 'undefined' ? _encodeHTML : (" + d.encodeHTMLSource.toString() + "(" + (n.doNotSkipEncoded || "") + "));" + i); try {
                return new Function(n.varname, i);
            }
            catch (e) {
                throw "undefined" != typeof console && console.log("Could not create a template function: " + i), e;
            } }, d.compile = function (e, n) { return d.template(e, null, n); };
        }.apply(this);
        // ja.js
        // @ts-ignore
        var _hashq = _hashq || [], _httpRequest = null, _ja_famliy_site = {};
        !function (e, t, a, n, i, s, o) { e.GoogleAnalyticsObject = i, e.ga = e.ga || function () { (e.ga.q = e.ga.q || []).push(arguments); }, e.ga.l = 1 * new Date, s = t.createElement(a), o = t.getElementsByTagName(a)[0], s.async = 1, s.src = "https://www.google-analytics.com/analytics.js", o.parentNode.insertBefore(s, o); }(window, document, "script", 0, "ga"), ga("create", "UA-92421532-1", "auto"), ga("send", "pageview"), function () { a(document, "click", function (e) { var t, a, n, i = function e(t) { if (null == t.tagName)
            return !1; if ("a" == t.tagName.toLowerCase() || "area" == t.tagName.toLowerCase())
            return t; if (t.parentNode)
            return e(t.parentNode); return !1; }(e.target); i && (t = function e(t) { var a = []; t.parentNode && "body" != t.parentNode.tagName.toLowerCase() && (a = e(t.parentNode)); t.id ? a.push(t.id) : t.className && a.push(t.className); return a; }(i).join("-"), a = i.href.indexOf(".pdf") > -1 || i.href.indexOf(".mov") > -1 || i.href.indexOf(".avi") > -1 || i.href.indexOf(".m4v") > -1 || i.href.indexOf(".wmv") > -1 || i.href.indexOf(".mp3") > -1 || i.href.indexOf(".rar") > -1 || i.href.indexOf(".zip") > -1 ? "download" : i.href.indexOf(".html") > -1 || i.href.indexOf(".txt") > -1 || i.href.indexOf(".js") > -1 ? "example" : "link", n = i.innerHTML, _hashq.push(["_trackEvent", t, a, n]), i.id); }), _ja_famliy_site.readyState = function () { var e = o("_jc"); e || (e = t(1e9, 9999999999), s("_jc", e += "." + (new Date).getTime())), _hashq.push(["_host", location.hostname]), _hashq.push(["_url", location.href]), _hashq.push(["_jc", e]), n(); }; var e = !1; a(document, "readystatechange", function (a) { if (!e) {
            var i = o("_jc");
            i || (i = t(1e9, 9999999999), s("_jc", i += "." + (new Date).getTime())), _hashq.push(["_host", location.hostname]), _hashq.push(["_url", location.href]), _hashq.push(["_jc", i]), n(), e = !0;
        } }); var t = function (e, t) { return Math.floor(Math.random() * (t - e + 1)) + e; }; function a(e, t, a) { e.addEventListener ? e.addEventListener(t, a, !1) : e.attachEvent && (e["e" + t + a] = a, e[t + a] = function () { e["e" + t + a](window.event); }, e.attachEvent("on" + t, e[t + a])); } function n() { for (var e, t = "", a = 0; a < _hashq.length; a++)
            "" != t && (t += "&"), t += (e = _hashq[a])[0] + "=" + e[1]; !function (e) { var t = ("https:" == document.location.protocol ? "https://" : "http://") + "st.coolschool.co.kr/ja/stat_js.html"; $.ajax({ url: t, contentType: "application/json", dataType: "jsonp", type: "POST", data: e, success: function (e) { if (e.family_html && $(".family-sites")) {
                var t = $(".family-sites").html(e.family_html).text();
                $(".family-sites").html(t);
            } }, error: function (e) { console.log("�ㅽ뙣 - ", e); } }); }(t); } var i = "1000"; function s(e, t) { var a = new Date; a.setDate(a.getDate() + i), document.cookie = e + "=" + t + "; path=/; expires=" + a.toGMTString() + ";"; } function o(e) { e += "="; var t = document.cookie, a = t.indexOf(e), n = ""; if (-1 != a) {
            a += e.length;
            var i = t.indexOf(";", a);
            -1 == i && (i = t.length), n = t.substring(a, i);
        } return unescape(n); } _ja_famliy_site.start = function () { var e = location.href, t = $("#footer"); if (t && 0 !== t.length) {
            var a = t.find(".family-site-back");
            if (a) {
                var n = parseInt(a.css("height")) + 1;
                if (e.indexOf("coolbooks") < 0) {
                    var i = $(window), s = $(document), o = $("html"), r = $("body");
                    a.css({ top: -n + "px" }), s.on("click", "#togglerFamilySite", function (e) { e.preventDefault(); var t = $("#togglerFamilySite span.up").removeClass("hide"), a = s.height(); o.toggleClass("is-family-sites"), r.toggleClass("is-family-sites"), i.trigger(".sticky"), (o.hasClass("is-family-sites") || r.hasClass("is-family-sites")) && (t.addClass("hide"), $("html, body").animate({ scrollTop: a }, 0)); }), a.find("a").on("click", function () { o.removeClass("is-family-sites"); });
                }
            }
        } }, _ja_famliy_site.start(); }();
    }
    Coolris.prototype.start = function () {
        return __awaiter(this, void 0, void 0, function () {
            var gnbOuterTemplateFn, coolTemplate, memberResponse, memberResponseData, isLogin, coolrisTemplateFn;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        gnbOuterTemplateFn = this.doT.template(this.getGnbOuterTemplate());
                        $('#coolrisGnb').html(gnbOuterTemplateFn());
                        // 탑배너 쿠키가 없다면 탑배너 영역 데이터 로드 및 랜더
                        if (!this.getCookie('topbanner')) {
                            this.loadSettingTopBanner();
                        }
                        coolTemplate = {
                            login: this.getLoginTemplate(),
                            menu: this.getGnbMenuTemplate(),
                            more: this.getMoreTemplate(),
                            point: this.getPointTemplate(),
                            beforeLogin: this.getBeforLoginTemplate(),
                            topBanner: this.getTopBannerTemplate()
                        };
                        return [4 /*yield*/, this.loginCheck()];
                    case 1:
                        memberResponse = _a.sent();
                        memberResponseData = memberResponse.data;
                        isLogin = memberResponse.result;
                        coolrisTemplateFn = this.doT.template(this.getGnbTemplate(coolTemplate));
                        $('[data-name=coolrisGnbArea]').html(coolrisTemplateFn({ isLogin: isLogin }));
                        // 로그인 드롭다운
                        this.loginToggle('coolris-profile-btn', 'coolris-profile-dropdown');
                        this.loginDropdown('coolris-profile-dropdown', this.targetProfileCheck);
                        // 더보기 드롭다운
                        this.loginToggle('coolris-more-btn', 'coolris-more-dropdown');
                        this.loginDropdown('coolris-more-dropdown', this.targetMoreCheck);
                        // 이벤트
                        this.onLoginOutEvents();
                        // 로그인에 되어 있다면 내 영역 데이터 로드 및 랜더
                        if (isLogin && this.accessToken) {
                            this.loadSettingMyArea();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    // 버튼 클릭시 드롭다운 켜짐
    Coolris.prototype.loginToggle = function (toggleBtn, dropDownClass) {
        var _this = this;
        $("." + toggleBtn).click(function () {
            $("." + dropDownClass).toggleClass('show');
            _this.onClickBtnGoogleCode(toggleBtn);
        });
    };
    // 더보기 버튼 클릭할 때 구글코드
    Coolris.prototype.onClickBtnGoogleCode = function (toggleBtn) {
        switch (toggleBtn) {
            case 'coolris-more-btn':
                ga('send', 'event', 'link', this.serviceName, 'gnb_more');
                break;
            case 'coolris-alarm-btn':
                ga('send', 'event', 'link', this.serviceName, 'gnb_alarm');
                break;
            case 'coolris-profile-btn':
                ga('send', 'event', this.serviceName, 'coolris', 'gnb_my');
                break;
        }
    };
    // 드롭다운 껐다가 키기
    Coolris.prototype.loginDropdown = function (dropdownClass, callback) {
        var _this = this;
        // 프로필 메뉴 빼고 클릭시 드롭다운 꺼짐
        $(window).click(function ($event) {
            if (!callback($event.target.className)) {
                var dropdown = $("." + dropdownClass);
                if (dropdown.hasClass('show')) {
                    dropdown.removeClass('show');
                }
            }
        });
        $("." + dropdownClass).click(function ($event) {
            // 클릭한 태그가 a이거나 클릭한 태그의 부모가 a이거나 클릭한 클레스의 이름이 dropdown-close 이면 리턴
            if ($event.target.parentNode.tagName.toLowerCase() === 'a' || $event.target.tagName.toLowerCase() === 'a' || $event.target.className.indexOf('dropdown-close') !== -1) {
                return;
            }
            _this.preventClickEvent($event);
        });
    };
    // 마우스 클릭 이벤트 막기
    Coolris.prototype.preventClickEvent = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
    };
    // 로그인 드롭다운을 끌때 프로필 버튼을 클릭했는지 체크
    Coolris.prototype.targetProfileCheck = function (target) {
        var isChecked = false;
        switch (target) {
            case 'profile-name':
                isChecked = true;
                break;
            case 'profile-img':
                isChecked = true;
                break;
            case 'coolris-profile-btn':
                isChecked = true;
                break;
        }
        return isChecked;
    };
    // 더보기 드롭다운을 끌때 더보기 버튼 클릭하는지 체크
    Coolris.prototype.targetMoreCheck = function (target) {
        var isChecked = false;
        if (target === 'coolris-more-btn') {
            isChecked = true;
        }
        return isChecked;
    };
    // 더보기 드롭다운을 끌때 더보기 버튼 클릭하는지 체크
    Coolris.prototype.targetAlarmCheck = function (target) {
        var isChecked = false;
        switch (target) {
            case 'coolris-alarm-btn':
                isChecked = true;
                break;
            case 'coolris-alarm-img':
                isChecked = true;
                break;
        }
        return isChecked;
    };
    // 탑배너 슬라이드 이벤트
    Coolris.prototype.topBannerSlideEvent = function () {
        var _this = this;
        var topBanner = "div[data-name='topBanner']";
        var topBannerPaging = $(topBanner).find('.topbanner-paging');
        var topBannerPagingNum = topBannerPaging.find('li').length;
        // 처음 랜덤으로 슬라이드 보여주기
        this.topBannerSlideManager(0);
        // this.topBannerSlideManager(this.getRandomeNum(topBannerPagingNum - 1));
        var autoSlideFnc = function () {
            for (var i = 0; i < topBannerPagingNum; i++) {
                if (topBannerPaging.find("li:eq(" + i + ")").find('span[data-name="topbannerPaging"]').hasClass('on')) {
                    var clickNum = i + 1;
                    if (clickNum >= topBannerPagingNum) {
                        clickNum = 0;
                    }
                    _this.topBannerSlideManager(clickNum);
                }
            }
        };
        var autoSlideInterval = setInterval(autoSlideFnc, 5000);
        var _loop_1 = function (i) {
            topBannerPaging.find("li:eq(" + i + ")").find('span[data-name="topbannerPaging"]').click(function () {
                if (_this.isSlideMove) {
                    clearInterval(autoSlideInterval);
                    autoSlideInterval = setInterval(autoSlideFnc, 5000);
                    _this.topBannerSlideManager(i);
                }
            });
        };
        for (var i = 0; i < topBannerPagingNum; i++) {
            _loop_1(i);
        }
        $(topBanner).on('mouseenter', function () {
            if (_this.isSlideMove) {
                clearInterval(autoSlideInterval);
                autoSlideInterval = setInterval(autoSlideFnc, 5000);
            }
            return false;
        });
    };
    // topbanner 애니메이션
    Coolris.prototype.topBannerSlideManager = function (slideNum) {
        var _this = this;
        this.isSlideMove = false;
        var topBanner = "div[data-name='topBanner']";
        var topBannerList = $(topBanner).find('.topbanner-list');
        var topBannerPaging = $(topBanner).find('.topbanner-paging');
        var topBannerListH = 79;
        if (!topBannerList.is(':animated')) {
            topBannerList.stop().animate({ 'top': -(slideNum * topBannerListH) }, 600, function () {
                _this.isSlideMove = true;
                topBannerPaging.find('span[data-name="topbannerPaging"]').removeClass('on');
                topBannerPaging.find('li:eq(' + slideNum + ')').find('span[data-name="topbannerPaging"]').addClass('on');
            });
        }
    };
    // topbanner close
    Coolris.prototype.topbannerCloseEvent = function () {
        var _this = this;
        $("p[data-name='topbannerClose']").click(function () {
            $("div[data-name='topBanner']").css('display', 'none');
            _this.setCookie('topbanner', 'yes', 1);
        });
    };
    Coolris.prototype.getRandomeNum = function (index) {
        return Math.floor((Math.random() * index));
    };
    Coolris.prototype.getGnbOuterTemplate = function () {
        return "\n            <div data-name=\"divTopBannerArea\"></div>\n            <div data-name=\"coolrisGnbArea\"></div>\n        ";
    };
    // 탑배너 템플릿
    Coolris.prototype.getTopBannerTemplate = function () {
        return "\n            <style>\n                /*===== topBanner =====*/\n                div[coolrisTopBanner] {\n                    background-color:#24d1ab;\n                    /*display:none;*/\n                    text-align:center;\n                    font-family: NanumSquareRound, sans-serif;\n                }\n                 @media screen and (max-width: 992px) {\n                     div[coolrisTopBanner] {\n                        display: none !important;\n                     }\n                }\n                div[coolrisTopBanner] > div {\n                    height:79px;\n                    overflow: hidden;\n                    position: relative;\n                }\n                div[coolrisTopBanner] > div > div { position:relative; top: 0; }\n                div[coolrisTopBanner] .inner {\n                    width: 980px;\n                    margin: 0 auto;\n                }\n                div[coolrisTopBanner] .inner a { display: block; width: 100%; }\n                div[coolrisTopBanner] .top_close{\n                    color:#000;\n                    font-size:11px;\n                    position:absolute;\n                    bottom:5px;\n                    right:100px;\n                    font-family: \"Dotum\", sans-serif;\n                    z-index:999;\n                }\n                div[coolrisTopBanner] .top_close img {\n                    margin-right: 7px;\n                    margin-bottom: 3px;\n                    vertical-align: middle;\n                }\n                div[coolrisTopBanner] .topbanner-paging {\n                    display: block !important;\n                    position: relative;\n                    height: 0;\n                    z-index: 10;\n                }\n                div[coolrisTopBanner] .topbanner-paging ul {\n                    position: absolute ;\n                    right: 0;\n                    top: 10px;\n                    list-style: none;\n                    padding: 0;\n                    margin: 0;\n                }\n                div[coolrisTopBanner] .topbanner-paging ul li {\n                    margin-bottom: 5px;\n                }\n                div[coolrisTopBanner] .topbanner-paging ul li span[data-name='topbannerPaging'] {\n                    display: block;\n                    width: 10px;\n                    height: 10px;\n                    border-radius: 50%;\n                    background-color: rgba(100, 100, 100, 0.4);\n                    cursor: pointer;\n                }\n                \n                div[coolrisTopBanner] .topbanner-paging ul li span[data-name='topbannerPaging'].on {\n                    background-color: rgba(100, 100, 100, 1);\n                }\n                div[coolrisTopBanner] .topbanner-paging ul li span[data-name='topbannerPaging']:hover {\n                    background-color: rgba(100, 100, 100, 1);\n                }\n                div[coolrisTopBanner] .top {\n                    position: absolute;\n                    top: 0;\n                    width: 100%;\n                }\n                div[coolrisTopBanner] .topbanner-list .topbanner-item {\n                    height: 79px;\n                }\n                div[coolrisTopBanner] .topbanner-list .topbanner-item img{\n                    display: block;\n                    margin: 0 auto;\n                }\n                div[coolrisTopBanner] .topbanner-paging p[data-name='topbannerClose'] {\n                    font-size: 13px;\n                    color: #000000;\n                    position: absolute;\n                    top: 60px;\n                    right: 15px;\n                    cursor: pointer;\n                    margin: 0;\n                    letter-spacing: -0.5px;\n                    line-height: initial;\n                }\n                div[coolrisTopBanner] .topbanner-paging p[data-name='topbannerClose']:hover {\n                    font-weight: bold;\n                }\n            </style>\n            <div coolrisTopBanner data-name=\"topBanner\">\n                <div>\n                    <div class=\"inner topbanner-paging\">\n                        <ul>\n                            {{ for(var idx in it.coolTopBannerItems) { }}\n                                <li><span data-name=\"topbannerPaging\"></span></li>\n                            {{ } }}\n                        </ul>\n                        <p data-name=\"topbannerClose\" class=\"\">\uC624\uB298 \uBCF4\uC9C0 \uC54A\uAE30</p>\n                    </div>\n                    <div class=\"topbanner-list\">\n                        {{ for(var idx in it.coolTopBannerItems) { }}\n                        <a onclick=\"ga('send', 'event', 'link', '" + this.serviceName + "', 'main_banner_top');\" href=\"{{=it.coolTopBannerItems[idx].url}}\" target=\"_blank\">\n                            <!--suppress CssInvalidPropertyValue -->\n                            <div class=\"topbanner-item\" style=\"background-color: #{{=it.coolTopBannerItems[idx].backgroundColor}}\">\n                                <div class=\"inner\">\n                                    <img src=\"{{=it.coolTopBannerItems[idx].img}}\" alt=\"img\" />\n                                </div>\n                            </div>\n                        </a>\n                        {{ } }}\n                    </div>\n                </div>\n            </div>\n        ";
    };
    // 포인트 템플릿
    Coolris.prototype.getPointTemplate = function () {
        return "\n            <style>\n                div[coolrisPoint] {\n                    display: table-cell;\n                    vertical-align: middle;\n                    padding-right: 13px;\n                }\n                div[coolrisPoint] a {\n                    font-size: 14px;\n                    display: block;\n                    font-weight: bold;\n                    color: #00a1e4 !important;\n                }\n                div[coolrisPoint] a img {\n                    vertical-align: middle;\n                    display: inline-block;\n                    margin-right: 3px;\n                }\n            </style>\n            <div coolrisPoint>\n                <a onclick=\"ga('send', 'event', 'link', '" + this.serviceName + "', 'gnb_point');\" href=\"//point.coolschool.co.kr\" target=\"_blank\">\n                    <img src=\"//update.coolmessenger.com/_ImageServer/coolschool/commonTop/point.png\" alt=\"img\" />\n                    <span data-name=\"spanPoint\"></span>\n                </a>\n            </div>   \n        ";
    };
    // 로그인 전 템플릿
    Coolris.prototype.getBeforLoginTemplate = function () {
        return "\n            <style>\n                div[coolrisBeforLogin] {\n                    /*margin-top: -3px;*/\n                }\n                div[coolrisBeforLogin] a {\n                    font-size: 13px;\n                    color: #000000;\n                    cursor: pointer;\n                    line-height: 25px;\n                    display: inline-block;\n                }\n                div[coolrisBeforLogin] span {\n                    display: inline-block;\n                    margin: 0 3px;\n                }\n            </style>\n            <div coolrisBeforLogin>\n                <a href=\"javascript:void(0)\" data-name=\"aCoolLogin\">\uB85C\uADF8\uC778</a> \n                <span>/</span> \n                <a href=\"javascript:void(0)\" data-name=\"aCoolJoin\">\uD68C\uC6D0\uAC00\uC785</a>\n            </div>\n        ";
    };
    // 알람 템플릿
    Coolris.prototype.getAlarmTemplate = function () {
        return "\n            <style>\n                div[coolrisAlarm] {\n                    position: relative;\n                    display: table-cell;\n                    vertical-align: middle;\n                    font-family: 'dotum', sans-serif;\n                }\n                div[coolrisAlarm] .coolris-alarm-btn {\n                    cursor: pointer;\n                }\n                div[coolrisAlarm] .coolris-alarm-btn img {\n                    display: block;\n                }\n                div[coolrisAlarm] .coolris-alarm-dropdown {\n                    background-color: #ffffff;\n                    display: none;\n                    padding: 12px 10px 10px;\n                    min-width: 182px;\n                    border: 1px solid #9b9b9b;\n                    border-radius: .25rem;\n                    position: absolute;\n                    top: 32px;\n                    right: 0;\n                    font-size: 12px;\n                    width: 300px;\n                    z-index: 9999;\n                }\n                div[coolrisAlarm] .coolris-alarm-dropdown.show {\n                    display: block;\n                }\n                div[coolrisAlarm] .coolris-alarm-dropdown .dropdown-tail {\n                    position: absolute;\n                    top: -8px;\n                    right: 3px;\n                }\n                div[coolrisAlarm] .coolris-alarm-dropdown li {\n                    border-bottom: 1px solid #ebebeb;\n                    padding: 13px;\n                }\n                div[coolrisAlarm] .coolris-alarm-dropdown li:hover {\n                    background-color: rgba(100,100,100,0.1);\n                }\n                div[coolrisAlarm] .coolris-alarm-dropdown ul {\n                    height: auto;\n                    max-height: 330px;\n                    overflow-y: auto;\n                }\n                div[coolrisAlarm] .coolris-alarm-dropdown li p {\n                    color: #414141;\n                    text-overflow: ellipsis;\n                    overflow: hidden;\n                    white-space: nowrap;\n                    margin-bottom: 1px;\n                    margin-top: 0;\n                }\n                div[coolrisAlarm] .coolris-alarm-dropdown li span {\n                    text-overflow: ellipsis;\n                    overflow: hidden;\n                    white-space: nowrap;\n                    margin-bottom: 1px;\n                    color: #b0b0b0;\n                    display: block;\n                    margin-top: 10px;\n                    line-height: initial;\n                }\n                div[coolrisAlarm] .coolris-alarm-dropdown div {\n                    text-align: center;\n                    padding-top: 15px;\n                }\n                div[coolrisAlarm] .coolris-alarm-dropdown div a {\n                    display: inline-block;\n                    padding: 0 25px;\n                    min-width: 55px;\n                    line-height: 30px;\n                    height: 33px;\n                    font-size: 13px;\n                    border-radius: 5px;\n                    border: 1px solid #9b9b9b;\n                    box-sizing: border-box;\n                    transition: opacity 0.2s, box-shadow 0.2s;\n                    color: #000000;\n                }\n                div[coolrisAlarm] .coolris-alarm-dropdown div a:hover {\n                    opacity: 0.6;\n                    box-shadow: 2px 2px 3px 0 rgba(0,0,0,0.26);\n                }\n            </style>\n            <div coolrisAlarm>\n                <span class=\"coolris-alarm-btn\">\n                    <img class=\"coolris-alarm-img\" src=\"//update.coolmessenger.com/_ImageServer/metoring/kin_alam_on.png\" alt=\"\uC54C\uB78C \uC774\uBBF8\uC9C0\"/>\n                </span>\n                <div class=\"coolris-alarm-dropdown\">\n                    <img class=\"dropdown-tail\" src=\"//update.coolmessenger.com/_ImageServer/coolschool/resources/images/dropbox_tail.png\" alt=\"img\" />\n                    <ul>\n                    {{ for(var idx in it.coolAlarmItems) { }}\n                        <li onclick=\"ga('send', 'event', 'link', '" + this.serviceName + "', 'gnb_alarm_item');\">\n                            <a href=\"{{=it.coolAlarmItems[idx].url}}\" target=\"_blank\">\n                                <p>{{=it.coolAlarmItems[idx].message}}</p>\n                                <span>{{=it.toDateYmdFormat(new Date(it.coolAlarmItems[idx].createdDate))}}</span>\n                            </a>\n                        </li>\n                    {{ } }}\n                    </ul>\n                    <div>\n                        <a onclick=\"ga('send', 'event', 'link', '" + this.serviceName + "', 'all_alarm');\" href=\"/notification/index\" target=\"_blank\">\uC54C\uB9BC \uBAA8\uB450 \uBCF4\uAE30</a>\n                    </div>\n                </div>\n            </div>   \n        ";
    };
    // 로그인 템플릿
    Coolris.prototype.getLoginTemplate = function () {
        return "\n            <style>\n                div[coolrisProfile] {\n                    position: relative;\n                    display: table-cell;\n                    vertical-align: middle;\n                    padding-right: 13px;\n                }\n                div[coolrisProfile] img {\n                    vertical-align: middle;\n                    border-style: none;\n                }\n                div[coolrisProfile] .coolris-profile-btn {\n                    cursor: pointer;\n                    background-color: #f7f7f7;\n                    font-size: 14px;\n                    display: block;\n                    vertical-align: middle;\n                }\n                div[coolrisProfile] .coolris-profile-btn .profile-name {\n                    font-weight: bold;\n                    color: #000000;\n                    margin-right: 3px;\n                    padding-right: 12px;\n                    position: relative;\n                }\n                div[coolrisProfile] .coolris-profile-btn .profile-name:after {\n                    background-image: url(//update.coolmessenger.com/_ImageServer/coolschool/resources/images/coolprofile_arrow.png);\n                    background-size: 8px 5px;\n                    background-position: right center;\n                    background-repeat: no-repeat;\n                    content: '';\n                    display: block;\n                    width: 8px;\n                    height: 5px;\n                    position: absolute;\n                    right: 0;\n                    top: 50%;\n                    margin-top: -2px;\n                }\n                div[coolrisProfile] .coolris-profile-dropdown.show ~ .coolris-profile-btn .profile-name {\n                    color: #00a1e4;\n                }\n                div[coolrisProfile] .coolris-profile-dropdown.show ~ .coolris-profile-btn .profile-name:after {\n                    transform: rotate(180deg);\n                }\n                div[coolrisProfile] .coolris-profile-btn .profile-img {\n                    border-radius: 50%;\n                    height: 20px;\n                    width: 20px;\n                    margin-right: 3px;\n                }\n                div[coolrisProfile] .coolris-profile-btn:after {\n                    display: none !important;\n                }\n                div[coolrisProfile] .coolris-profile-dropdown {\n                    background-color: #ffffff;\n                    display: none;\n                    padding: 12px 10px 10px;\n                    min-width: 182px;\n                    border: 1px solid #9b9b9b;\n                    border-radius: .25rem;\n                    position: absolute;\n                    top: 33px;\n                    right: 0;\n                    z-index: 9999;\n                }\n                div[coolrisProfile] .coolris-profile-dropdown.show {\n                    display: block;\n                }\n                div[coolrisProfile] .coolris-profile-dropdown .dropdown-tail {\n                    position: absolute;\n                    top: -8px;\n                    right: 20px;\n                }\n                div[coolrisProfile] .coolris-profile-dropdown p {\n                    color: #000000;\n                    font-size: 14px;\n                    font-family: 'Noto Sans', sans-serif;\n                    margin-bottom: 8px;\n                    margin-top: 0;\n                }\n                div[coolrisProfile] .coolris-profile-dropdown div {\n                    color: #7e7e7e;\n                    font-size: 14px;\n                }\n                div[coolrisProfile] .coolris-profile-dropdown p a {\n                    color: #000000;\n                    font-size: 14px;\n                }\n                div[coolrisProfile] .coolris-profile-dropdown p {\n                    text-align: center;\n                }\n                div[coolrisProfile] .coolris-profile-dropdown a img {\n                   margin-top: -3px;\n                   vertical-align: middle;\n                }\n                div[coolrisProfile] .coolris-profile-dropdown .logout {\n                    height: 28px;\n                    line-height: 28px;\n                    font-size: 13px;\n                    color: #232323;\n                    background-color: #fafafa;\n                    display: block;\n                    border: 1px solid #dedede;\n                    text-align: center;\n                    margin-top: 17px;\n                    cursor: pointer;\n                }\n            </style>\n            <div coolrisProfile>\n                <div class=\"coolris-profile-dropdown\">\n                    <img class=\"dropdown-tail\" src=\"//update.coolmessenger.com/_ImageServer/coolschool/resources/images/dropbox_tail.png\" alt=\"img\" />\n                    <p><a onclick=\"ga('send', 'event', 'link', '" + this.serviceName + "', 'gnb_myinfo');\" href=\"//member.coolschool.co.kr/my/#/\">\uB0B4\uC815\uBCF4 \uBCF4\uAE30</a></p>\n                    <span class=\"logout dropdown-close\" data-name=\"spanLogout\">\uB85C\uADF8\uC544\uC6C3</span>\n                </div>\n                <span class=\"coolris-profile-btn\">\n                    <img class=\"profile-img\" data-name=\"imgProfileImg\"\n                        src=\"//update.coolmessenger.com/_ImageServer/coolschool/resources/images/default_profile.png\"\n                        onerror=\"this.src='//update.coolmessenger.com/_ImageServer/coolschool/resources/images/default_profile.png'\" \n                        alt=\"img\" />\n                    <span class=\"profile-name\" data-name=\"spanProfileName\"></span>\n                </span>\n            </div>\n        ";
    };
    // gnb 메뉴 템플릿
    Coolris.prototype.getGnbMenuTemplate = function () {
        return "\n            <style>\n                ul[coolrisGnbMenu] {\n                    float: left;\n                }\n                ul[coolrisGnbMenu]:after {\n                    content: '';\n                    display: block;\n                    clear: both;\n                }\n                ul[coolrisGnbMenu] li {\n                    float: left;\n                    margin-right: 28px;\n                    position: relative;\n                }\n                ul[coolrisGnbMenu] li:after {\n                    content: '';\n                    display: block;\n                    width: 1px;\n                    height: 12px;\n                    background-color: #dedede;\n                    position: absolute;\n                    right: -15px;\n                    top: 50%;\n                    transform: translateY(-50%);\n                }\n                ul[coolrisGnbMenu] li a {\n                    font-size: 15px !important;\n                    line-height: 25px;\n                    color: #000000;\n                    text-decoration: none;\n                    display: block;\n                }\n            </style>\n            <ul coolrisGnbMenu>\n                <li onclick=\"ga('send', 'event', 'link', '" + this.serviceName + "', 'gnb_home');\">\n                    <a href=\"//www.coolschool.co.kr/\" target=\"_blank\">\uCFE8\uC2A4\uCFE8 \uD648</a>\n                </li>\n                <li onclick=\"ga('send', 'event', 'link', '" + this.serviceName + "', 'gnb_samstory');\">\n                    <a href=\"//samstory.coolschool.co.kr/zone\" target=\"_blank\">\uBE14\uB85C\uADF8</a>\n                </li>\n                <li onclick=\"ga('send', 'event', 'link', '" + this.serviceName + "', 'gnb_cooledu');\">\n                    <a href=\"//cooledu.coolschool.co.kr\" target=\"_blank\">\uC5F0\uC218/\uBAA8\uC784</a>\n                </li>\n                <li onclick=\"ga('send', 'event', 'link', '" + this.serviceName + "', 'gnb_cooledutech');\">\n                    <a href=\"//www.coolschool.co.kr/edutech\" target=\"_blank\">\uC5D0\uB4C0\uD14C\uD06C</a>\n                </li>\n                <li onclick=\"ga('send', 'event', 'link', '" + this.serviceName + "', 'gnb_coolmarket');\">\n                    <a href=\"//coolmarket.coolschool.co.kr\" target=\"_blank\">\uAD50\uAD6C\uBAB0</a>\n                </li>\n                <li onclick=\"ga('send', 'event', 'link', '" + this.serviceName + "', 'gnb_coolendar');\">\n                    <a href=\"//coolendar.coolschool.co.kr\" target=\"_blank\">\uC77C\uC815\uAD00\uB9AC</a>\n                </li>\n                <!--<li onclick=\"ga('send', 'event', 'link', '" + this.serviceName + "', 'gnb_home');\">\n                    <a href=\"//www.coolschool.co.kr/\" target=\"_blank\">\uCFE8\uC2A4\uCFE8 \uD648</a>\n                </li>\n                <li onclick=\"ga('send', 'event', 'link', '" + this.serviceName + "', 'gnb_coolmsg');\">\n                    <a href=\"//school.coolmessenger.com/\" target=\"_blank\">\uCFE8\uBA54\uC2E0\uC800</a>\n                </li>\n                <li onclick=\"ga('send', 'event', 'link', '" + this.serviceName + "', 'gnb_sms');\">\n                    <a href=\"//coolsms.coolmessenger.com/\" target=\"_blank\">\uBB38\uC790</a>\n                </li>-->\n            </ul>\n        ";
    };
    // 더보기 템플릿
    Coolris.prototype.getMoreTemplate = function () {
        return "\n            <style>\n                div[coolrisMore] {\n                    position: relative;\n                    float: left;\n                    margin-top: -2px;\n                    line-height: 1;\n                }\n                div[coolrisMore] .coolris-more-dropdown a:hover {\n                    text-decoration: underline;\n                }\n                div[coolrisMore] .coolris-more-dropdown a { color: #000000; }\n                div[coolrisMore] .coolris-more-dropdown {\n                    display: none;\n                    border: 1px solid #545454;\n                    font-family: 'dotum', sans-serif;\n                    font-size: 12px;\n                    line-height: 25px;\n                    width: 556px;\n                    position: absolute;\n                    background-color: #ffffff;\n                    right: 0;\n                    top: 33px;\n                    z-index: 9999;\n                }\n                div[coolrisMore] .coolris-more-dropdown.show {\n                    display: block;\n                }\n                div[coolrisMore] .coolris-more-btn {\n                    cursor: pointer;\n                    position: relative;\n                    padding-right: 20px;\n                    font-size: 14px;\n                }\n                div[coolrisMore] .coolris-more-btn:after {\n                    content: '';\n                    display: block;\n                    position: absolute;\n                    right: 0;\n                    top: 50%;\n                    margin-top: -4px;\n                    transition: transform 0.3s;\n                    background-image: url(//update.coolmessenger.com/_ImageServer/coolschool/resources/images/more-arrow.png);\n                    background-repeat: no-repeat;\n                    width: 13px;\n                    height: 8px;\n                }\n                div[coolrisMore] .coolris-more-dropdown.show ~ .coolris-more-btn:after {\n                    transform: rotate(-180deg);\n                    background-image: url(//update.coolmessenger.com/_ImageServer/coolschool/resources/images/more-arrow-on.png);\n                }\n                div[coolrisMore] .coolris-more-dropdown.show ~ .coolris-more-btn {\n                    color: #00a1e4;\n                }\n                div[coolrisMore] ul:after {\n                    content: '';\n                    display: block;\n                    clear: both;\n                }\n                div[coolrisMore] ul {\n                    display: table;\n                    width: 100%;\n                }\n                div[coolrisMore] ul li {\n                    width: 20%;\n                    padding-left: 15px;\n                    border-right: 1px solid #e1e1e1;\n                    display: table-cell;\n                }\n                div[coolrisMore] ul li:last-child {\n                    border-right: 0;\n                }\n                div[coolrisMore] ul li h4 {\n                    color: #000000;\n                    margin-top: 16px !important;\n                    font-size: 12px !important;\n                    line-height: 25px;\n                }\n                div[coolrisMore] ul li a {\n                    color: #8d8d8d !important;\n                    display: block;\n                    margin-top: 3px;\n                    width: 100%;\n                    font-size: 12px !important;\n                }\n                div[coolrisMore] ul li a:visited, div[coolrisMore] ul li a:focus, div[coolrisMore] ul li a:hover {\n                    color: #8d8d8d !important;\n                }\n                div[coolrisMore] div.coolris-more-dropdown div {\n                    border-top: 1px solid #e1e1e1;\n                    height: 36px;\n                    line-height: 36px;\n                    padding: 0 15px;\n                }\n                div[coolrisMore] div.coolris-more-dropdown div:after {\n                    content: '';\n                    display: block;\n                    clear: both;\n                }\n                div[coolrisMore] div a {\n                    float: left;\n                }\n                div[coolrisMore] div span {\n                    float: right;\n                    cursor: pointer;\n                }\n            </style>\n            <div coolrisMore>\n                <div class=\"coolris-more-dropdown\">\n                    <ul>\n                        <li>\n                            <h4>\uD559\uAD50\uC5C5\uBB34</h4>\n                            <a onclick=\"ga('send', 'event', 'link', '" + this.serviceName + "', 'gnb_more_coolmsg');\" href=\"//school.coolmessenger.com/\" target=\"_blank\">\uCFE8\uBA54\uC2E0\uC800</a>\n                            <a onclick=\"ga('send', 'event', 'link', '" + this.serviceName + "', 'gnb_more_sms');\" href=\"//coolsms.coolmessenger.com/\" target=\"_blank\">\uBB38\uC790</a>\n                            <a onclick=\"ga('send', 'event', 'link', '" + this.serviceName + "', 'gnb_more_mova');\" href=\"//coolmova.coolschool.co.kr/\" target=\"_blank\">\uC548\uC2EC\uBC88\uD638</a>\n                            <a onclick=\"ga('send', 'event', 'link', '" + this.serviceName + "', 'gnb_more_banner');\" href=\"//school.coolbooks.co.kr/\" target=\"_blank\">\uD559\uAD50\uAC04\uD589\uBB3C</a>\n                        </li>\n                        <li>\n                            <h4>\uAD50\uC0AC\uC0DD\uD65C</h4>\n                            <a onclick=\"ga('send', 'event', 'link', '" + this.serviceName + "', 'gnb_more_samstory');\" href=\"//samstory.coolschool.co.kr/\" target=\"_blank\">\uBE14\uB85C\uADF8</a>\n                            <a onclick=\"ga('send', 'event', 'link', '" + this.serviceName + "' 'gnb_more_books');\" href=\"//coolbooks.coolschool.co.kr/\" target=\"_blank\">\uCC45</a>\n                            <a onclick=\"ga('send', 'event', 'link', '" + this.serviceName + "', 'gnb_more_edu_meeting');\" href=\"//cooledu.coolschool.co.kr/cooledulub/trainingList#ing\" target=\"_blank\">\uBAA8\uC784</a>\n                            /*<a onclick=\"ga('send', 'event', 'link', '" + this.serviceName + "', 'gnb_more_mentoring');\" href=\"//www.coolschool.co.kr/kin/mentoringList\" target=\"_blank\">\uD559\uAD50\uC0DD\uD65C\uC0C1\uB2F4</a>*/\n                        </li>\n                        <li>\n                            <h4>\uD559\uAD50\uC5F0\uC218</h4>\n                            <a onclick=\"ga('send', 'event', 'link', '" + this.serviceName + "', 'gnb_more_edu');\" href=\"//cooledu.coolschool.co.kr/\" target=\"_blank\">\uC6D0\uACA9\uC5F0\uC218</a>\n                            <a onclick=\"ga('send', 'event', 'link', '" + this.serviceName + "', 'gnb_more_edu_platform');\" href=\"//cooledu.coolschool.co.kr/cooledulub/trainingList#ing\" target=\"_blank\">\uC9D1\uD569\uC5F0\uC218</a>\n                            <a onclick=\"ga('send', 'event', 'link', '" + this.serviceName + "', 'gnb_more_edu_pama');\" href=\"//coolpama.coolschool.co.kr/\" target=\"_blank\">\uD559\uBD80\uBAA8\uC5F0\uC218</a>\n                        </li>\n                        <li>\n                            <h4>\uD559\uAD50\uB9C8\uCF13</h4>\n                            <a onclick=\"ga('send', 'event', 'link', '" + this.serviceName + "', 'gnb_more_market');\" href=\"//coolmarket.coolschool.co.kr/\" target=\"_blank\">\uAD50\uAD6C\uBAB0</a>\n                            <a onclick=\"ga('send', 'event', 'link', '" + this.serviceName + "', 'gnb_more_market_tmall');\" href=\"//t-mall.coolschool.co.kr/\" target=\"_blank\">\uBCF5\uC9C0\uBAB0</a>\n                            <a onclick=\"ga('send', 'event', 'link', '" + this.serviceName + "', 'gnb_more_market_funding');\" href=\"//t-fun.coolschool.co.kr/\" target=\"_blank\">\uD380\uB529</a>\n                        </li>\n                        <li>\n                            <h4>\uAD50\uC721\uC774\uC288</h4>\n                            <a onclick=\"ga('send', 'event', 'link', '" + this.serviceName + "', 'gnb_more_news');\" href=\"//samstory.coolschool.co.kr/zone/story/eduin\" target=\"_blank\">\uAD50\uC721\uB274\uC2A4</a>\n                            <a onclick=\"ga('send', 'event', 'link', '" + this.serviceName + "', 'gnb_more_edutech');\" href=\"//www.coolschool.co.kr/edutech\" target=\"_blank\" style=\"margin-bottom: 10px;\">\uC5D0\uB4C0\uD14C\uD06C\uC2A4\uD1A0\uB9AC</a>\n                            <h4>\uCFE8\uC2A4\uCFE8\uC18C\uC2DD</h4>\n                            <a onclick=\"ga('send', 'event', 'link', '" + this.serviceName + "', 'gnb_more_notice');\" href=\"//www.coolschool.co.kr/news/index\" target=\"_blank\">\uACF5\uC9C0/\uC18C\uC2DD</a>\n                            <a onclick=\"ga('send', 'event', 'link', '" + this.serviceName + "', 'gnb_more_contact');\" href=\"//www.coolschool.co.kr/messenger/technicalSupport\" target=\"_blank\">\uBB38\uC758\uD558\uAE30</a>\n                            <a onclick=\"ga('send', 'event', 'link', '" + this.serviceName + "', 'gnb_more_profile');\" href=\"//www.coolschool.co.kr/profile/search\" target=\"_blank\" style=\"margin-bottom: 22px\">\uC120\uC0DD\uB2D8\uCC3E\uAE30</a>\n                        </li>\n                    </ul>\n                    <div>\n                        <a onclick=\"ga('send', 'event', 'link', '" + this.serviceName + "', 'gnb_more_all_service');\" href=\"//coolschool.co.kr/allService\" target=\"_blank\">\uC11C\uBE44\uC2A4 \uC804\uCCB4\uBCF4\uAE30</a>\n                        <span class=\"dropdown-close\">\uB2EB\uAE30</span>\n                    </div>\n                </div>\n                <span class=\"coolris-more-btn\">\n                    \uB354\uBCF4\uAE30\n                </span>\n            </div>\n        ";
    };
    // gnb 템플릿
    Coolris.prototype.getGnbTemplate = function (coolTemplate) {
        return "\n            <style>\n                @font-face {\n                    font-family: 'NanumSquareRound';\n                    src: url(\"//resource.coolmessenger.com/coolschool/resources/fonts/nanum-square-round/NanumSquareRoundR.woff2\") format('woff2'),\n                    url(\"//resource.coolmessenger.com/coolschool/resources/fonts/nanum-square-round/NanumSquareRoundR.woff\") format('woff'),\n                    url(\"//resource.coolmessenger.com/coolschool/resources/fonts/nanum-square-round/NanumSquareRoundR.eot\") format('opentype');\n                }\n            \n                body {\n                    margin: 0;\n                }\n                @media screen and (max-width: 980px) {\n                    #coolrisGnb > div {\n                        display: none;\n                    }\n                }\n                .coolris-gnb[coolrisGnb] {\n                    /*line-height: 1;*/\n                    font-family: NanumSquareRound, sans-serif;\n                    width: 100%;\n                    border-bottom: 1px solid #dedede;\n                    background-color: #f7f7f7;\n                }\n                .coolris-gnb[coolrisGnb] h4 {\n                    margin: 0;\n                }\n                .coolris-gnb[coolrisGnb] a {\n                    text-decoration: none;\n                }\n                .coolris-gnb[coolrisGnb] a:hover, .coolris-gnb[coolrisGnb] a:focus, .coolris-gnb[coolrisGnb] a:visited {\n                    text-decoration: none;\n                    color: #000000;\n                }\n                .coolris-gnb[coolrisGnb] ul {\n                    margin: 0;\n                    padding: 0;\n                }\n                .coolris-gnb[coolrisGnb] li {\n                    list-style: none;\n                    box-sizing: border-box;\n                }\n                .coolris-gnb[coolrisGnb] > div:after {\n                    content: '';\n                    display: block;\n                    clear: both;\n                }\n                .coolris-gnb[coolrisGnb] > div {\n                    width: 980px;\n                    margin: 0 auto;\n                    padding: 12px 0;\n                    box-sizing: border-box;\n                }\n                .coolris-gnb[coolrisGnb] > div:nth-child(2) {\n                    height: 51px;\n                }\n                .coolris-gnb[coolrisGnb] > div[data-name='divTopBannerArea'] {\n                    padding: 0;\n                    width: 100%;\n                }\n                .coolris-gnb[coolrisGnb] .coolris-login-section {\n                    float: right;\n                    display: flex;\n                    align-items: center;\n                    line-height: 25px;\n                    /*height: 100%;*/\n                }\n                .coolris-gnb[coolrisGnb] .coolris-login-section .custom-section .btn-custom {\n                    font-size: 14px;\n                    cursor: pointer;\n                    color: #727272;\n                    font-weight: bold;\n                    position: relative;\n                }\n                .coolris-gnb[coolrisGnb] .coolris-login-section .custom-section .btn-custom:after {\n                    content: '';\n                    display: block;\n                    position: absolute;\n                    width: 1px;\n                    height: 14px;\n                    background-color: #dcdedf;\n                    right: -11px;\n                    top: 50%;\n                    margin-top: -6px;\n                    cursor: default;\n                }\n                .coolris-gnb[coolrisGnb] .coolris-menu-section {\n                    float: left;\n                    display: flex;\n                    align-items: center;\n                    /*height: 100%;*/\n                }\n            </style>\n            <nav class=\"coolris-gnb\" coolrisGnb>\n                <div>\n                    <section class=\"coolris-menu-section\">\n                        " + coolTemplate.menu + "\n                        " + coolTemplate.more + "\n                    </section>\n                    <section class=\"coolris-login-section\">\n                        <div class=\"custom-section\"></div>\n                        {{? it.isLogin === false }}\n                            " + coolTemplate.beforeLogin + "\n                        {{?? it.isLogin === true }}\n                            " + coolTemplate.login + "\n                            " + coolTemplate.point + "\n                            <div data-name=\"divAlarmArea\"></div>\n                        {{?}}\n                    </section>\n                </div>\n            </nav>\n        ";
    };
    Coolris.prototype.loginCheck = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.loginInfo.result) {
                            return [2 /*return*/, this.loginInfo];
                        }
                        this.loginInfo.result = false;
                        this.loginInfo.data = undefined;
                        result = { result: false, coolid: '' };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, $.ajax({
                                method: 'GET',
                                dataType: 'jsonp',
                                url: constants.memberUrl + "/loginCheck"
                            })];
                    case 2:
                        result = _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        return [2 /*return*/, { result: false }];
                    case 4:
                        if (!result || !result.coolid) {
                            return [2 /*return*/, { result: false }];
                        }
                        this.loginInfo.result = true;
                        this.loginInfo.data = result;
                        return [2 /*return*/, this.loginInfo];
                }
            });
        });
    };
    Coolris.prototype.loadProfileResult = function (accessToken) {
        return __awaiter(this, void 0, void 0, function () {
            var response, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, $.ajax(constants.searchUrl + "/api/cool/_searchMemberByAccessToken/" + accessToken)];
                    case 1:
                        response = _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        e_2 = _a.sent();
                        response = { result: false };
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/, response];
                }
            });
        });
    };
    Coolris.prototype.settingProfile = function (profileData) {
        $('[data-name=imgProfileImg]').attr('src', profileData.profileImage);
        $('[data-name=spanProfileName]').html(profileData.name);
        $('[data-name=spanPoint]').html(this.addComma(profileData.point));
    };
    Coolris.prototype.loadAlarmMessage = function (coolIdx) {
        return __awaiter(this, void 0, void 0, function () {
            var response, e_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, $.ajax(constants.searchUrl + "/api/coolMessage/_search/coolIdx/" + coolIdx)];
                    case 1:
                        response = _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        e_3 = _a.sent();
                        response = { result: false };
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/, response];
                }
            });
        });
    };
    Coolris.prototype.addComma = function (num) {
        var regexp = /\B(?=(\d{3})+(?!\d))/g;
        return num.toString().replace(regexp, ',');
    };
    /**
     * 쿨스쿨 로그인 페이지로 이동
     * @param {string} clientId
     * @param {string} action (선택)
     * @param env 개발 URL 사용여부
     */
    Coolris.prototype.goDefaultCoolLogin = function (clientId, action) {
        if (clientId === void 0) { clientId = ''; }
        if (action === void 0) { action = ''; }
        var COOL_LOGIN_CALLBACK_URL = window.location.protocol + '//' + window.location.host + '/callback';
        var COOL_LOGIN_URL = constants.memberUrl + "/login";
        var param = {
            client_id: clientId,
            redirect_uri: COOL_LOGIN_CALLBACK_URL,
            redirect_uri_next: window.location.href,
            do_action: action
        };
        switch (clientId) {
            case 'NjM2YzY5NjU2ZTc0NWY2OTY0M2E0NDQxNWE1YTRjNDU0NTQ0NTU=': // t-fun
                param.redirect_uri = 'http://t-fun.coolschool.co.kr/oauth_cool.php';
                param.redirect_uri_next = 'http://t-fun.coolschool.co.kr/happy_member_login.php?mode=logout';
                break;
            case 'NjM2YzY5NjU2ZTc0NWY2OTY0M2E0MzRmNGY0YzRkNDE1MjRiNDU1NA==': // coolmarket
                param.redirect_uri = 'https://coolmarket.coolschool.co.kr/api/coolschool/callbackLogin.asp';
                param.redirect_uri_next = 'https://coolmarket.coolschool.co.kr';
                break;
            case 'NjM2YzY5NjU2ZTc0NWY2OTY0M2E1NzQ1NTQ0NTQxNDM0ODQ1NTI=': // t-mall
                param.redirect_uri = 'https://t-mall.coolschool.co.kr/api/coolschool/callbackLogin.asp';
                param.redirect_uri_next = 'https://t-mall.coolschool.co.kr/';
                break;
            case 'NjM2YzY5NjU2ZTc0NWY2OTY0M2E0ZDRmNTY0MQ==': // coolmova
                param.redirect_uri = 'https://coolmova.coolschool.co.kr:443/jiran/api/login';
                break;
        }
        var loginURL = COOL_LOGIN_URL;
        var paramStr = $.param(param);
        if (param.redirect_uri_next.search('&') === -1 && action !== '') {
            paramStr = paramStr.replace('&do_action=', '?do_action=');
        }
        window.location.href = loginURL + "?" + paramStr;
    };
    Coolris.prototype.goCoolLogin = function () {
        var CLIENT_ID = this.getClientId();
        this.goDefaultCoolLogin(CLIENT_ID);
    };
    Coolris.prototype.logout = function (logoutOpts) {
        return __awaiter(this, void 0, void 0, function () {
            var logoutUrl, logoutProc, setting, settingResponse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        logoutUrl = constants.memberUrl + "/logout?client_id=:client_id";
                        logoutProc = constants.memberUrl + "/logoutProc";
                        setting = {
                            url: logoutUrl.replace(':client_id', this.getClientId),
                            type: 'GET',
                            contentType: "application/json",
                            dataType: "jsonp"
                        };
                        return [4 /*yield*/, $.ajax(setting)];
                    case 1:
                        settingResponse = _a.sent();
                        if (!(settingResponse.result === 'success')) return [3 /*break*/, 6];
                        this.setCookie('accessToken', '', -1);
                        this.setCookie('client_id', '', -1);
                        this.logoutForOtherSite(); // 외부의 다른 사이트들 로그아웃을 위함
                        logoutOpts = logoutOpts || {};
                        if (!(logoutOpts.isLogoutProc === undefined || logoutOpts.isLogoutProc === true)) return [3 /*break*/, 5];
                        if (!!logoutOpts.logoutProcUrl) return [3 /*break*/, 3];
                        return [4 /*yield*/, $.get("//" + window.location.host + "/logoutProc")];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, $.get(logoutOpts.logoutProcUrl + "/logoutProc")];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5:
                        if (logoutOpts.isRestoreLocation === undefined || logoutOpts.isRestoreLocation === true) { // 로그아웃 후 있던 페이지에 머무를 것이냐 말것이냐
                            location.href = "//" + window.location.host + window.location.pathname;
                        }
                        return [2 /*return*/, true];
                    case 6: return [2 /*return*/, false];
                }
            });
        });
    };
    Coolris.prototype.logoutForOtherSite = function () {
        var clientId = this.getClientId();
        switch (clientId) {
            case 'NjM2YzY5NjU2ZTc0NWY2OTY0M2E0NDQxNWE1YTRjNDU0NTQ0NTU=': // t-fun
                location.href = 'http://t-fun.coolschool.co.kr/happy_member_login.php?mode=logout';
                break;
            case 'NjM2YzY5NjU2ZTc0NWY2OTY0M2E0MzRmNGY0YzRkNDE1MjRiNDU1NA==': // coolmarket
                location.href = 'https://coolmarket.coolschool.co.kr//member/logout.asp';
                break;
            case 'NjM2YzY5NjU2ZTc0NWY2OTY0M2E1NzQ1NTQ0NTQxNDM0ODQ1NTI=': // t-mall
                break;
            case 'NjM2YzY5NjU2ZTc0NWY2OTY0M2E0ZDRmNTY0MQ==': // coolmova
                break;
        }
    };
    // 회원가입
    Coolris.prototype.join = function () {
        var CLIENT_ID = this.getClientId();
        var form = document.createElement('form'); // form 엘리멘트 생성
        form.setAttribute('method', 'post'); // method 속성 설정
        form.setAttribute('action', 'https://member.coolschool.co.kr/'); // action 속성 설정
        document.body.appendChild(form); // 현재 페이지에 form 엘리멘트 추가
        var insert1 = document.createElement("input"); // input 엘리멘트 생성
        var insert2 = document.createElement("input");
        insert1.setAttribute('name', 'svcid'); // clidentId
        insert1.setAttribute('value', CLIENT_ID);
        insert2.setAttribute('name', 'redirect_uri'); // 완료 후 돌아올 url
        insert2.setAttribute('value', window.location.href);
        form.appendChild(insert1);
        form.appendChild(insert2);
        form.submit();
    };
    /**
     * 로그인, 회원가입, 로그아웃 이벤트 등록
     */
    Coolris.prototype.onLoginOutEvents = function () {
        var _this = this;
        // 로그인
        $("[data-name='aCoolLogin']").click(function () {
            ga('send', 'event', 'link', _this.serviceName, 'gnb_login');
            _this.goCoolLogin();
        });
        // 회원가입
        $("[data-name='aCoolJoin']").click(function () {
            ga('send', 'event', 'link', _this.serviceName, 'gnb_join');
            _this.join();
        });
        // 로그아웃
        $("[data-name='spanLogout']").click(function () {
            ga('send', 'event', 'link', _this.serviceName, 'gnb_logout');
            _this.logout();
        });
    };
    Coolris.prototype.getClientId = function () {
        var host = location.host;
        host = host.replace('.coolschool.co.kr', '')
            .replace('coolschool.co.kr', '')
            .replace('local-', '')
            .replace('dev-', '')
            .replace('local', '')
            .replace('dev', '')
            .replace('.com', '')
            .replace('.co.kr', '')
            .replace('school.', '');
        var clientId = constants.clientIds[host];
        if (!clientId && console) {
            console.warn('can`t not find clientId');
        }
        return clientId;
    };
    /**
     * 쿠키 저장
     * @param cname
     * @param cvalue
     * @param exdays
     */
    Coolris.prototype.setCookie = function (cname, cvalue, exdays) {
        var d = new Date();
        // tslint:disable-next-line
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = 'expires=' + d.toUTCString();
        document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
    };
    /**
     * 쿠키 가져오기
     * @param cname
     */
    Coolris.prototype.getCookie = function (cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    };
    /**
     * y.m.d 형태로 format 변경
     * @param date
     */
    Coolris.prototype.toDateYmdFormat = function (date) {
        var yyyy = date.getFullYear().toString();
        var mm = (date.getMonth() + 1).toString();
        var dd = date.getDate().toString();
        return yyyy + '.' + (mm[1] ? mm : '0' + mm[0]) + '.' + (dd[1] ? dd : '0' + dd[0]);
    };
    /**
     *  알람 데이터 로드 및 세팅
     */
    Coolris.prototype.loadSettingMyArea = function () {
        return __awaiter(this, void 0, void 0, function () {
            var coolAlarmItems, profileResult, profileData, coolAlarmResponse, alarmTemplateFn;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        coolAlarmItems = [];
                        return [4 /*yield*/, this.loadProfileResult(this.accessToken)];
                    case 1:
                        profileResult = _a.sent();
                        if (!profileResult.result) {
                            return [2 /*return*/];
                        }
                        profileData = profileResult.data;
                        this.settingProfile(profileData);
                        return [4 /*yield*/, this.loadAlarmMessage(profileData.idx)];
                    case 2:
                        coolAlarmResponse = _a.sent();
                        if (!coolAlarmResponse.result) {
                            return [2 /*return*/];
                        }
                        coolAlarmItems = coolAlarmResponse.data;
                        alarmTemplateFn = this.doT.template(this.getAlarmTemplate());
                        $("[data-name='divAlarmArea']").html(alarmTemplateFn({
                            coolAlarmItems: coolAlarmItems,
                            toDateYmdFormat: this.toDateYmdFormat
                        }));
                        // 알람 드롭다운 이벤트
                        this.loginToggle('coolris-alarm-btn', 'coolris-alarm-dropdown');
                        this.loginDropdown('coolris-alarm-dropdown', this.targetAlarmCheck);
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     *  탑배너 데이터 로드 및 세팅
     */
    Coolris.prototype.loadSettingTopBanner = function () {
        return __awaiter(this, void 0, void 0, function () {
            var setting, responseStr, response, nowDate, topBannerTemplateFn;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        setting = {
                            url: '//samstory.coolschool.co.kr/api/externalJsonInfo?type=topBanner',
                            type: 'GET'
                        };
                        return [4 /*yield*/, $.ajax(setting)];
                    case 1:
                        responseStr = _a.sent();
                        response = JSON.parse(responseStr);
                        if (!response || !response.categories || response.categories.length === 0) {
                            return [2 /*return*/];
                        }
                        nowDate = new Date();
                        response.bannerData = response.categories.filter(function (k) {
                            if (nowDate >= new Date(k.startDate) && nowDate <= new Date(k.endDate)) {
                                return k;
                            }
                        });
                        this.suffle(response.bannerData);
                        if (!response.bannerData || response.bannerData.length === 0) {
                            return [2 /*return*/];
                        }
                        topBannerTemplateFn = this.doT.template(this.getTopBannerTemplate());
                        $("[data-name='divTopBannerArea']").html(topBannerTemplateFn({
                            coolTopBannerItems: response.bannerData
                        }));
                        // 탑배너 슬라이드 이벤트
                        this.topBannerSlideEvent();
                        // 탑배너 닫기 이벤트
                        this.topbannerCloseEvent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Coolris.prototype.suffle = function (a) {
        var j, x, i;
        for (i = a.length; i; i -= 1) {
            j = Math.floor(Math.random() * i);
            x = a[i - 1];
            a[i - 1] = a[j];
            a[j] = x;
        }
    };
    Coolris.prototype.loginResultPromise = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this.loginInfo.result) {
                    return [2 /*return*/, this.loginInfo];
                }
                else {
                    return [2 /*return*/, this.loginCheck()];
                }
                return [2 /*return*/];
            });
        });
    };
    return Coolris;
}());
//# sourceMappingURL=coolris-2.0.0.js.map