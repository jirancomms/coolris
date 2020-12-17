import {CoolrisOpts, GaOpts} from "./coolris-common";
import {CoolrisService} from "./service/coolris-service";
import {RisService} from "./service/ris-service";

declare var gtag: any;
declare var window: any;

export class RisbaseCommon {
    protected gaMeasurementId: string;
    protected serviceName: string;
    protected risService: RisService;

    constructor(serviceName = undefined) {
        // include dot.js
        // @ts-ignore
        !function(){"use strict";var u,d={name:"doT",version:"1.1.3",templateSettings:{evaluate:/\{\{([\s\S]+?(\}?)+)\}\}/g,interpolate:/\{\{=([\s\S]+?)\}\}/g,encode:/\{\{!([\s\S]+?)\}\}/g,use:/\{\{#([\s\S]+?)\}\}/g,useParams:/(^|[^\w$])def(?:\.|\[[\'\"])([\w$\.]+)(?:[\'\"]\])?\s*\:\s*([\w$\.]+|\"[^\"]+\"|\'[^\']+\'|\{[^\}]+\})/g,define:/\{\{##\s*([\w\.$]+)\s*(\:|=)([\s\S]+?)#\}\}/g,defineParams:/^\s*([\w$]+):([\s\S]+)/,conditional:/\{\{\?(\?)?\s*([\s\S]*?)\s*\}\}/g,iterate:/\{\{~\s*(?:\}\}|([\s\S]+?)\s*\:\s*([\w$]+)\s*(?:\:\s*([\w$]+))?\s*\}\})/g,varname:"it",strip:!0,append:!0,selfcontained:!1,doNotSkipEncoded:!1},template:void 0,compile:void 0,log:!0};d.encodeHTMLSource=function(e){var n={"&":"&#38;","<":"&#60;",">":"&#62;",'"':"&#34;","'":"&#39;","/":"&#47;"},t=e?/[&<>"'\/]/g:/&(?!#?\w+;)|<|>|"|'|\//g;return function(e){return e?e.toString().replace(t,function(e){return n[e]||e}):""}},u=function(){return this||(0,eval)("this")}(),this.doT=d;var s={append:{start:"'+(",end:")+'",startencode:"'+encodeHTML("},split:{start:"';out+=(",end:");out+='",startencode:"';out+=encodeHTML("}},p=/$^/;function l(e){return e.replace(/\\('|\\)/g,"$1").replace(/[\r\t\n]/g," ")}d.template=function(e,n,t){var r,o,a=(n=n||d.templateSettings).append?s.append:s.split,c=0,i=n.use||n.define?function r(o,e,a){return("string"==typeof e?e:e.toString()).replace(o.define||p,function(e,r,n,t){return 0===r.indexOf("def.")&&(r=r.substring(4)),r in a||(":"===n?(o.defineParams&&t.replace(o.defineParams,function(e,n,t){a[r]={arg:n,text:t}}),r in a||(a[r]=t)):new Function("def","def['"+r+"']="+t)(a)),""}).replace(o.use||p,function(e,n){o.useParams&&(n=n.replace(o.useParams,function(e,n,t,r){if(a[t]&&a[t].arg&&r){var o=(t+":"+r).replace(/'|\\/g,"_");return a.__exp=a.__exp||{},a.__exp[o]=a[t].text.replace(new RegExp("(^|[^\\w$])"+a[t].arg+"([^\\w$])","g"),"$1"+r+"$2"),n+"def.__exp['"+o+"']"}}));var t=new Function("def","return "+n)(a);return t?r(o,t,a):t})}(n,e,t||{}):e;i=("var out='"+(n.strip?i.replace(/(^|\r|\n)\t* +| +\t*(\r|\n|$)/g," ").replace(/\r|\n|\t|\/\*[\s\S]*?\*\//g,""):i).replace(/'|\\/g,"\\$&").replace(n.interpolate||p,function(e,n){return a.start+l(n)+a.end}).replace(n.encode||p,function(e,n){return r=!0,a.startencode+l(n)+a.end}).replace(n.conditional||p,function(e,n,t){return n?t?"';}else if("+l(t)+"){out+='":"';}else{out+='":t?"';if("+l(t)+"){out+='":"';}out+='"}).replace(n.iterate||p,function(e,n,t,r){return n?(c+=1,o=r||"i"+c,n=l(n),"';var arr"+c+"="+n+";if(arr"+c+"){var "+t+","+o+"=-1,l"+c+"=arr"+c+".length-1;while("+o+"<l"+c+"){"+t+"=arr"+c+"["+o+"+=1];out+='"):"';} } out+='"}).replace(n.evaluate||p,function(e,n){return"';"+l(n)+"out+='"})+"';return out;").replace(/\n/g,"\\n").replace(/\t/g,"\\t").replace(/\r/g,"\\r").replace(/(\s|;|\}|^|\{)out\+='';/g,"$1").replace(/\+''/g,""),r&&(n.selfcontained||!u||u._encodeHTML||(u._encodeHTML=d.encodeHTMLSource(n.doNotSkipEncoded)),i="var encodeHTML = typeof _encodeHTML !== 'undefined' ? _encodeHTML : ("+d.encodeHTMLSource.toString()+"("+(n.doNotSkipEncoded||"")+"));"+i);try{return new Function(n.varname,i)}catch(e){throw"undefined"!=typeof console&&console.log("Could not create a template function: "+i),e}},d.compile=function(e,n){return d.template(e,null,n)}}.apply(this);
        if(serviceName == undefined) {
            this.serviceName = this.getHost();
        }
    }

    /**
     * 구글 ID적용, 구글 코드 함수 적용
     * @param coolrisOpt
     */
    setGoogleCode(coolrisOpt: CoolrisOpts | any = undefined) {
        if (coolrisOpt && coolrisOpt.gaOpts && coolrisOpt.gaOpts.gaMeasurementId) {
            this.gaMeasurementId = coolrisOpt.gaOpts.gaMeasurementId;
            this.addCcAnalytics(coolrisOpt.gaOpts);
        }
    }

    /**
     * 구글코드 옵션 합쳐주기 (디폴트 옵션 주기)
     * @param coolrisOpt
     */
    initOption(coolrisOpt: CoolrisOpts | any = undefined): CoolrisOpts {
        const defOption: CoolrisOpts = {
            gaOpts: {
                gaPageviewCall: true,
                gaMeasurementId: 'UA-92421532-1'
            }
        } as any;
        return $.extend(true, defOption, coolrisOpt);
    }

    // 드롭다운 껐다가 키기
    dropdownOnOff(dropdownClass: string, callback: Function) {
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

    // 구글코드 삽입
    protected addCcAnalytics(gaOpts: GaOpts) {
        // include gtag
        $(document).ready(() => {
            const glTagLen = $("script[src*='www.googletagmanager.com/gtag/js']").length;
            if (glTagLen === 0) {
                const ga = document.createElement('script');
                ga.type = 'text/javascript';
                ga.async = true;
                ga.src = 'https://www.googletagmanager.com/gtag/js?id=' + gaOpts.gaMeasurementId;
                const s = document.getElementsByTagName('script')[0];
                s.parentNode.insertBefore(ga, s);
            }
            if (!window.gtag || typeof window.gtag !== 'function') {
                window.dataLayer = window.dataLayer || [];
                // @ts-ignore
                window.gtag = () => {window.dataLayer.push(arguments);}
            }
            gtag('js', new Date());
            if (gaOpts.gaPageviewCall === undefined) {
                gaOpts.gaPageviewCall = true;
            }
            gtag('config', gaOpts.gaMeasurementId, {'send_page_view': gaOpts.gaPageviewCall});
        });
    }

    // 랜덤한 숫자 가져오기
    getRandomeNum(index: number) {
        return Math.floor((Math.random() * index))
    }

    /**
     *  숫자 원처리 (, 콤마 붙텨주기)
     * @param num 숫자
     * @protected
     */
    protected addComma(num: any) {
        const regexp = /\B(?=(\d{3})+(?!\d))/g;
        return num.toString().replace(regexp, ',');
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
     * 배열 셔플
     * @protected
     * @param a 배열
     */
    protected suffle(a: Array<any>) {
        let j, x, i;
        for (i = a.length; i; i -= 1) {
            j = Math.floor(Math.random() * i);
            x = a[i - 1];
            a[i - 1] = a[j];
            a[j] = x;
        }
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
     *  호스트 정보 가져오기
     */
    getHost() {
        let host = location.hostname;
        host = host.replace('.coolschool.co.kr', '')
            .replace('coolschool.co.kr', '')
            .replace('coolmessenger.com', '')
            .replace('.coolmessenger.com', '')
            .replace('local-', '')
            .replace('dev-', '')
            .replace('local', '')
            .replace('dev', '')
            .replace('.com', '')
            .replace('.co.kr', '');
        if(host === '' || host === 'www') {
            return 'coolschool';
        }
        return host;
    }

    // 버튼 클릭시 드롭다운 켜짐
    /**
     *
     * @param toggleBtn  드롭다운 토글버튼 클레스
     * @param dropDownClass 드롭다운 클레스
     * @param googleCodeLabel 드롭다운 토글버스의 구글코드
     */
    dropdownToggle(toggleBtn: string, dropDownClass: string, googleCodeLabel: string) {
        $(`.${toggleBtn}`).click(() => {
            $(`.${dropDownClass}`).toggleClass('show');
            this.setGtag(googleCodeLabel);
        });
    }

    /**
     * gtag 설정
     * @param googleCodeLabel 구글코드에 입력할 라벨 입력
     */
    setGtag(googleCodeLabel: string) {
        gtag('event', this.serviceName, {
            'event_category': 'link',
            'event_label': googleCodeLabel,
            'send_to': this.gaMeasurementId
        })
    }

    /**
     *  스크롤 할 때 quick menu 보여주고 가리기 (위로가기, 아래로가기 버튼)
     */
    onScrollShowQuickMenu() {
        const $win = $(window);
        $win.scroll(() => {
            const winScroll = $win.scrollTop();
            const topBtm = $("div[coolrisQuickMenu]");
            if( winScroll > 100  ) {
                topBtm.addClass("on");
            } else {
                topBtm.removeClass("on");
            }
        })
    };

    /**
     * quick menu 클릭 이벤트 (위로가기, 아래로가기 버튼)
     */
    onClickQuickMenu() {
        const htmlBody = $("html, body");
        const quickmenu = $("div[coolrisQuickMenu]");
        quickmenu.find(".ico-top").click(() => { //위로가기 눌렀을때
            htmlBody.stop().animate({"scrollTop" : 0});
        });
        quickmenu.find(".ico-bottom").click(() => { //아래로가기 눌렀을때
            const footerH = $(document).height();
            htmlBody.stop().animate({"scrollTop" : footerH});
        });
    };

    // 드롭다운, 퀵메뉴 이벤트
    eventDropdownAndQuickMenu() {
        // 패밀리 사이트 드롭다운
        this.dropdownToggle('coolris-familysite-btn', 'coolris-familysite-dropdown', 'familysite');
        this.dropdownOnOff('coolris-familysite-dropdown', this.targeCheck);

        // quick menu 함수
        this.onScrollShowQuickMenu();
        this.onClickQuickMenu();
    }

    // 패밀리 사이트 드롭다운 버튼을 클릭했는지 체크
    targeCheck(target: string) {
        let isChecked = false;
        switch (target) {
            case 'coolris-familysite-btn':
                isChecked = true;
                break;
            case 'coolris-familysite-arrow':
                isChecked = true;
                break;
        }
        return isChecked;
    }
}
