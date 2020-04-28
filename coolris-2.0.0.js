var Coolris = /** @class */ (function () {
    function Coolris() {
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
    }
    Coolris.prototype.start = function () {
        // interface Cooltemplate에 템플릿 주기
        var coolTemplate = {
            login: this.getLoginTemplate(),
            menu: this.getGnbMenuTemplate(),
            more: this.getMoreTemplate(),
            alarm: this.getAlarmTemplate(),
            point: this.getPointTemplate(),
            beforeLogin: this.getBeforLoginTemplate()
        };
        // dot에 template을 준다.
        // @ts-ignore
        var coolrisTemplateFn = this.doT.template(this.getGnbTemplate(coolTemplate));
        $('#coolrisGnb').html(coolrisTemplateFn);
        // 알람 드롭다운
        this.loginToggle('coolris-alarm-btn', 'coolris-alarm-dropdown');
        this.loginDropdown('coolris-alarm-dropdown', this.targetAlarmCheck);
        // 로그인 드롭다운
        this.loginToggle('coolris-profile-btn', 'coolris-profile-dropdown');
        this.loginDropdown('coolris-profile-dropdown', this.targetProfileCheck);
        // 더보기 드롭다운
        this.loginToggle('coolris-more-btn', 'coolris-more-dropdown');
        this.loginDropdown('coolris-more-dropdown', this.targetMoreCheck);
    };
    // 버튼 클릭시 드롭다운 켜짐
    Coolris.prototype.loginToggle = function (toggleBtn, dropDownClass) {
        $("." + toggleBtn).on('click', function () {
            $("." + dropDownClass).toggleClass('show');
        });
    };
    // 드롭다운 껐다가 키기
    Coolris.prototype.loginDropdown = function (dropdownClass, callback) {
        var _this = this;
        // 프로필 메뉴 빼고 클릭시 드롭다운 꺼짐
        $(window).on('click', function ($event) {
            if (!callback($event.target.className)) {
                var dropdown = $("." + dropdownClass);
                if (dropdown.hasClass('show')) {
                    dropdown.removeClass('show');
                }
            }
        });
        $("." + dropdownClass).on('click', function ($event) {
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
        switch (target) {
            case 'coolris-more-btn':
                isChecked = true;
                break;
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
    // 포인트 템플릿
    Coolris.prototype.getPointTemplate = function () {
        return "\n            <style>\n                div[coolrisPoint] {\n                    display: table-cell;\n                    vertical-align: middle;\n                    padding-right: 13px;\n                }\n                div[coolrisPoint] a {\n                    font-size: 14px;\n                    display: block;\n                    font-weight: bold;\n                    color: #00a1e4 !important;\n                }\n                div[coolrisPoint] a img {\n                    vertical-align: middle;\n                    display: inline-block;\n                    margin-right: 3px;\n                }\n            </style>\n            <div coolrisPoint>\n                <a href=\"//point.coolschool.co.kr\" target=\"_blank\">\n                    <img src=\"//update.coolmessenger.com/_ImageServer/coolschool/commonTop/point.png\" alt=\"img\" />   \n                    7,345        \n                </a>\n            </div>   \n        ";
    };
    // 로그인 전 템플릿
    Coolris.prototype.getBeforLoginTemplate = function () {
        return "\n            <style>\n                div[coolrisBeforLogin] {\n                    margin-top: -3px;\n                }\n                div[coolrisBeforLogin] a {\n                    font-size: 13px;\n                    color: #000000;\n                }\n                div[coolrisBeforLogin] span {\n                    display: inline-block;\n                    margin: 0 3px;\n                }\n            </style>\n            <div coolrisBeforLogin>\n                <a href=\"\">\uB85C\uADF8\uC778</a> <span>/</span> <a href=\"\">\uD68C\uC6D0\uAC00\uC785</a>\n            </div>\n        ";
    };
    // 알람 템플릿
    Coolris.prototype.getAlarmTemplate = function () {
        return "\n            <style>\n                div[coolrisAlarm] {\n                    position: relative;\n                    display: table-cell;\n                    vertical-align: middle;\n                    font-family: 'dotum', sans-serif;\n                }\n                div[coolrisAlarm] .coolris-alarm-btn {\n                    cursor: pointer;\n                }\n                div[coolrisAlarm] .coolris-alarm-btn img {\n                    display: block;\n                }\n                div[coolrisAlarm] .coolris-alarm-dropdown {\n                    background-color: #ffffff;\n                    display: none;\n                    padding: 12px 10px 10px;\n                    min-width: 182px;\n                    border: 1px solid #9b9b9b;\n                    border-radius: .25rem;\n                    position: absolute;\n                    top: 37px;\n                    right: 0;\n                    font-size: 12px;\n                    width: 300px;\n                }\n                div[coolrisAlarm] .coolris-alarm-dropdown.show {\n                    display: block;\n                }\n                div[coolrisAlarm] .coolris-alarm-dropdown .dropdown-tail {\n                    position: absolute;\n                    top: -8px;\n                    right: 3px;\n                }\n                div[coolrisAlarm] .coolris-alarm-dropdown li {\n                    border-bottom: 1px solid #ebebeb;\n                    padding: 13px;\n                }\n                div[coolrisAlarm] .coolris-alarm-dropdown li:hover {\n                    background-color: rgba(100,100,100,0.1);\n                }\n                div[coolrisAlarm] .coolris-alarm-dropdown ul {\n                    height: auto;\n                    max-height: 330px;\n                    overflow-y: hidden;\n                }\n                div[coolrisAlarm] .coolris-alarm-dropdown li p {\n                    color: #414141;\n                    text-overflow: ellipsis;\n                    overflow: hidden;\n                    white-space: nowrap;\n                    margin-bottom: 1px;\n                    margin-top: 0;\n                }\n                div[coolrisAlarm] .coolris-alarm-dropdown li span {\n                    text-overflow: ellipsis;\n                    overflow: hidden;\n                    white-space: nowrap;\n                    margin-bottom: 1px;\n                    color: #b0b0b0;\n                    display: block;\n                    margin-top: 10px;\n                }\n                div[coolrisAlarm] .coolris-alarm-dropdown div {\n                    text-align: center;\n                    padding-top: 15px;\n                }\n                div[coolrisAlarm] .coolris-alarm-dropdown div a {\n                    display: inline-block;\n                    padding: 0 25px;\n                    min-width: 55px;\n                    line-height: 30px;\n                    height: 33px;\n                    font-size: 13px;\n                    border-radius: 5px;\n                    border: 1px solid #9b9b9b;\n                    box-sizing: border-box;\n                    transition: opacity 0.2s, box-shadow 0.2s;\n                    color: #000000;\n                }\n                div[coolrisAlarm] .coolris-alarm-dropdown div a:hover {\n                    opacity: 0.6;\n                    box-shadow: 2px 2px 3px 0 rgba(0,0,0,0.26);\n                }\n            </style>\n            <div coolrisAlarm>\n                <span class=\"coolris-alarm-btn\">\n                    <img class=\"coolris-alarm-img\" src=\"//update.coolmessenger.com/_ImageServer/metoring/kin_alam_on.png\" alt=\"\uC54C\uB78C \uC774\uBBF8\uC9C0\"/>\n                </span>\n                <div class=\"coolris-alarm-dropdown\">\n                    <img class=\"dropdown-tail\" src=\"//update.coolmessenger.com/_ImageServer/coolschool/resources/images/dropbox_tail.png\" alt=\"img\" />\n                    <ul>\n                        <li>\n                            <a href=\"\" target=\"_blank\">\n                                <p>\uAD6C\uB3C5\uC911\uC778 [\uD669\uC81C\uC324\uC758 \uC2AC\uAE30\uB85C\uC6B4 \uCD08\uB4F1\uC0DD\uD65C]\uC5D0 \uC0C8 \uC18C\uC2DD\uC774 \uC788\uC2B5\uB2C8\uB2E4.</p>\n                                <span>5\uB2EC \uC804</span>\n                            </a>\n                        </li>\n                        <li>\n                            <a href=\"\" target=\"_blank\">\n                                <p>\uAD6C\uB3C5\uC911\uC778 [\uD669\uC81C\uC324\uC758 \uC2AC\uAE30\uB85C\uC6B4 \uCD08\uB4F1\uC0DD\uD65C]\uC5D0 \uC0C8 \uC18C\uC2DD\uC774 \uC788\uC2B5\uB2C8\uB2E4.</p>\n                                <span>5\uB2EC \uC804</span>\n                            </a>\n                        </li>\n                        <li>\n                            <a href=\"\" target=\"_blank\">\n                                <p>\uAD6C\uB3C5\uC911\uC778 [\uD669\uC81C\uC324\uC758 \uC2AC\uAE30\uB85C\uC6B4 \uCD08\uB4F1\uC0DD\uD65C]\uC5D0 \uC0C8 \uC18C\uC2DD\uC774 \uC788\uC2B5\uB2C8\uB2E4.</p>\n                                <span>5\uB2EC \uC804</span>\n                            </a>\n                        </li>\n                    </ul>\n                    <div>\n                        <a href=\"\" target=\"_blank\">\uC54C\uB9BC \uBAA8\uB450 \uBCF4\uAE30</a>\n                    </div>\n                </div>\n            </div>   \n        ";
    };
    // 로그인 템플릿
    Coolris.prototype.getLoginTemplate = function () {
        return "\n            <style>\n                div[coolrisProfile] {\n                    position: relative;\n                    display: table-cell;\n                    vertical-align: middle;\n                    padding-right: 13px;\n                }\n                div[coolrisProfile] img {\n                    vertical-align: middle;\n                    border-style: none;\n                }\n                div[coolrisProfile] .coolris-profile-btn {\n                    cursor: pointer;\n                    background-color: #f7f7f7;\n                    font-size: 14px;\n                    display: block;\n                    vertical-align: middle;\n                }\n                div[coolrisProfile] .coolris-profile-btn .profile-name {\n                    font-weight: bold;\n                    color: #000000;\n                    margin-right: 3px;\n                    padding-right: 12px;\n                    position: relative;\n                }\n                div[coolrisProfile] .coolris-profile-btn .profile-name:after {\n                    background-image: url(//update.coolmessenger.com/_ImageServer/coolschool/resources/images/coolprofile_arrow.png);\n                    background-size: 8px 5px;\n                    background-position: right center;\n                    background-repeat: no-repeat;\n                    content: '';\n                    display: block;\n                    width: 8px;\n                    height: 5px;\n                    position: absolute;\n                    right: 0;\n                    top: 50%;\n                    margin-top: -2px;\n                }\n                div[coolrisProfile] .coolris-profile-dropdown.show ~ .coolris-profile-btn .profile-name {\n                    color: #00a1e4;\n                }\n                div[coolrisProfile] .coolris-profile-dropdown.show ~ .coolris-profile-btn .profile-name:after {\n                    transform: rotate(180deg);\n                }\n                div[coolrisProfile] .coolris-profile-btn .profile-img {\n                    border-radius: 50%;\n                    height: 20px;\n                    width: 20px;\n                    margin-right: 3px;\n                }\n                div[coolrisProfile] .coolris-profile-btn:after {\n                    display: none !important;\n                }\n                div[coolrisProfile] .coolris-profile-dropdown {\n                    background-color: #ffffff;\n                    display: none;\n                    padding: 12px 10px 10px;\n                    min-width: 182px;\n                    border: 1px solid #9b9b9b;\n                    border-radius: .25rem;\n                    position: absolute;\n                    top: 37px;\n                    right: 0;\n                }\n                div[coolrisProfile] .coolris-profile-dropdown.show {\n                    display: block;\n                }\n                div[coolrisProfile] .coolris-profile-dropdown .dropdown-tail {\n                    position: absolute;\n                    top: -8px;\n                    right: 20px;\n                }\n                div[coolrisProfile] .coolris-profile-dropdown p {\n                    color: #000000;\n                    font-size: 14px;\n                    font-family: 'Noto Sans', sans-serif;\n                    margin-bottom: 8px;\n                    margin-top: 0;\n                }\n                div[coolrisProfile] .coolris-profile-dropdown div {\n                    color: #7e7e7e;\n                    font-size: 14px;\n                }\n                div[coolrisProfile] .coolris-profile-dropdown a {\n                    color: #25a7df;\n                    font-size: 14px;\n                    float: right;\n                }\n                div[coolrisProfile] .coolris-profile-dropdown a img {\n                   margin-top: -3px;\n                   vertical-align: middle;\n                }\n                div[coolrisProfile] .coolris-profile-dropdown .logout {\n                    height: 28px;\n                    line-height: 28px;\n                    font-size: 13px;\n                    color: #232323;\n                    background-color: #fafafa;\n                    display: block;\n                    border: 1px solid #dedede;\n                    text-align: center;\n                    margin-top: 17px;\n                    cursor: pointer;\n                }\n            </style>\n            <div coolrisProfile>\n                <div class=\"coolris-profile-dropdown\">\n                    <img class=\"dropdown-tail\" src=\"//update.coolmessenger.com/_ImageServer/coolschool/resources/images/dropbox_tail.png\" alt=\"img\" />\n                    <p>\uB0B4\uC815\uBCF4 \uBCF4\uAE30</p>\n                    <span class=\"logout dropdown-close\">\uB85C\uADF8\uC544\uC6C3</span>\n                </div>\n                <span class=\"coolris-profile-btn\">\n                    <img class=\"profile-img\" src=\"//update.coolmessenger.com/_ImageServer/coolschool/resources/images/default_profile.png\" alt=\"img\" />\n                    <span class=\"profile-name\">\uAE40\uC0C8\uBBF8</span>\n                </span>\n            </div>\n        ";
    };
    // gnb 메뉴 템플릿
    Coolris.prototype.getGnbMenuTemplate = function () {
        return "\n            <style>\n                ul[coolrisGnbMenu] {\n                    float: left;\n                }\n                ul[coolrisGnbMenu]:after {\n                    content: '';\n                    display: block;\n                    clear: both;\n                }\n                ul[coolrisGnbMenu] li {\n                    float: left;\n                    margin-right: 28px;\n                    position: relative;\n                }\n                ul[coolrisGnbMenu] li:after {\n                    content: '';\n                    display: block;\n                    width: 1px;\n                    height: 12px;\n                    background-color: #dedede;\n                    position: absolute;\n                    right: -15px;\n                    top: 50%;\n                    transform: translateY(-50%);\n                }\n                ul[coolrisGnbMenu] li a {\n                    font-size: 16px;\n                    line-height: 25px;\n                    color: #000000;\n                    text-decoration: none;\n                    display: block;\n                }\n            </style>\n            <ul coolrisGnbMenu>\n                <li>\n                    <a href=\"\" target=\"_blank\">\uCFE8\uC2A4\uCFE8 \uD648</a>\n                </li>\n                <li>\n                    <a href=\"\" target=\"_blank\">\uCFE8\uBA54\uC2E0\uC800</a>\n                </li>\n                <li>\n                    <a href=\"\" target=\"_blank\">\uBB38\uC790</a>\n                </li>\n                <li>\n                    <a href=\"\" target=\"_blank\">\uAD50\uC721\uC790\uB8CC</a>\n                </li>\n                <li>\n                    <a href=\"\" target=\"_blank\">\uC5F0\uC218,\uBAA8\uC784</a>\n                </li>\n                <li>\n                    <a href=\"\" target=\"_blank\">\uAD50\uC9C1\uC6D0\uBAB0</a>\n                </li>\n            </ul>\n        ";
    };
    // 더보기 템플릿
    Coolris.prototype.getMoreTemplate = function () {
        return "\n            <style>\n                div[coolrisMore] {\n                    position: relative;\n                    float: left;\n                }\n                div[coolrisMore] .coolris-more-dropdown a:hover {\n                    text-decoration: underline;\n                }\n                div[coolrisMore] .coolris-more-dropdown {\n                    display: none;\n                    border: 1px solid #545454;\n                    font-family: 'dotum', sans-serif;\n                    font-size: 12px;\n                    line-height: 25px;\n                    width: 556px;\n                    position: absolute;\n                    background-color: #ffffff;\n                    right: 0;\n                    top: 39px;\n                }\n                div[coolrisMore] .coolris-more-dropdown.show {\n                    display: block;\n                }\n                div[coolrisMore] .coolris-more-btn {\n                    cursor: pointer;\n                    position: relative;\n                    padding-right: 20px;\n                }\n                div[coolrisMore] .coolris-more-btn:after {\n                    content: '';\n                    display: block;\n                    position: absolute;\n                    right: 0;\n                    top: 50%;\n                    margin-top: -4px;\n                    transition: transform 0.3s;\n                    background-image: url(//update.coolmessenger.com/_ImageServer/coolschool/resources/images/more-arrow.png);\n                    background-repeat: no-repeat;\n                    width: 13px;\n                    height: 8px;\n                }\n                div[coolrisMore] .coolris-more-dropdown.show ~ .coolris-more-btn:after {\n                    transform: rotate(-180deg);\n                    background-image: url(//update.coolmessenger.com/_ImageServer/coolschool/resources/images/more-arrow-on.png);\n                }\n                div[coolrisMore] .coolris-more-dropdown.show ~ .coolris-more-btn {\n                    color: #00a1e4;\n                }\n                div[coolrisMore] ul:after {\n                    content: '';\n                    display: block;\n                    clear: both;\n                }\n                div[coolrisMore] ul {\n                    display: table;\n                    width: 100%;\n                }\n                div[coolrisMore] ul li {\n                    width: 20%;\n                    padding-left: 15px;\n                    border-right: 1px solid #e1e1e1;\n                    display: table-cell;\n                }\n                div[coolrisMore] ul li:last-child {\n                    border-right: 0;\n                }\n                div[coolrisMore] ul li h4 {\n                    color: #000000;\n                    margin-top: 16px !important;\n                }\n                div[coolrisMore] ul li a {\n                    color: #8d8d8d;\n                    display: block;\n                    margin-top: 3px;\n                    width: 100%;\n                }\n                div[coolrisMore] div.coolris-more-dropdown div {\n                    border-top: 1px solid #e1e1e1;\n                    height: 36px;\n                    line-height: 36px;\n                    padding: 0 15px;\n                }\n                div[coolrisMore] div.coolris-more-dropdown div:after {\n                    content: '';\n                    display: block;\n                    clear: both;\n                }\n                div[coolrisMore] div a {\n                    float: left;\n                }\n                div[coolrisMore] div span {\n                    float: right;\n                    cursor: pointer;\n                }\n            </style>\n            <div coolrisMore>\n                <div class=\"coolris-more-dropdown\">\n                    <ul>\n                        <li>\n                            <h4>\uD559\uAD50\uC5C5\uBB34</h4>\n                            <a href=\"\" target=\"_blank\">\uCFE8\uBA54\uC2E0\uC800</a>\n                            <a href=\"\" target=\"_blank\">\uBB38\uC790</a>\n                            <a href=\"\" target=\"_blank\">\uC548\uC2EC\uBC88\uD638</a>\n                            <a href=\"\" target=\"_blank\">\uD559\uAD50\uAC04\uD589\uBB3C</a>\n                        </li>\n                        <li>\n                            <h4>\uAD50\uC0AC\uC0DD\uD65C</h4>\n                            <a href=\"\" target=\"_blank\">\uBE14\uB85C\uADF8</a>\n                            <a href=\"\" target=\"_blank\">\uCC45</a>\n                            <a href=\"\" target=\"_blank\">\uBAA8\uC784</a>\n                            <a href=\"\" target=\"_blank\">\uD559\uAD50\uC0DD\uD65C\uC0C1\uB2F4</a>\n                        </li>\n                        <li>\n                            <h4>\uD559\uAD50\uC5F0\uC218</h4>\n                            <a href=\"\" target=\"_blank\">\uC6D0\uACA9\uC5F0\uC218</a>\n                            <a href=\"\" target=\"_blank\">\uC9D1\uD569\uC5F0\uC218</a>\n                            <a href=\"\" target=\"_blank\">\uD559\uBD80\uBAA8\uC5F0\uC218</a>\n                        </li>\n                        <li>\n                            <h4>\uD559\uAD50\uB9C8\uCF13</h4>\n                            <a href=\"\" target=\"_blank\">\uAD50\uAD6C\uBAB0</a>\n                            <a href=\"\" target=\"_blank\">\uBCF5\uC9C0\uBAB0</a>\n                            <a href=\"\" target=\"_blank\">\uD380\uB529</a>\n                            <a href=\"\" target=\"_blank\">\uC5EC\uD589</a>\n                        </li>\n                        <li>\n                            <h4>\uAD50\uC721\uC774\uC288</h4>\n                            <a href=\"\" target=\"_blank\">\uAD50\uC721\uB274\uC2A4</a>\n                            <a href=\"\" target=\"_blank\" style=\"margin-bottom: 10px;\">\uAD50\uC721\uD2B8\uB79C\uB4DC</a>\n                            <h4>\uCFE8\uC2A4\uCFE8\uC18C\uC2DD</h4>\n                            <a href=\"\" target=\"_blank\">\uACF5\uC9C0/\uC18C\uC2DD</a>\n                            <a href=\"\" target=\"_blank\">\uBB38\uC758\uD558\uAE30</a>\n                            <a href=\"\" target=\"_blank\" style=\"margin-bottom: 22px\">\uC120\uC0DD\uB2D8\uAC80\uC0C9</a>\n                        </li>\n                    </ul>\n                    <div>\n                        <a href=\"//local.coolschool.co.kr/allService\" target=\"_blank\">\uC11C\uBE44\uC2A4 \uC804\uCCB4\uBCF4\uAE30</a>\n                        <span class=\"dropdown-close\">\uB2EB\uAE30</span>\n                    </div>\n                </div>\n                <span class=\"coolris-more-btn\">\n                    \uB354\uBCF4\uAE30\n                </span>\n            </div>\n        ";
    };
    // gnb 템플릿
    Coolris.prototype.getGnbTemplate = function (coolTemplate) {
        return "\n            <style>\n                @font-face {\n                    font-family: 'NotoSansKRRegular';\n                    src: url(\"./font/NotoSansKR-Regular-subset.woff2\") format('woff2'),\n                    url(\"./font/NotoSansKR-Regular-subset.woff\") format('woff'),\n                    url(\"./font/NotoSansKR-Regular-subset.otf\") format('opentype');\n                    /*src: url(\"//update.coolmessenger.com/_ImageServer/coolschool/resources/fonts/notosans/subset/NotoSansKR-Thin-subset.woff2\") format('woff2'),\n                    url(\"//update.coolmessenger.com/_ImageServer/coolschool/resources/fonts/notosans/subset/NotoSansKR-Thin-subset.woff\") format('woff'),\n                    url(\"//update.coolmessenger.com/_ImageServer/coolschool/resources/fonts/notosans/subset/NotoSansKR-Thin-subset.otf\") format('opentype');*/\n                }\n            \n                body {\n                    margin: 0;\n                }\n                .coolris-gnb[coolrisGnb] {\n                    font-family: NotoSansKRRegular, sans-serif;\n                    width: 100%;\n                    border-bottom: 1px solid #dedede;\n                    background-color: #f7f7f7;\n                }\n                .coolris-gnb[coolrisGnb] h4 {\n                    margin: 0;\n                }\n                .coolris-gnb[coolrisGnb] a {\n                    text-decoration: none;\n                }\n                .coolris-gnb[coolrisGnb] a:hover, .coolris-gnb[coolrisGnb] a:focus, .coolris-gnb[coolrisGnb] a:visited {\n                    text-decoration: none;\n                    color: #000000;\n                }\n                .coolris-gnb[coolrisGnb] ul {\n                    margin: 0;\n                    padding: 0;\n                }\n                .coolris-gnb[coolrisGnb] li {\n                    list-style: none;\n                    box-sizing: border-box;\n                }\n                .coolris-gnb[coolrisGnb] > div:after {\n                    content: '';\n                    display: block;\n                    clear: both;\n                }\n                .coolris-gnb[coolrisGnb] > div {\n                    width: 980px;\n                    margin: 0 auto;\n                    padding: 12px 0;\n                    height: 51px;\n                    box-sizing: border-box;\n                }\n                .coolris-gnb[coolrisGnb] .coolris-login-section {\n                    float: right;\n                    display: table;\n                    margin-top: 2px;\n                }\n                .coolris-gnb[coolrisGnb] .coolris-menu-section {\n                    float: left;\n                }\n            </style>\n            <div class=\"coolris-gnb\" coolrisGnb>\n                <div>\n                    <div class=\"coolris-menu-section\">\n                        " + coolTemplate.menu + "\n                        " + coolTemplate.more + "\n                    </div>\n                    <div class=\"coolris-login-section\">\n                        " + coolTemplate.beforeLogin + "\n                        " + coolTemplate.login + "\n                        " + coolTemplate.point + "\n                        " + coolTemplate.alarm + "\n                    </div>\n                </div>\n            </div>\n        ";
    };
    return Coolris;
}());
