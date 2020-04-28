declare var $: any;

interface CoolTemplate {
    login: string;
    menu: string;
    more: string;
    alarm: string;
    point: string;
    beforeLogin: string;
}

class Coolris {
    constructor() {
        // @ts-ignore
        !function(){"use strict";var u,d={name:"doT",version:"1.1.1",templateSettings:{evaluate:/\{\{([\s\S]+?(\}?)+)\}\}/g,interpolate:/\{\{=([\s\S]+?)\}\}/g,encode:/\{\{!([\s\S]+?)\}\}/g,use:/\{\{#([\s\S]+?)\}\}/g,useParams:/(^|[^\w$])def(?:\.|\[[\'\"])([\w$\.]+)(?:[\'\"]\])?\s*\:\s*([\w$\.]+|\"[^\"]+\"|\'[^\']+\'|\{[^\}]+\})/g,define:/\{\{##\s*([\w\.$]+)\s*(\:|=)([\s\S]+?)#\}\}/g,defineParams:/^\s*([\w$]+):([\s\S]+)/,conditional:/\{\{\?(\?)?\s*([\s\S]*?)\s*\}\}/g,iterate:/\{\{~\s*(?:\}\}|([\s\S]+?)\s*\:\s*([\w$]+)\s*(?:\:\s*([\w$]+))?\s*\}\})/g,varname:"it",strip:!0,append:!0,selfcontained:!1,doNotSkipEncoded:!1},template:void 0,compile:void 0,log:!0};d.encodeHTMLSource=function(e){var n={"&":"&#38;","<":"&#60;",">":"&#62;",'"':"&#34;","'":"&#39;","/":"&#47;"},t=e?/[&<>"'\/]/g:/&(?!#?\w+;)|<|>|"|'|\//g;return function(e){return e?e.toString().replace(t,function(e){return n[e]||e}):""}},u=function(){return this||(0,eval)("this")}.apply(this),"undefined"!=typeof module&&module.exports?module.exports=d:"function"==typeof define&&define.amd?define(function(){return d}):u.doT=d;var s={append:{start:"'+(",end:")+'",startencode:"'+encodeHTML("},split:{start:"';out+=(",end:");out+='",startencode:"';out+=encodeHTML("}},p=/$^/;function l(e){return e.replace(/\\('|\\)/g,"$1").replace(/[\r\t\n]/g," ")}d.template=function(e,n,t){var r,o,a=(n=n||d.templateSettings).append?s.append:s.split,c=0,i=n.use||n.define?function r(o,e,a){return("string"==typeof e?e:e.toString()).replace(o.define||p,function(e,r,n,t){return 0===r.indexOf("def.")&&(r=r.substring(4)),r in a||(":"===n?(o.defineParams&&t.replace(o.defineParams,function(e,n,t){a[r]={arg:n,text:t}}),r in a||(a[r]=t)):new Function("def","def['"+r+"']="+t)(a)),""}).replace(o.use||p,function(e,n){o.useParams&&(n=n.replace(o.useParams,function(e,n,t,r){if(a[t]&&a[t].arg&&r){var o=(t+":"+r).replace(/'|\\/g,"_");return a.__exp=a.__exp||{},a.__exp[o]=a[t].text.replace(new RegExp("(^|[^\\w$])"+a[t].arg+"([^\\w$])","g"),"$1"+r+"$2"),n+"def.__exp['"+o+"']"}}));var t=new Function("def","return "+n)(a);return t?r(o,t,a):t})}(n,e,t||{}):e;i=("var out='"+(n.strip?i.replace(/(^|\r|\n)\t* +| +\t*(\r|\n|$)/g," ").replace(/\r|\n|\t|\/\*[\s\S]*?\*\//g,""):i).replace(/'|\\/g,"\\$&").replace(n.interpolate||p,function(e,n){return a.start+l(n)+a.end}).replace(n.encode||p,function(e,n){return r=!0,a.startencode+l(n)+a.end}).replace(n.conditional||p,function(e,n,t){return n?t?"';}else if("+l(t)+"){out+='":"';}else{out+='":t?"';if("+l(t)+"){out+='":"';}out+='"}).replace(n.iterate||p,function(e,n,t,r){return n?(c+=1,o=r||"i"+c,n=l(n),"';var arr"+c+"="+n+";if(arr"+c+"){var "+t+","+o+"=-1,l"+c+"=arr"+c+".length-1;while("+o+"<l"+c+"){"+t+"=arr"+c+"["+o+"+=1];out+='"):"';} } out+='"}).replace(n.evaluate||p,function(e,n){return"';"+l(n)+"out+='"})+"';return out;").replace(/\n/g,"\\n").replace(/\t/g,"\\t").replace(/\r/g,"\\r").replace(/(\s|;|\}|^|\{)out\+='';/g,"$1").replace(/\+''/g,""),r&&(n.selfcontained||!u||u._encodeHTML||(u._encodeHTML=d.encodeHTMLSource(n.doNotSkipEncoded)),i="var encodeHTML = typeof _encodeHTML !== 'undefined' ? _encodeHTML : ("+d.encodeHTMLSource.toString()+"("+(n.doNotSkipEncoded||"")+"));"+i);try{return new Function(n.varname,i)}catch(e){throw"undefined"!=typeof console&&console.log("Could not create a template function: "+i),e}},d.compile=function(e,n){return d.template(e,null,n)}}.apply(this)
    }

    start() {
        // interface Cooltemplate에 템플릿 주기
        const coolTemplate = {
            login: this.getLoginTemplate(),
            menu: this.getGnbMenuTemplate(),
            more: this.getMoreTemplate(),
            alarm: this.getAlarmTemplate(),
            point: this.getPointTemplate(),
            beforeLogin: this.getBeforLoginTemplate()
        };

        // dot에 template을 준다.
        // @ts-ignore
        const coolrisTemplateFn = this.doT.template(this.getGnbTemplate(coolTemplate));
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
    }

    // 버튼 클릭시 드롭다운 켜짐
    loginToggle(toggleBtn: string, dropDownClass: string) {
        $(`.${toggleBtn}`).on('click', () => {
            $(`.${dropDownClass}`).toggleClass('show');
        });
    }

    // 드롭다운 껐다가 키기
    loginDropdown(dropdownClass: string, callback: Function) {
        // 프로필 메뉴 빼고 클릭시 드롭다운 꺼짐
        $(window).on('click', ($event: any) => {
            if (!callback($event.target.className)) {
                const dropdown = $(`.${dropdownClass}`);
                if (dropdown.hasClass('show')) {
                    dropdown.removeClass('show');
                }
            }
        });

        $(`.${dropdownClass}`).on('click', ($event: any) => {
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
        switch (target) {
            case 'coolris-more-btn':
                isChecked = true;
                break;
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
                <a href="//point.coolschool.co.kr" target="_blank">
                    <img src="//update.coolmessenger.com/_ImageServer/coolschool/commonTop/point.png" alt="img" />   
                    7,345        
                </a>
            </div>   
        `
    }

    // 로그인 전 템플릿
    getBeforLoginTemplate() {
        return `
            <style>
                div[coolrisBeforLogin] {
                    margin-top: -3px;
                }
                div[coolrisBeforLogin] a {
                    font-size: 13px;
                    color: #000000;
                }
                div[coolrisBeforLogin] span {
                    display: inline-block;
                    margin: 0 3px;
                }
            </style>
            <div coolrisBeforLogin>
                <a href="">로그인</a> <span>/</span> <a href="">회원가입</a>
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
                    top: 37px;
                    right: 0;
                    font-size: 12px;
                    width: 300px;
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
                    overflow-y: hidden;
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
                        <li>
                            <a href="" target="_blank">
                                <p>구독중인 [황제쌤의 슬기로운 초등생활]에 새 소식이 있습니다.</p>
                                <span>5달 전</span>
                            </a>
                        </li>
                        <li>
                            <a href="" target="_blank">
                                <p>구독중인 [황제쌤의 슬기로운 초등생활]에 새 소식이 있습니다.</p>
                                <span>5달 전</span>
                            </a>
                        </li>
                        <li>
                            <a href="" target="_blank">
                                <p>구독중인 [황제쌤의 슬기로운 초등생활]에 새 소식이 있습니다.</p>
                                <span>5달 전</span>
                            </a>
                        </li>
                    </ul>
                    <div>
                        <a href="" target="_blank">알림 모두 보기</a>
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
                    top: 37px;
                    right: 0;
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
                div[coolrisProfile] .coolris-profile-dropdown a {
                    color: #25a7df;
                    font-size: 14px;
                    float: right;
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
                    <p>내정보 보기</p>
                    <span class="logout dropdown-close">로그아웃</span>
                </div>
                <span class="coolris-profile-btn">
                    <img class="profile-img" src="//update.coolmessenger.com/_ImageServer/coolschool/resources/images/default_profile.png" alt="img" />
                    <span class="profile-name">김새미</span>
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
                    font-size: 16px;
                    line-height: 25px;
                    color: #000000;
                    text-decoration: none;
                    display: block;
                }
            </style>
            <ul coolrisGnbMenu>
                <li>
                    <a href="" target="_blank">쿨스쿨 홈</a>
                </li>
                <li>
                    <a href="" target="_blank">쿨메신저</a>
                </li>
                <li>
                    <a href="" target="_blank">문자</a>
                </li>
                <li>
                    <a href="" target="_blank">교육자료</a>
                </li>
                <li>
                    <a href="" target="_blank">연수,모임</a>
                </li>
                <li>
                    <a href="" target="_blank">교직원몰</a>
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
                }
                div[coolrisMore] .coolris-more-dropdown a:hover {
                    text-decoration: underline;
                }
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
                    top: 39px;
                }
                div[coolrisMore] .coolris-more-dropdown.show {
                    display: block;
                }
                div[coolrisMore] .coolris-more-btn {
                    cursor: pointer;
                    position: relative;
                    padding-right: 20px;
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
                }
                div[coolrisMore] ul li a {
                    color: #8d8d8d;
                    display: block;
                    margin-top: 3px;
                    width: 100%;
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
                            <a href="" target="_blank">쿨메신저</a>
                            <a href="" target="_blank">문자</a>
                            <a href="" target="_blank">안심번호</a>
                            <a href="" target="_blank">학교간행물</a>
                        </li>
                        <li>
                            <h4>교사생활</h4>
                            <a href="" target="_blank">블로그</a>
                            <a href="" target="_blank">책</a>
                            <a href="" target="_blank">모임</a>
                            <a href="" target="_blank">학교생활상담</a>
                        </li>
                        <li>
                            <h4>학교연수</h4>
                            <a href="" target="_blank">원격연수</a>
                            <a href="" target="_blank">집합연수</a>
                            <a href="" target="_blank">학부모연수</a>
                        </li>
                        <li>
                            <h4>학교마켓</h4>
                            <a href="" target="_blank">교구몰</a>
                            <a href="" target="_blank">복지몰</a>
                            <a href="" target="_blank">펀딩</a>
                            <a href="" target="_blank">여행</a>
                        </li>
                        <li>
                            <h4>교육이슈</h4>
                            <a href="" target="_blank">교육뉴스</a>
                            <a href="" target="_blank" style="margin-bottom: 10px;">교육트랜드</a>
                            <h4>쿨스쿨소식</h4>
                            <a href="" target="_blank">공지/소식</a>
                            <a href="" target="_blank">문의하기</a>
                            <a href="" target="_blank" style="margin-bottom: 22px">선생님검색</a>
                        </li>
                    </ul>
                    <div>
                        <a href="//local.coolschool.co.kr/allService" target="_blank">서비스 전체보기</a>
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
                    src: url("./font/NotoSansKR-Regular-subset.woff2") format('woff2'),
                    url("./font/NotoSansKR-Regular-subset.woff") format('woff'),
                    url("./font/NotoSansKR-Regular-subset.otf") format('opentype');
                    /*src: url("//update.coolmessenger.com/_ImageServer/coolschool/resources/fonts/notosans/subset/NotoSansKR-Thin-subset.woff2") format('woff2'),
                    url("//update.coolmessenger.com/_ImageServer/coolschool/resources/fonts/notosans/subset/NotoSansKR-Thin-subset.woff") format('woff'),
                    url("//update.coolmessenger.com/_ImageServer/coolschool/resources/fonts/notosans/subset/NotoSansKR-Thin-subset.otf") format('opentype');*/
                }
            
                body {
                    margin: 0;
                }
                .coolris-gnb[coolrisGnb] {
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
                    height: 51px;
                    box-sizing: border-box;
                }
                .coolris-gnb[coolrisGnb] .coolris-login-section {
                    float: right;
                    display: table;
                    margin-top: 2px;
                }
                .coolris-gnb[coolrisGnb] .coolris-menu-section {
                    float: left;
                }
            </style>
            <div class="coolris-gnb" coolrisGnb>
                <div>
                    <div class="coolris-menu-section">
                        ${coolTemplate.menu}
                        ${coolTemplate.more}
                    </div>
                    <div class="coolris-login-section">
                        ${coolTemplate.beforeLogin}
                        ${coolTemplate.login}
                        ${coolTemplate.point}
                        ${coolTemplate.alarm}
                    </div>
                </div>
            </div>
        `
    }
}
