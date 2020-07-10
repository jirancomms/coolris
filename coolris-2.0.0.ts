declare var $: any;

interface LogoutOpts {
    isRestoreLocation: boolean;
    isLogoutProc: boolean;
    logoutProcUrl: string | undefined;
}

interface CoolTemplate {
    login: string;
    menu: string;
    more: string;
    alarm: string;
    point: string;
    beforeLogin: string;
    topBanner: string;
}

const constants = {
    memberUrl: '//member.coolschool.co.kr',
    searchUrl: '//search.coolschool.co.kr',
    clientIds:  {
        'www' : 'NjM2YzY5NjU2ZTc0NWY2OTY0M2E0MzRmNGY0YzUzNDM0ODRmNGY0Yw==', // coolschool
        '' : 'NjM2YzY5NjU2ZTc0NWY2OTY0M2E0MzRmNGY0YzUzNDM0ODRmNGY0Yw==', // coolschool
        'coolendar': 'NjM2YzY5NjU2ZTc0NWY2OTY0M2E0MzRmNGY0YzRhNGY0Mg==', // coolendar
        'coolendar3': 'NjM2YzY5NjU2ZTc0NWY2OTY0M2E0MzRmNGY0YzRhNGY0Mg==', // coolendar3
        'cooledu': 'NjM2YzY5NjU2ZTc0NWY2OTY0M2E0MzRmNGY0YzQ1NDQ1NQ==', // cooledu
        'samstory': 'NjM2YzY5NjU2ZTc0NWY2OTY0M2E1MzQxNGQ1MzU0NGY1MjU5', // samstory
        'coolmessenger': 'NjM2YzY5NjU2ZTc0NWY2OTY0M2E0MzRmNGY0YzRkNDU1MzUzNDU0ZTQ3NDU1Mg==', // coolmessenger
        'coolpama': 'NjM2YzY5NjU2ZTc0NWY2OTY0M2E0MzRmNGY0YzUwNDE0ZDQx', // coolpama
        'coolbooks': 'NjM2YzY5NjU2ZTc0NWY2OTY0M2E0MzRmNGY0YzU0NDI0ZjRmNGI1Mw==', // coolbooks
        't-mall': 'NjM2YzY5NjU2ZTc0NWY2OTY0M2E1NzQ1NTQ0NTQxNDM0ODQ1NTI=', // t-mall
        'coolmarket': 'NjM2YzY5NjU2ZTc0NWY2OTY0M2E0MzRmNGY0YzRkNDE1MjRiNDU1NA==', //coolmarket
        'coolmova': 'NjM2YzY5NjU2ZTc0NWY2OTY0M2E0ZDRmNTY0MQ==', // coolmova
        't-fun': 'NjM2YzY5NjU2ZTc0NWY2OTY0M2E0NDQxNWE1YTRjNDU0NTQ0NTU=', // t-fun
    }
};
declare var ga: any;

class Coolris {

    private loginInfo = {result: false, data: undefined} as any;

    constructor(private accessToken: string = '', private serviceName: string = 'coolschool') {
        // include dot.js
        // @ts-ignore
        !function(){"use strict";var u,d={name:"doT",version:"1.1.1",templateSettings:{evaluate:/\{\{([\s\S]+?(\}?)+)\}\}/g,interpolate:/\{\{=([\s\S]+?)\}\}/g,encode:/\{\{!([\s\S]+?)\}\}/g,use:/\{\{#([\s\S]+?)\}\}/g,useParams:/(^|[^\w$])def(?:\.|\[[\'\"])([\w$\.]+)(?:[\'\"]\])?\s*\:\s*([\w$\.]+|\"[^\"]+\"|\'[^\']+\'|\{[^\}]+\})/g,define:/\{\{##\s*([\w\.$]+)\s*(\:|=)([\s\S]+?)#\}\}/g,defineParams:/^\s*([\w$]+):([\s\S]+)/,conditional:/\{\{\?(\?)?\s*([\s\S]*?)\s*\}\}/g,iterate:/\{\{~\s*(?:\}\}|([\s\S]+?)\s*\:\s*([\w$]+)\s*(?:\:\s*([\w$]+))?\s*\}\})/g,varname:"it",strip:!0,append:!0,selfcontained:!1,doNotSkipEncoded:!1},template:void 0,compile:void 0,log:!0};d.encodeHTMLSource=function(e){var n={"&":"&#38;","<":"&#60;",">":"&#62;",'"':"&#34;","'":"&#39;","/":"&#47;"},t=e?/[&<>"'\/]/g:/&(?!#?\w+;)|<|>|"|'|\//g;return function(e){return e?e.toString().replace(t,function(e){return n[e]||e}):""}},u=function(){return this||(0,eval)("this")}.apply(this),"undefined"!=typeof module&&module.exports?module.exports=d:"function"==typeof define&&define.amd?define(function(){return d}):u.doT=d;var s={append:{start:"'+(",end:")+'",startencode:"'+encodeHTML("},split:{start:"';out+=(",end:");out+='",startencode:"';out+=encodeHTML("}},p=/$^/;function l(e){return e.replace(/\\('|\\)/g,"$1").replace(/[\r\t\n]/g," ")}d.template=function(e,n,t){var r,o,a=(n=n||d.templateSettings).append?s.append:s.split,c=0,i=n.use||n.define?function r(o,e,a){return("string"==typeof e?e:e.toString()).replace(o.define||p,function(e,r,n,t){return 0===r.indexOf("def.")&&(r=r.substring(4)),r in a||(":"===n?(o.defineParams&&t.replace(o.defineParams,function(e,n,t){a[r]={arg:n,text:t}}),r in a||(a[r]=t)):new Function("def","def['"+r+"']="+t)(a)),""}).replace(o.use||p,function(e,n){o.useParams&&(n=n.replace(o.useParams,function(e,n,t,r){if(a[t]&&a[t].arg&&r){var o=(t+":"+r).replace(/'|\\/g,"_");return a.__exp=a.__exp||{},a.__exp[o]=a[t].text.replace(new RegExp("(^|[^\\w$])"+a[t].arg+"([^\\w$])","g"),"$1"+r+"$2"),n+"def.__exp['"+o+"']"}}));var t=new Function("def","return "+n)(a);return t?r(o,t,a):t})}(n,e,t||{}):e;i=("var out='"+(n.strip?i.replace(/(^|\r|\n)\t* +| +\t*(\r|\n|$)/g," ").replace(/\r|\n|\t|\/\*[\s\S]*?\*\//g,""):i).replace(/'|\\/g,"\\$&").replace(n.interpolate||p,function(e,n){return a.start+l(n)+a.end}).replace(n.encode||p,function(e,n){return r=!0,a.startencode+l(n)+a.end}).replace(n.conditional||p,function(e,n,t){return n?t?"';}else if("+l(t)+"){out+='":"';}else{out+='":t?"';if("+l(t)+"){out+='":"';}out+='"}).replace(n.iterate||p,function(e,n,t,r){return n?(c+=1,o=r||"i"+c,n=l(n),"';var arr"+c+"="+n+";if(arr"+c+"){var "+t+","+o+"=-1,l"+c+"=arr"+c+".length-1;while("+o+"<l"+c+"){"+t+"=arr"+c+"["+o+"+=1];out+='"):"';} } out+='"}).replace(n.evaluate||p,function(e,n){return"';"+l(n)+"out+='"})+"';return out;").replace(/\n/g,"\\n").replace(/\t/g,"\\t").replace(/\r/g,"\\r").replace(/(\s|;|\}|^|\{)out\+='';/g,"$1").replace(/\+''/g,""),r&&(n.selfcontained||!u||u._encodeHTML||(u._encodeHTML=d.encodeHTMLSource(n.doNotSkipEncoded)),i="var encodeHTML = typeof _encodeHTML !== 'undefined' ? _encodeHTML : ("+d.encodeHTMLSource.toString()+"("+(n.doNotSkipEncoded||"")+"));"+i);try{return new Function(n.varname,i)}catch(e){throw"undefined"!=typeof console&&console.log("Could not create a template function: "+i),e}},d.compile=function(e,n){return d.template(e,null,n)}}.apply(this)

        // ja.js
        // @ts-ignore
        var _hashq=_hashq||[],_httpRequest=null,_ja_famliy_site={};!function(e: any,t: any,a: any,n: any,i: any,s: any,o: any){e.GoogleAnalyticsObject=i,e.ga=e.ga||function(){(e.ga.q=e.ga.q||[]).push(arguments)},e.ga.l=1*new Date,s=t.createElement(a),o=t.getElementsByTagName(a)[0],s.async=1,s.src="https://www.google-analytics.com/analytics.js",o.parentNode.insertBefore(s,o)}(window,document,"script",0,"ga"),ga("create","UA-92421532-1","auto"),ga("send","pageview"),function(){a(document,"click",function(e){var t,a,n,i=function e(t){if(null==t.tagName)return!1;if("a"==t.tagName.toLowerCase()||"area"==t.tagName.toLowerCase())return t;if(t.parentNode)return e(t.parentNode);return!1}(e.target);i&&(t=function e(t){var a=[];t.parentNode&&"body"!=t.parentNode.tagName.toLowerCase()&&(a=e(t.parentNode));t.id?a.push(t.id):t.className&&a.push(t.className);return a}(i).join("-"),a=i.href.indexOf(".pdf")>-1||i.href.indexOf(".mov")>-1||i.href.indexOf(".avi")>-1||i.href.indexOf(".m4v")>-1||i.href.indexOf(".wmv")>-1||i.href.indexOf(".mp3")>-1||i.href.indexOf(".rar")>-1||i.href.indexOf(".zip")>-1?"download":i.href.indexOf(".html")>-1||i.href.indexOf(".txt")>-1||i.href.indexOf(".js")>-1?"example":"link",n=i.innerHTML,_hashq.push(["_trackEvent",t,a,n]),i.id)}),_ja_famliy_site.readyState=function(){var e=o("_jc");e||(e=t(1e9,9999999999),s("_jc",e+="."+(new Date).getTime())),_hashq.push(["_host",location.hostname]),_hashq.push(["_url",location.href]),_hashq.push(["_jc",e]),n()};var e=!1;a(document,"readystatechange",function(a){if(!e){var i=o("_jc");i||(i=t(1e9,9999999999),s("_jc",i+="."+(new Date).getTime())),_hashq.push(["_host",location.hostname]),_hashq.push(["_url",location.href]),_hashq.push(["_jc",i]),n(),e=!0}});var t=function(e,t){return Math.floor(Math.random()*(t-e+1))+e};function a(e,t,a){e.addEventListener?e.addEventListener(t,a,!1):e.attachEvent&&(e["e"+t+a]=a,e[t+a]=function(){e["e"+t+a](window.event)},e.attachEvent("on"+t,e[t+a]))}function n(){for(var e,t="",a=0;a<_hashq.length;a++)""!=t&&(t+="&"),t+=(e=_hashq[a])[0]+"="+e[1];!function(e){var t=("https:"==document.location.protocol?"https://":"http://")+"st.coolschool.co.kr/ja/stat_js.html";$.ajax({url:t,contentType:"application/json",dataType:"jsonp",type:"POST",data:e,success:function(e){if(e.family_html&&$(".family-sites")){var t=$(".family-sites").html(e.family_html).text();$(".family-sites").html(t)}},error:function(e){console.log("�ㅽ뙣 - ",e)}})}(t)}var i="1000";function s(e,t){var a=new Date;a.setDate(a.getDate()+i),document.cookie=e+"="+t+"; path=/; expires="+a.toGMTString()+";"}function o(e){e+="=";var t=document.cookie,a=t.indexOf(e),n="";if(-1!=a){a+=e.length;var i=t.indexOf(";",a);-1==i&&(i=t.length),n=t.substring(a,i)}return unescape(n)}_ja_famliy_site.start=function(){var e=location.href,t=$("#footer");if(t&&0!==t.length){var a=t.find(".family-site-back");if(a){var n=parseInt(a.css("height"))+1;if(e.indexOf("coolbooks")<0){var i=$(window),s=$(document),o=$("html"),r=$("body");a.css({top:-n+"px"}),s.on("click","#togglerFamilySite",function(e){e.preventDefault();var t=$("#togglerFamilySite span.up").removeClass("hide"),a=s.height();o.toggleClass("is-family-sites"),r.toggleClass("is-family-sites"),i.trigger(".sticky"),(o.hasClass("is-family-sites")||r.hasClass("is-family-sites"))&&(t.addClass("hide"),$("html, body").animate({scrollTop:a},0))}),a.find("a").on("click",function(){o.removeClass("is-family-sites")})}}}},_ja_famliy_site.start()}();
    }

    async start() {
        // @ts-ignore
        const gnbOuterTemplateFn = this.doT.template(this.getGnbOuterTemplate());
        $('#coolrisGnb').html(gnbOuterTemplateFn());

        // 탑배너 쿠키가 없다면 탑배너 영역 데이터 로드 및 랜더
        if (!this.getCookie('topbanner')) {
            this.loadSettingTopBanner();
        }

        // interface Cooltemplate에 템플릿 주기
        const coolTemplate = {
            login: this.getLoginTemplate(),
            menu: this.getGnbMenuTemplate(),
            more: this.getMoreTemplate(),
            point: this.getPointTemplate(),
            beforeLogin: this.getBeforLoginTemplate(),
            topBanner: this.getTopBannerTemplate()
        };

        // 로그인 여부에 따른 처리
        const memberResponse = await this.loginCheck();
        const memberResponseData = memberResponse.data;

        const isLogin = memberResponse.result;

        // dot에 template을 준다.
        // @ts-ignore
        const coolrisTemplateFn = this.doT.template(this.getGnbTemplate(coolTemplate));
        $('[data-name=coolrisGnbArea]').html(coolrisTemplateFn({isLogin: isLogin}));

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
    }

    // 버튼 클릭시 드롭다운 켜짐
    loginToggle(toggleBtn: string, dropDownClass: string) {
        $(`.${toggleBtn}`).click(() => {
            $(`.${dropDownClass}`).toggleClass('show');
            this.onClickBtnGoogleCode(toggleBtn);
        });
    }

    // 더보기 버튼 클릭할 때 구글코드
    onClickBtnGoogleCode(toggleBtn: string) {
        switch(toggleBtn) {
            case 'coolris-more-btn':
                ga('send', 'event', 'link', this.serviceName, 'main_banner_top');
                break;
            case 'coolris-alarm-btn':
                ga('send', 'event', 'link', this.serviceName, 'gnb_alarm');
                break;
            case 'coolris-profile-btn':
                ga('send', 'event', this.serviceName, 'coolris', 'gnb_my');
                break;
        }
    }

    // 드롭다운 껐다가 키기
    loginDropdown(dropdownClass: string, callback: Function) {
        // 프로필 메뉴 빼고 클릭시 드롭다운 꺼짐
        $(window).click(($event: any) => {
            if (!callback($event.target.className)) {
                const dropdown = $(`.${dropdownClass}`);
                if (dropdown.hasClass('show')) {
                    dropdown.removeClass('show');
                }
            }
        });

        $(`.${dropdownClass}`).click(($event: any) => {
            // 클릭한 태그가 a이거나 클릭한 태그의 부모가 a이거나 클릭한 클레스의 이름이 dropdown-close 이면 리턴
            if ($event.target.parentNode.tagName.toLowerCase() === 'a' || $event.target.tagName.toLowerCase() === 'a' || $event.target.className.indexOf('dropdown-close') !== -1) {
                return;
            }
            this.preventClickEvent($event);
        })
    }

    // 마우스 클릭 이벤트 막기
    preventClickEvent($event: any) {
        $event.preventDefault();
        $event.stopPropagation();
    }

    // 로그인 드롭다운을 끌때 프로필 버튼을 클릭했는지 체크
    targetProfileCheck(target: string) {
        let isChecked = false;
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
    }

    // 더보기 드롭다운을 끌때 더보기 버튼 클릭하는지 체크
    targetMoreCheck(target: string) {
        let isChecked = false;
        if (target === 'coolris-more-btn') {
            isChecked = true;
        }
        return isChecked;
    }

    // 더보기 드롭다운을 끌때 더보기 버튼 클릭하는지 체크
    targetAlarmCheck(target: string) {
        let isChecked = false;
        switch (target) {
            case 'coolris-alarm-btn':
                isChecked = true;
                break;
            case 'coolris-alarm-img':
                isChecked = true;
                break;
        }
        return isChecked;
    }

    isSlideMove: boolean = true;

    // 탑배너 슬라이드 이벤트
    topBannerSlideEvent() {
        const topBanner = `div[data-name='topBanner']`;
        const topBannerPaging = $(topBanner).find('.topbanner-paging');
        const topBannerPagingNum = topBannerPaging.find('li').length;

        // 처음 랜덤으로 슬라이드 보여주기
        this.topBannerSlideManager(0);
        // this.topBannerSlideManager(this.getRandomeNum(topBannerPagingNum - 1));

        const autoSlideFnc = () => {
            for (let i = 0; i < topBannerPagingNum; i++) {
                if (topBannerPaging.find(`li:eq(${i})`).find('span[data-name="topbannerPaging"]').hasClass('on')) {
                    let clickNum = i + 1;
                    if (clickNum >= topBannerPagingNum) {
                        clickNum = 0;
                    }
                    this.topBannerSlideManager(clickNum);
                }
            }
        };

        let autoSlideInterval = setInterval(autoSlideFnc, 5000);

        for (let i = 0; i < topBannerPagingNum; i++) {
            topBannerPaging.find(`li:eq(${i})`).find('span[data-name="topbannerPaging"]').click(() => {
                if (this.isSlideMove) {
                    clearInterval(autoSlideInterval);
                    autoSlideInterval = setInterval(autoSlideFnc, 5000);
                    this.topBannerSlideManager(i);
                }
            })
        }

        $(topBanner).on('mouseenter', () => {
            if (this.isSlideMove) {
                clearInterval(autoSlideInterval);
                autoSlideInterval = setInterval(autoSlideFnc, 5000);
            }
            return false;
        });
    }

    // topbanner 애니메이션
    topBannerSlideManager(slideNum: number) {
        this.isSlideMove = false;
        const topBanner = `div[data-name='topBanner']`;
        const topBannerList = $(topBanner).find('.topbanner-list');
        const topBannerPaging = $(topBanner).find('.topbanner-paging');
        const topBannerListH = 79;
        if (!topBannerList.is(':animated')) {
            topBannerList.stop().animate({'top': - (slideNum * topBannerListH)}, 600, () => {
                this.isSlideMove = true;
                topBannerPaging.find('span[data-name="topbannerPaging"]').removeClass('on');
                topBannerPaging.find('li:eq('+ slideNum +')').find('span[data-name="topbannerPaging"]').addClass('on');
            });
        }
    }

    // topbanner close
    topbannerCloseEvent() {
        $("p[data-name='topbannerClose']").click(() => {
            $("div[data-name='topBanner']").css('display', 'none');
            this.setCookie('topbanner', 'yes', 1);
        })
    }

    getRandomeNum(index: number) {
        return Math.floor((Math.random() * index))
    }

    getGnbOuterTemplate() {
        return `
            <div data-name="divTopBannerArea"></div>
            <div data-name="coolrisGnbArea"></div>
        `
    }

    // 탑배너 템플릿
    getTopBannerTemplate() {
        return `
            <style>
                /*===== topBanner =====*/
                div[coolrisTopBanner] {
                    background-color:#24d1ab;
                    /*display:none;*/
                    text-align:center;
                    font-family: NotoSansKRRegular, sans-serif;
                }
                 @media screen and (max-width: 992px) {
                     div[coolrisTopBanner] {
                        display: none !important;
                     }
                }
                div[coolrisTopBanner] > div {
                    height:79px;
                    overflow: hidden;
                    position: relative;
                }
                div[coolrisTopBanner] > div > div { position:relative; top: 0; }
                div[coolrisTopBanner] .inner {
                    width: 980px;
                    margin: 0 auto;
                }
                div[coolrisTopBanner] .inner a { display: block; width: 100%; }
                div[coolrisTopBanner] .top_close{
                    color:#000;
                    font-size:11px;
                    position:absolute;
                    bottom:5px;
                    right:100px;
                    font-family: "Dotum", sans-serif;
                    z-index:999;
                }
                div[coolrisTopBanner] .top_close img {
                    margin-right: 7px;
                    margin-bottom: 3px;
                    vertical-align: middle;
                }
                div[coolrisTopBanner] .topbanner-paging {
                    display: block !important;
                    position: relative;
                    height: 0;
                    z-index: 10;
                }
                div[coolrisTopBanner] .topbanner-paging ul {
                    position: absolute ;
                    right: 0;
                    top: 10px;
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }
                div[coolrisTopBanner] .topbanner-paging ul li {
                    margin-bottom: 5px;
                }
                div[coolrisTopBanner] .topbanner-paging ul li span[data-name='topbannerPaging'] {
                    display: block;
                    width: 10px;
                    height: 10px;
                    border-radius: 50%;
                    background-color: rgba(100, 100, 100, 0.4);
                    cursor: pointer;
                }
                
                div[coolrisTopBanner] .topbanner-paging ul li span[data-name='topbannerPaging'].on {
                    background-color: rgba(100, 100, 100, 1);
                }
                div[coolrisTopBanner] .topbanner-paging ul li span[data-name='topbannerPaging']:hover {
                    background-color: rgba(100, 100, 100, 1);
                }
                div[coolrisTopBanner] .top {
                    position: absolute;
                    top: 0;
                    width: 100%;
                }
                div[coolrisTopBanner] .topbanner-list .topbanner-item {
                    height: 79px;
                }
                div[coolrisTopBanner] .topbanner-list .topbanner-item img{
                    display: block;
                    margin: 0 auto;
                }
                div[coolrisTopBanner] .topbanner-paging p[data-name='topbannerClose'] {
                    font-size: 13px;
                    color: #000000;
                    position: absolute;
                    top: 60px;
                    right: 15px;
                    cursor: pointer;
                    margin: 0;
                    letter-spacing: -0.5px;
                    line-height: initial;
                }
                div[coolrisTopBanner] .topbanner-paging p[data-name='topbannerClose']:hover {
                    font-weight: bold;
                }
            </style>
            <div coolrisTopBanner data-name="topBanner">
                <div>
                    <div class="inner topbanner-paging">
                        <ul>
                            {{ for(var idx in it.coolTopBannerItems) { }}
                                <li><span data-name="topbannerPaging"></span></li>
                            {{ } }}
                        </ul>
                        <p data-name="topbannerClose" class="">오늘 보지 않기</p>
                    </div>
                    <div class="topbanner-list">
                        {{ for(var idx in it.coolTopBannerItems) { }}
                        <a onclick="ga('send', 'event', 'link', '${this.serviceName}', 'main_banner_top');" href="{{=it.coolTopBannerItems[idx].url}}" target="_blank">
                            <!--suppress CssInvalidPropertyValue -->
                            <div class="topbanner-item" style="background-color: #{{=it.coolTopBannerItems[idx].backgroundColor}}">
                                <div class="inner">
                                    <img src="{{=it.coolTopBannerItems[idx].img}}" alt="img" />
                                </div>
                            </div>
                        </a>
                        {{ } }}
                    </div>
                </div>
            </div>
        `
    }

    // 포인트 템플릿
    getPointTemplate() {
        return `
            <style>
                div[coolrisPoint] {
                    display: table-cell;
                    vertical-align: middle;
                    padding-right: 13px;
                }
                div[coolrisPoint] a {
                    font-size: 14px;
                    display: block;
                    font-weight: bold;
                    color: #00a1e4 !important;
                }
                div[coolrisPoint] a img {
                    vertical-align: middle;
                    display: inline-block;
                    margin-right: 3px;
                }
            </style>
            <div coolrisPoint>
                <a onclick="ga('send', 'event', 'link', '${this.serviceName}', 'gnb_point');" href="//point.coolschool.co.kr" target="_blank">
                    <img src="//update.coolmessenger.com/_ImageServer/coolschool/commonTop/point.png" alt="img" />
                    <span data-name="spanPoint"></span>
                </a>
            </div>   
        `
    }

    // 로그인 전 템플릿
    getBeforLoginTemplate() {
        return `
            <style>
                div[coolrisBeforLogin] {
                    /*margin-top: -3px;*/
                }
                div[coolrisBeforLogin] a {
                    font-size: 13px;
                    color: #000000;
                    cursor: pointer;
                }
                div[coolrisBeforLogin] span {
                    display: inline-block;
                    margin: 0 3px;
                }
            </style>
            <div coolrisBeforLogin>
                <a href="javascript:void(0)" data-name="aCoolLogin">로그인</a> 
                <span>/</span> 
                <a href="javascript:void(0)" data-name="aCoolJoin">회원가입</a>
            </div>
        `
    }

    // 알람 템플릿
    getAlarmTemplate() {
        return `
            <style>
                div[coolrisAlarm] {
                    position: relative;
                    display: table-cell;
                    vertical-align: middle;
                    font-family: 'dotum', sans-serif;
                }
                div[coolrisAlarm] .coolris-alarm-btn {
                    cursor: pointer;
                }
                div[coolrisAlarm] .coolris-alarm-btn img {
                    display: block;
                }
                div[coolrisAlarm] .coolris-alarm-dropdown {
                    background-color: #ffffff;
                    display: none;
                    padding: 12px 10px 10px;
                    min-width: 182px;
                    border: 1px solid #9b9b9b;
                    border-radius: .25rem;
                    position: absolute;
                    top: 32px;
                    right: 0;
                    font-size: 12px;
                    width: 300px;
                    z-index: 9999;
                }
                div[coolrisAlarm] .coolris-alarm-dropdown.show {
                    display: block;
                }
                div[coolrisAlarm] .coolris-alarm-dropdown .dropdown-tail {
                    position: absolute;
                    top: -8px;
                    right: 3px;
                }
                div[coolrisAlarm] .coolris-alarm-dropdown li {
                    border-bottom: 1px solid #ebebeb;
                    padding: 13px;
                }
                div[coolrisAlarm] .coolris-alarm-dropdown li:hover {
                    background-color: rgba(100,100,100,0.1);
                }
                div[coolrisAlarm] .coolris-alarm-dropdown ul {
                    height: auto;
                    max-height: 330px;
                    overflow-y: auto;
                }
                div[coolrisAlarm] .coolris-alarm-dropdown li p {
                    color: #414141;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                    margin-bottom: 1px;
                    margin-top: 0;
                }
                div[coolrisAlarm] .coolris-alarm-dropdown li span {
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                    margin-bottom: 1px;
                    color: #b0b0b0;
                    display: block;
                    margin-top: 10px;
                    line-height: initial;
                }
                div[coolrisAlarm] .coolris-alarm-dropdown div {
                    text-align: center;
                    padding-top: 15px;
                }
                div[coolrisAlarm] .coolris-alarm-dropdown div a {
                    display: inline-block;
                    padding: 0 25px;
                    min-width: 55px;
                    line-height: 30px;
                    height: 33px;
                    font-size: 13px;
                    border-radius: 5px;
                    border: 1px solid #9b9b9b;
                    box-sizing: border-box;
                    transition: opacity 0.2s, box-shadow 0.2s;
                    color: #000000;
                }
                div[coolrisAlarm] .coolris-alarm-dropdown div a:hover {
                    opacity: 0.6;
                    box-shadow: 2px 2px 3px 0 rgba(0,0,0,0.26);
                }
            </style>
            <div coolrisAlarm>
                <span class="coolris-alarm-btn">
                    <img class="coolris-alarm-img" src="//update.coolmessenger.com/_ImageServer/metoring/kin_alam_on.png" alt="알람 이미지"/>
                </span>
                <div class="coolris-alarm-dropdown">
                    <img class="dropdown-tail" src="//update.coolmessenger.com/_ImageServer/coolschool/resources/images/dropbox_tail.png" alt="img" />
                    <ul>
                    {{ for(var idx in it.coolAlarmItems) { }}
                        <li onclick="ga('send', 'event', 'link', '${this.serviceName}', 'gnb_alarm_item');">
                            <a href="{{=it.coolAlarmItems[idx].url}}" target="_blank">
                                <p>{{=it.coolAlarmItems[idx].message}}</p>
                                <span>{{=it.toDateYmdFormat(new Date(it.coolAlarmItems[idx].createdDate))}}</span>
                            </a>
                        </li>
                    {{ } }}
                    </ul>
                    <div>
                        <a onclick="ga('send', 'event', 'link', '${this.serviceName}', 'all_alarm');" href="/notification/index" target="_blank">알림 모두 보기</a>
                    </div>
                </div>
            </div>   
        `
    }

    // 로그인 템플릿
    getLoginTemplate() {
        return  `
            <style>
                div[coolrisProfile] {
                    position: relative;
                    display: table-cell;
                    vertical-align: middle;
                    padding-right: 13px;
                }
                div[coolrisProfile] img {
                    vertical-align: middle;
                    border-style: none;
                }
                div[coolrisProfile] .coolris-profile-btn {
                    cursor: pointer;
                    background-color: #f7f7f7;
                    font-size: 14px;
                    display: block;
                    vertical-align: middle;
                }
                div[coolrisProfile] .coolris-profile-btn .profile-name {
                    font-weight: bold;
                    color: #000000;
                    margin-right: 3px;
                    padding-right: 12px;
                    position: relative;
                }
                div[coolrisProfile] .coolris-profile-btn .profile-name:after {
                    background-image: url(//update.coolmessenger.com/_ImageServer/coolschool/resources/images/coolprofile_arrow.png);
                    background-size: 8px 5px;
                    background-position: right center;
                    background-repeat: no-repeat;
                    content: '';
                    display: block;
                    width: 8px;
                    height: 5px;
                    position: absolute;
                    right: 0;
                    top: 50%;
                    margin-top: -2px;
                }
                div[coolrisProfile] .coolris-profile-dropdown.show ~ .coolris-profile-btn .profile-name {
                    color: #00a1e4;
                }
                div[coolrisProfile] .coolris-profile-dropdown.show ~ .coolris-profile-btn .profile-name:after {
                    transform: rotate(180deg);
                }
                div[coolrisProfile] .coolris-profile-btn .profile-img {
                    border-radius: 50%;
                    height: 20px;
                    width: 20px;
                    margin-right: 3px;
                }
                div[coolrisProfile] .coolris-profile-btn:after {
                    display: none !important;
                }
                div[coolrisProfile] .coolris-profile-dropdown {
                    background-color: #ffffff;
                    display: none;
                    padding: 12px 10px 10px;
                    min-width: 182px;
                    border: 1px solid #9b9b9b;
                    border-radius: .25rem;
                    position: absolute;
                    top: 33px;
                    right: 0;
                    z-index: 9999;
                }
                div[coolrisProfile] .coolris-profile-dropdown.show {
                    display: block;
                }
                div[coolrisProfile] .coolris-profile-dropdown .dropdown-tail {
                    position: absolute;
                    top: -8px;
                    right: 20px;
                }
                div[coolrisProfile] .coolris-profile-dropdown p {
                    color: #000000;
                    font-size: 14px;
                    font-family: 'Noto Sans', sans-serif;
                    margin-bottom: 8px;
                    margin-top: 0;
                }
                div[coolrisProfile] .coolris-profile-dropdown div {
                    color: #7e7e7e;
                    font-size: 14px;
                }
                div[coolrisProfile] .coolris-profile-dropdown p a {
                    color: #000000;
                    font-size: 14px;
                }
                div[coolrisProfile] .coolris-profile-dropdown p {
                    text-align: center;
                }
                div[coolrisProfile] .coolris-profile-dropdown a img {
                   margin-top: -3px;
                   vertical-align: middle;
                }
                div[coolrisProfile] .coolris-profile-dropdown .logout {
                    height: 28px;
                    line-height: 28px;
                    font-size: 13px;
                    color: #232323;
                    background-color: #fafafa;
                    display: block;
                    border: 1px solid #dedede;
                    text-align: center;
                    margin-top: 17px;
                    cursor: pointer;
                }
            </style>
            <div coolrisProfile>
                <div class="coolris-profile-dropdown">
                    <img class="dropdown-tail" src="//update.coolmessenger.com/_ImageServer/coolschool/resources/images/dropbox_tail.png" alt="img" />
                    <p><a onclick="ga('send', 'event', 'link', '${this.serviceName}', 'gnb_myinfo');" href="//member.coolschool.co.kr/my/#/">내정보 보기</a></p>
                    <span class="logout dropdown-close" data-name="spanLogout">로그아웃</span>
                </div>
                <span class="coolris-profile-btn">
                    <img class="profile-img" data-name="imgProfileImg"
                        src="//update.coolmessenger.com/_ImageServer/coolschool/resources/images/default_profile.png"
                        onerror="this.src='//update.coolmessenger.com/_ImageServer/coolschool/resources/images/default_profile.png'" 
                        alt="img" />
                    <span class="profile-name" data-name="spanProfileName"></span>
                </span>
            </div>
        `
    }

    // gnb 메뉴 템플릿
    getGnbMenuTemplate() {
        return `
            <style>
                ul[coolrisGnbMenu] {
                    float: left;
                }
                ul[coolrisGnbMenu]:after {
                    content: '';
                    display: block;
                    clear: both;
                }
                ul[coolrisGnbMenu] li {
                    float: left;
                    margin-right: 28px;
                    position: relative;
                }
                ul[coolrisGnbMenu] li:after {
                    content: '';
                    display: block;
                    width: 1px;
                    height: 12px;
                    background-color: #dedede;
                    position: absolute;
                    right: -15px;
                    top: 50%;
                    transform: translateY(-50%);
                }
                ul[coolrisGnbMenu] li a {
                    font-size: 16px !important;
                    line-height: 25px;
                    color: #000000;
                    text-decoration: none;
                    display: block;
                }
            </style>
            <ul coolrisGnbMenu>
                <li onclick="ga('send', 'event', 'link', '${this.serviceName}', 'gnb_home');">
                    <a href="//www.coolschool.co.kr/" target="_blank">쿨스쿨 홈</a>
                </li>
                <li onclick="ga('send', 'event', 'link', '${this.serviceName}', 'gnb_coolmsg');">
                    <a href="//school.coolmessenger.com/" target="_blank">쿨메신저</a>
                </li>
                <li onclick="ga('send', 'event', 'link', '${this.serviceName}', 'gnb_sms');">
                    <a href="//coolsms.coolmessenger.com/" target="_blank">문자</a>
                </li>
                <li onclick="ga('send', 'event', 'link', '${this.serviceName}', 'gnb_samstory');">
                    <a href="//samstory.coolschool.co.kr/zone/" target="_blank">블로그</a>
                </li>
                <li onclick="ga('send', 'event', 'link', '${this.serviceName}', 'gnb_cooledu');">
                    <a href="//cooledu.coolschool.co.kr/" target="_blank">연수,모임</a>
                </li>
                <li onclick="ga('send', 'event', 'link', '${this.serviceName}', 'gnb_coolmarket');">
                    <a href="//coolmarket.coolschool.co.kr/" target="_blank">교직원몰</a>
                </li>
            </ul>
        `
    }

    // 더보기 템플릿
    getMoreTemplate() {
        return `
            <style>
                div[coolrisMore] {
                    position: relative;
                    float: left;
                    margin-top: -2px;
                    line-height: 1;
                }
                div[coolrisMore] .coolris-more-dropdown a:hover {
                    text-decoration: underline;
                }
                div[coolrisMore] .coolris-more-dropdown a { color: #000000; }
                div[coolrisMore] .coolris-more-dropdown {
                    display: none;
                    border: 1px solid #545454;
                    font-family: 'dotum', sans-serif;
                    font-size: 12px;
                    line-height: 25px;
                    width: 556px;
                    position: absolute;
                    background-color: #ffffff;
                    right: 0;
                    top: 33px;
                    z-index: 9999;
                }
                div[coolrisMore] .coolris-more-dropdown.show {
                    display: block;
                }
                div[coolrisMore] .coolris-more-btn {
                    cursor: pointer;
                    position: relative;
                    padding-right: 20px;
                    font-size: 14px;
                }
                div[coolrisMore] .coolris-more-btn:after {
                    content: '';
                    display: block;
                    position: absolute;
                    right: 0;
                    top: 50%;
                    margin-top: -4px;
                    transition: transform 0.3s;
                    background-image: url(//update.coolmessenger.com/_ImageServer/coolschool/resources/images/more-arrow.png);
                    background-repeat: no-repeat;
                    width: 13px;
                    height: 8px;
                }
                div[coolrisMore] .coolris-more-dropdown.show ~ .coolris-more-btn:after {
                    transform: rotate(-180deg);
                    background-image: url(//update.coolmessenger.com/_ImageServer/coolschool/resources/images/more-arrow-on.png);
                }
                div[coolrisMore] .coolris-more-dropdown.show ~ .coolris-more-btn {
                    color: #00a1e4;
                }
                div[coolrisMore] ul:after {
                    content: '';
                    display: block;
                    clear: both;
                }
                div[coolrisMore] ul {
                    display: table;
                    width: 100%;
                }
                div[coolrisMore] ul li {
                    width: 20%;
                    padding-left: 15px;
                    border-right: 1px solid #e1e1e1;
                    display: table-cell;
                }
                div[coolrisMore] ul li:last-child {
                    border-right: 0;
                }
                div[coolrisMore] ul li h4 {
                    color: #000000;
                    margin-top: 16px !important;
                    font-size: 12px !important;
                    line-height: 25px;
                }
                div[coolrisMore] ul li a {
                    color: #8d8d8d !important;
                    display: block;
                    margin-top: 3px;
                    width: 100%;
                    font-size: 12px !important;
                }
                div[coolrisMore] ul li a:visited, div[coolrisMore] ul li a:focus, div[coolrisMore] ul li a:hover {
                    color: #8d8d8d !important;
                }
                div[coolrisMore] div.coolris-more-dropdown div {
                    border-top: 1px solid #e1e1e1;
                    height: 36px;
                    line-height: 36px;
                    padding: 0 15px;
                }
                div[coolrisMore] div.coolris-more-dropdown div:after {
                    content: '';
                    display: block;
                    clear: both;
                }
                div[coolrisMore] div a {
                    float: left;
                }
                div[coolrisMore] div span {
                    float: right;
                    cursor: pointer;
                }
            </style>
            <div coolrisMore>
                <div class="coolris-more-dropdown">
                    <ul>
                        <li>
                            <h4>학교업무</h4>
                            <a onclick="ga('send', 'event', 'link', '${this.serviceName}', 'gnb_more_coolmsg');" href="//school.coolmessenger.com/" target="_blank">쿨메신저</a>
                            <a onclick="ga('send', 'event', 'link', '${this.serviceName}', 'gnb_more_sms');" href="//coolsms.coolmessenger.com/" target="_blank">문자</a>
                            <a onclick="ga('send', 'event', 'link', '${this.serviceName}', 'gnb_more_mova');" href="//coolmova.coolschool.co.kr/" target="_blank">안심번호</a>
                            <a onclick="ga('send', 'event', 'link', '${this.serviceName}', 'gnb_more_banner');" href="//school.coolbooks.co.kr/" target="_blank">학교간행물</a>
                        </li>
                        <li>
                            <h4>교사생활</h4>
                            <a onclick="ga('send', 'event', 'link', '${this.serviceName}', 'gnb_more_samstory');" href="//samstory.coolschool.co.kr/" target="_blank">블로그</a>
                            <a onclick="ga('send', 'event', 'link', '${this.serviceName}' 'gnb_more_books');" href="//coolbooks.coolschool.co.kr/" target="_blank">책</a>
                            <a onclick="ga('send', 'event', 'link', '${this.serviceName}', 'gnb_more_edu_meeting');" href="//cooledu.coolschool.co.kr/cooledulub/trainingList#ing" target="_blank">모임</a>
                            <a onclick="ga('send', 'event', 'link', '${this.serviceName}', 'gnb_more_mentoring');" href="//www.coolschool.co.kr/kin/mentoringList" target="_blank">학교생활상담</a>
                        </li>
                        <li>
                            <h4>학교연수</h4>
                            <a onclick="ga('send', 'event', 'link', '${this.serviceName}', 'gnb_more_edu');" href="//cooledu.coolschool.co.kr/" target="_blank">원격연수</a>
                            <a onclick="ga('send', 'event', 'link', '${this.serviceName}', 'gnb_more_edu_platform');" href="//cooledu.coolschool.co.kr/cooledulub/trainingList#ing" target="_blank">집합연수</a>
                            <a onclick="ga('send', 'event', 'link', '${this.serviceName}', 'gnb_more_edu_pama');" href="//coolpama.coolschool.co.kr/" target="_blank">학부모연수</a>
                        </li>
                        <li>
                            <h4>학교마켓</h4>
                            <a onclick="ga('send', 'event', 'link', '${this.serviceName}', 'gnb_more_market');" href="//coolmarket.coolschool.co.kr/" target="_blank">교구몰</a>
                            <a onclick="ga('send', 'event', 'link', '${this.serviceName}', 'gnb_more_market_tmall');" href="//t-mall.coolschool.co.kr/" target="_blank">복지몰</a>
                            <a onclick="ga('send', 'event', 'link', '${this.serviceName}', 'gnb_more_market_funding');" href="//t-fun.coolschool.co.kr/" target="_blank">펀딩</a>
                        </li>
                        <li>
                            <h4>교육이슈</h4>
                            <a onclick="ga('send', 'event', 'link', '${this.serviceName}', 'gnb_more_news');" href="//samstory.coolschool.co.kr/zone/story/eduin" target="_blank">교육뉴스</a>
                            <a onclick="ga('send', 'event', 'link', '${this.serviceName}', 'gnb_more_edutech');" href="//www.coolschool.co.kr/edutech" target="_blank" style="margin-bottom: 10px;">교육트렌드</a>
                            <h4>쿨스쿨소식</h4>
                            <a onclick="ga('send', 'event', 'link', '${this.serviceName}', 'gnb_more_notice');" href="//www.coolschool.co.kr/news/index" target="_blank">공지/소식</a>
                            <a onclick="ga('send', 'event', 'link', '${this.serviceName}', 'gnb_more_contact');" href="//www.coolschool.co.kr/messenger/technicalSupport" target="_blank">문의하기</a>
                            <a onclick="ga('send', 'event', 'link', '${this.serviceName}', 'gnb_more_profile');" href="//www.coolschool.co.kr/profile/search" target="_blank" style="margin-bottom: 22px">선생님찾기</a>
                        </li>
                    </ul>
                    <div>
                        <a onclick="ga('send', 'event', 'link', '${this.serviceName}', 'gnb_more_all_service');" href="//coolschool.co.kr/allService" target="_blank">서비스 전체보기</a>
                        <span class="dropdown-close">닫기</span>
                    </div>
                </div>
                <span class="coolris-more-btn">
                    더보기
                </span>
            </div>
        `
    }

    // gnb 템플릿
    getGnbTemplate(coolTemplate: CoolTemplate) {
        return `
            <style>
                @font-face {
                    font-family: 'NotoSansKRRegular';
                    src: url("//update.coolmessenger.com/_ImageServer/coolschool/resources/fonts/notosans/subset/NotoSansKR-Regular-subset.woff2") format('woff2'),
                    url("//update.coolmessenger.com/_ImageServer/coolschool/resources/fonts/notosans/subset/NotoSansKR-Regular-subset.woff") format('woff'),
                    url("//update.coolmessenger.com/_ImageServer/coolschool/resources/fonts/notosans/subset/NotoSansKR-Regular-subset.otf") format('opentype');
                }
            
                body {
                    margin: 0;
                }
                @media screen and (max-width: 980px) {
                    #coolrisGnb > div {
                        display: none;
                    }
                }
                .coolris-gnb[coolrisGnb] {
                    /*line-height: 1;*/
                    font-family: NotoSansKRRegular, sans-serif;
                    width: 100%;
                    border-bottom: 1px solid #dedede;
                    background-color: #f7f7f7;
                }
                .coolris-gnb[coolrisGnb] h4 {
                    margin: 0;
                }
                .coolris-gnb[coolrisGnb] a {
                    text-decoration: none;
                }
                .coolris-gnb[coolrisGnb] a:hover, .coolris-gnb[coolrisGnb] a:focus, .coolris-gnb[coolrisGnb] a:visited {
                    text-decoration: none;
                    color: #000000;
                }
                .coolris-gnb[coolrisGnb] ul {
                    margin: 0;
                    padding: 0;
                }
                .coolris-gnb[coolrisGnb] li {
                    list-style: none;
                    box-sizing: border-box;
                }
                .coolris-gnb[coolrisGnb] > div:after {
                    content: '';
                    display: block;
                    clear: both;
                }
                .coolris-gnb[coolrisGnb] > div {
                    width: 980px;
                    margin: 0 auto;
                    padding: 12px 0;
                    box-sizing: border-box;
                }
                .coolris-gnb[coolrisGnb] > div:nth-child(2) {
                    height: 51px;
                }
                .coolris-gnb[coolrisGnb] > div[data-name='divTopBannerArea'] {
                    padding: 0;
                    width: 100%;
                }
                .coolris-gnb[coolrisGnb] .coolris-login-section {
                    float: right;
                    display: flex;
                    align-items: center;
                    /*height: 100%;*/
                }
                .coolris-gnb[coolrisGnb] .coolris-login-section .custom-section .btn-custom {
                    font-size: 14px;
                    cursor: pointer;
                    color: #727272;
                    font-weight: bold;
                    position: relative;
                }
                .coolris-gnb[coolrisGnb] .coolris-login-section .custom-section .btn-custom:after {
                    content: '';
                    display: block;
                    position: absolute;
                    width: 1px;
                    height: 14px;
                    background-color: #dcdedf;
                    right: -11px;
                    top: 50%;
                    margin-top: -6px;
                    cursor: default;
                }
                .coolris-gnb[coolrisGnb] .coolris-menu-section {
                    float: left;
                    display: flex;
                    align-items: center;
                    /*height: 100%;*/
                }
            </style>
            <nav class="coolris-gnb" coolrisGnb>
                <div>
                    <section class="coolris-menu-section">
                        ${coolTemplate.menu}
                        ${coolTemplate.more}
                    </section>
                    <section class="coolris-login-section">
                        <div class="custom-section"></div>
                        {{? it.isLogin === false }}
                            ${coolTemplate.beforeLogin}
                        {{?? it.isLogin === true }}
                            ${coolTemplate.login}
                            ${coolTemplate.point}
                            <div data-name="divAlarmArea"></div>
                        {{?}}
                    </section>
                </div>
            </nav>
        `
    }

    private async loginCheck() {
        if(this.loginInfo.result) {
            return this.loginInfo;
        }
        this.loginInfo.result = false;
        this.loginInfo.data = undefined;
        let result = {result: false, coolid: ''} as any;
        try {
            result = await $.ajax({
                method: 'GET',
                dataType: 'jsonp',
                url: `${constants.memberUrl}/loginCheck`
            });
        } catch (e) {
            return {result: false};
        }

        if (!result || !result.coolid) {
            return {result: false};
        }
        this.loginInfo.result = true;
        this.loginInfo.data = result;
        return this.loginInfo;
    }

    async loadProfileResult(accessToken: string) {
        let response;
        try {
            response = await $.ajax(`${constants.searchUrl}/api/cool/_searchMemberByAccessToken/${accessToken}`);
        } catch (e) {
            response = {result: false}
        }
        return response;
    }

    settingProfile(profileData: any) {
        $('[data-name=imgProfileImg]').attr('src', profileData.profileImage);
        $('[data-name=spanProfileName]').html(profileData.name);
        $('[data-name=spanPoint]').html(this.addComma(profileData.point));
    }

    async loadAlarmMessage(coolIdx: number) {
        let response;
        try {
            response = await $.ajax(`${constants.searchUrl}/api/coolMessage/_search/coolIdx/${coolIdx}`);
        } catch (e) {
            response = {result: false}
        }
        return response;
    }

    private addComma(num: any) {
        const regexp = /\B(?=(\d{3})+(?!\d))/g;
        return num.toString().replace(regexp, ',');
    }

    /**
     * 쿨스쿨 로그인 페이지로 이동
     * @param {string} clientId
     * @param {string} action (선택)
     * @param env 개발 URL 사용여부
     */
    goDefaultCoolLogin(clientId = '', action = '') {
        const COOL_LOGIN_CALLBACK_URL = window.location.protocol + '//' + window.location.host + '/callback';
        const COOL_LOGIN_URL = `${constants.memberUrl}/login`;
        const param = {
            client_id: clientId,
            redirect_uri: COOL_LOGIN_CALLBACK_URL,
            redirect_uri_next: window.location.href,
            do_action: action,
        };

        let loginURL = COOL_LOGIN_URL;
        let paramStr = $.param(param);
        if (param.redirect_uri_next.search('&') === -1 && action !== '') {
            paramStr = paramStr.replace('&do_action=', '?do_action=');
        }
        window.location.href = `${loginURL}?${paramStr}`;
    }

    goCoolLogin() {
        const CLIENT_ID = this.getClientId();
        this.goDefaultCoolLogin(CLIENT_ID);
    }

    async logout(logoutOpts?: LogoutOpts | any): Promise<boolean> {
        const logoutUrl = `${constants.memberUrl}/logout?client_id=:client_id`;
        const logoutProc = `${constants.memberUrl}/logoutProc`;
        const setting = {
            url: logoutUrl.replace(':client_id', this.getClientId),
            type: 'GET',
            contentType: "application/json",
            dataType: "jsonp",
        };
        const settingResponse = await $.ajax(setting);
        if (settingResponse.result === 'success') {
            this.setCookie('accessToken', '', -1 as any);
            this.setCookie('client_id', '', -1 as any);

            logoutOpts = logoutOpts || {};
            if(logoutOpts.isLogoutProc === undefined || logoutOpts.isLogoutProc === true) {
                if (!logoutOpts.logoutProcUrl) {
                    await $.get(`//${window.location.host}/logoutProc`);
                } else {
                    await $.get(`${logoutOpts.logoutProcUrl}/logoutProc`);
                }
            }
            if (logoutOpts.isRestoreLocation === undefined || logoutOpts.isRestoreLocation === true) { // 로그아웃 후 있던 페이지에 머무를 것이냐 말것이냐
                location.href = `//${window.location.host}${window.location.pathname}`;
            }
            return true;
        }
        return false;
    }

    // 회원가입
    join() {
        const CLIENT_ID = this.getClientId();
        const form = document.createElement('form');                                     // form 엘리멘트 생성
        form.setAttribute('method', 'post');                                   // method 속성 설정
        form.setAttribute('action', 'https://member.coolschool.co.kr/');       // action 속성 설정
        document.body.appendChild(form);                                                          // 현재 페이지에 form 엘리멘트 추가
        const insert1 = document.createElement("input");                                 // input 엘리멘트 생성
        const insert2 = document.createElement("input");
        insert1.setAttribute('name', 'svcid');                                 // clidentId
        insert1.setAttribute('value', CLIENT_ID);
        insert2.setAttribute('name', 'redirect_uri');                          // 완료 후 돌아올 url
        insert2.setAttribute('value', window.location.href);
        form.appendChild(insert1);
        form.appendChild(insert2);
        form.submit();
    }

    /**
     * 로그인, 회원가입, 로그아웃 이벤트 등록
     */
    onLoginOutEvents() {
        // 로그인
        $("[data-name='aCoolLogin']").click(() => {
            ga('send', 'event', 'link', this.serviceName, 'gnb_login');
            this.goCoolLogin();
        });

        // 회원가입
        $("[data-name='aCoolJoin']").click(() => {
            ga('send', 'event', 'link', this.serviceName, 'gnb_join');
            this.join();
        });

        // 로그아웃
        $("[data-name='spanLogout']").click(() => {
            ga('send', 'event', 'link', this.serviceName, 'gnb_logout');
            this.logout();
        });
    }

    getClientId() {
        let host = location.host;
        host = host.replace('.coolschool.co.kr', '')
            .replace('local-', '')
            .replace('dev-', '')
            .replace('local', '')
            .replace('dev', '')
            .replace('.com', '')
            .replace('.co.kr', '')
            .replace('school.', '');
        let clientId = (constants as any).clientIds[host];
        if(!clientId && console) {
            console.warn('can`t not find clientId');
        }
        return clientId;
    }

    /**
     * 쿠키 저장
     * @param cname
     * @param cvalue
     * @param exdays
     */
    setCookie(cname: string, cvalue: string, exdays: number) {
        const d = new Date();
        // tslint:disable-next-line
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        const expires = 'expires=' + d.toUTCString();
        document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
    }

    /**
     * 쿠키 가져오기
     * @param cname
     */
    getCookie(cname: string) {
        const name = cname + "=";
        const decodedCookie = decodeURIComponent(document.cookie);
        const ca = decodedCookie.split(';');
        for(var i = 0; i <ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    /**
     * y.m.d 형태로 format 변경
     * @param date
     */
    toDateYmdFormat(date: Date) {
        const yyyy = date.getFullYear().toString();
        const mm = (date.getMonth() + 1).toString();
        const dd = date.getDate().toString();

        return yyyy + '.' +(mm[1] ? mm : '0' + mm[0]) + '.' + (dd[1] ? dd : '0' + dd[0]);
    }

    /**
     *  알람 데이터 로드 및 세팅
     */
    async loadSettingMyArea() {
        let coolAlarmItems = [];
        // 프로필 세팅
        const profileResult = await this.loadProfileResult(this.accessToken);
        if (!profileResult.result) {
            return;
        }
        let profileData = profileResult.data;
        this.settingProfile(profileData);
        // 알림 세팅
        const coolAlarmResponse = await this.loadAlarmMessage(profileData.idx);
        if (!coolAlarmResponse.result) {
            return;
        }
        coolAlarmItems = coolAlarmResponse.data;
        // @ts-ignore
        const alarmTemplateFn = this.doT.template(this.getAlarmTemplate());
        $("[data-name='divAlarmArea']").html(alarmTemplateFn({
            coolAlarmItems: coolAlarmItems,
            toDateYmdFormat: this.toDateYmdFormat
        }));

        // 알람 드롭다운 이벤트
        this.loginToggle('coolris-alarm-btn', 'coolris-alarm-dropdown');
        this.loginDropdown('coolris-alarm-dropdown', this.targetAlarmCheck);
    }

    /**
     *  탑배너 데이터 로드 및 세팅
     */
    async loadSettingTopBanner() {
        const setting = {
            url: '//samstory.coolschool.co.kr/api/externalJsonInfo?type=topBanner',
            type: 'GET'
        };

        const responseStr = await $.ajax(setting);
        const response = JSON.parse(responseStr);

        if (!response || !response.categories || response.categories.length === 0) {
            return;
        }

        // 배너 기한 체크
        const nowDate = new Date();
        response.bannerData = response.categories.filter((k: any) => {
            if (nowDate >= new Date(k.startDate) && nowDate <= new Date(k.endDate)) {
                return k;
            }
        });

        this.suffle(response.bannerData);
        if (!response.bannerData || response.bannerData.length === 0) {
            return;
        }
        // @ts-ignore
        const topBannerTemplateFn = this.doT.template(this.getTopBannerTemplate());
        $("[data-name='divTopBannerArea']").html(topBannerTemplateFn({
            coolTopBannerItems: response.bannerData,
        }));

        // 탑배너 슬라이드 이벤트
        this.topBannerSlideEvent();
        // 탑배너 닫기 이벤트
        this.topbannerCloseEvent();
    }

    private suffle(a: any) {
        let j, x, i;
        for (i = a.length; i; i -= 1) {
            j = Math.floor(Math.random() * i);
            x = a[i - 1];
            a[i - 1] = a[j];
            a[j] = x;
        }
    }

    async loginResultPromise() {
        if(this.loginInfo.result) {
            return this.loginInfo;
        } else {
            return this.loginCheck();
        }
    }
}
