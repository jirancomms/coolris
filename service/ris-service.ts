import {constants, CoolTemplate, FooterTemplate} from "../coolris-common";

export class RisService {
    // header 템플릿
    getGnbOuterTemplate() {
        return `
            <div data-name="divTopBannerArea"></div>
            <div data-name="coolrisGnbArea"></div>
        `
    }

    // gnb 템플릿
    getGnbTemplate(coolTemplate: CoolTemplate) {
        return `
            <style>
                @font-face {
                    font-family: 'NanumSquareRound';
                    src: url("//resource.coolmessenger.com/coolschool/resources/fonts/nanum-square-round/NanumSquareRoundR.woff2") format('woff2'),
                    url("//resource.coolmessenger.com/coolschool/resources/fonts/nanum-square-round/NanumSquareRoundR.woff") format('woff'),
                    url("//resource.coolmessenger.com/coolschool/resources/fonts/nanum-square-round/NanumSquareRoundR.eot") format('opentype');
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
                    font-family: NanumSquareRound, sans-serif;
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
                    line-height: 25px;
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

    // 로그인 템플릿
    getLoginTemplate(serviceName: string, gaMeasurementId: string) {
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
                    <p><a onclick="gtag('event', '${serviceName}', {'event_category': 'link', 'event_label': 'gnb_myinfo', 'send_to': '${gaMeasurementId}'});" href="${constants.memberUrl}/my/#/">내정보 보기</a></p>
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
    getGnbMenuTemplate(serviceName: string, gaMeasurementId: string) {
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
                    font-size: 15px !important;
                    line-height: 25px;
                    color: #000000;
                    text-decoration: none;
                    display: block;
                }
            </style>
            <ul coolrisGnbMenu>
                <li onclick="gtag('event', '${serviceName}', {'event_category': 'link', 'event_label': 'gnb_home', 'send_to': '${gaMeasurementId}'});">
                    <a href="//www.coolschool.co.kr/" target="_blank">쿨스쿨 홈</a>
                </li>
                <li onclick="gtag('event', '${serviceName}', {'event_category': 'link', 'event_label': 'gnb_samstory', 'send_to': '${gaMeasurementId}'});">
                    <a href="//samstory.coolschool.co.kr/zone" target="_blank">블로그</a>
                </li>
                <li onclick="gtag('event', '${serviceName}', {'event_category': 'link', 'event_label': 'gnb_cooledu', 'send_to': '${gaMeasurementId}'});">
                    <a href="//cooledu.coolschool.co.kr" target="_blank">연수/모임</a>
                </li>
                <li onclick="gtag('event', '${serviceName}', {'event_category': 'link', 'event_label': 'gnb_cooledutech', 'send_to': '${gaMeasurementId}'});">
                    <a href="//www.coolschool.co.kr/edutech" target="_blank">에듀테크</a>
                </li>
                <li onclick="gtag('event', '${serviceName}', {'event_category': 'link', 'event_label': 'gnb_coolmarket', 'send_to': '${gaMeasurementId}'});">
                    <a href="//coolmarket.coolschool.co.kr" target="_blank">교구몰</a>
                </li>
                <li onclick="gtag('event', '${serviceName}', {'event_category': 'link', 'event_label': 'gnb_coolendar', 'send_to': '${gaMeasurementId}'});">
                    <a href="//coolendar.coolschool.co.kr" target="_blank">일정관리</a>
                </li>
            </ul>
        `
    }

    // 더보기 템플릿
    getMoreTemplate(serviceName: string, gaMeasurementId: string) {
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
                            <a onclick="gtag('event', '${serviceName}', {'event_category': 'link', 'event_label': 'gnb_more_coolmsg', 'send_to': '${gaMeasurementId}'});" href="//school.coolmessenger.com/" target="_blank">쿨메신저</a>
                            <a onclick="gtag('event', '${serviceName}', {'event_category': 'link', 'event_label': 'gnb_more_sms', 'send_to': '${gaMeasurementId}'});" href="//coolsms.coolmessenger.com/" target="_blank">문자</a>
                            <a onclick="gtag('event', '${serviceName}', {'event_category': 'link', 'event_label': 'gnb_more_mova', 'send_to': '${gaMeasurementId}'});" href="//coolmova.coolschool.co.kr/" target="_blank">안심번호</a>
                            <a onclick="gtag('event', '${serviceName}', {'event_category': 'link', 'event_label': 'gnb_more_banner', 'send_to': '${gaMeasurementId}'});" href="//school.coolbooks.co.kr/" target="_blank">학교간행물</a>
                        </li>
                        <li>
                            <h4>교사생활</h4>
                            <a onclick="gtag('event', '${serviceName}', {'event_category': 'link', 'event_label': 'gnb_more_samstory', 'send_to': '${gaMeasurementId}'});" href="//samstory.coolschool.co.kr/" target="_blank">블로그</a>
                            <a onclick="gtag('event', '${serviceName}', {'event_category': 'link', 'event_label': 'gnb_more_books', 'send_to': '${gaMeasurementId}'});" href="//coolbooks.coolschool.co.kr/" target="_blank">책</a>
                            <a onclick="gtag('event', '${serviceName}', {'event_category': 'link', 'event_label': 'gnb_more_edu_meeting', 'send_to': '${gaMeasurementId}'});" href="//cooledu.coolschool.co.kr/cooledulub/trainingList#ing" target="_blank">모임</a>
                            <!--<a onclick="gtag('event', serviceName, {'event_category': 'link', 'event_label': 'gnb_more_mentoring', 'send_to': 'UA-92421532-1'});" href="//www.coolschool.co.kr/kin/mentoringList" target="_blank">학교생활상담</a>-->
                        </li>
                        <li>
                            <h4>학교연수</h4>
                            <a onclick="gtag('event', '${serviceName}', {'event_category': 'link', 'event_label': 'gnb_more_edu', 'send_to': '${gaMeasurementId}'});" href="//cooledu.coolschool.co.kr/" target="_blank">원격연수</a>
                            <a onclick="gtag('event', '${serviceName}', {'event_category': 'link', 'event_label': 'gnb_more_edu_platform', 'send_to': '${gaMeasurementId}'});" href="//cooledu.coolschool.co.kr/cooledulub/trainingList#ing" target="_blank">집합연수</a>
                            <a onclick="gtag('event', '${serviceName}', {'event_category': 'link', 'event_label': 'gnb_more_edu_pama', 'send_to': '${gaMeasurementId}'});" href="//coolpama.coolschool.co.kr/" target="_blank">학부모연수</a>
                        </li>
                        <li>
                            <h4>학교마켓</h4>
                            <a onclick="gtag('event', '${serviceName}', {'event_category': 'link', 'event_label': 'gnb_more_market', 'send_to': '${gaMeasurementId}'});" href="//coolmarket.coolschool.co.kr/" target="_blank">교구몰</a>
                            <a onclick="gtag('event', '${serviceName}', {'event_category': 'link', 'event_label': 'gnb_more_market_tmall', 'send_to': '${gaMeasurementId}'});" href="//t-mall.coolschool.co.kr/" target="_blank">복지몰</a>
                            <a onclick="gtag('event', '${serviceName}', {'event_category': 'link', 'event_label': 'gnb_more_market_funding', 'send_to': '${gaMeasurementId}'});" href="//t-fun.coolschool.co.kr/" target="_blank">펀딩</a>
                        </li>
                        <li>
                            <h4>교육이슈</h4>
                            <a onclick="gtag('event', '${serviceName}', {'event_category': 'link', 'event_label': 'gnb_more_news', 'send_to': '${gaMeasurementId}'});" href="//samstory.coolschool.co.kr/zone/story/eduin" target="_blank">교육뉴스</a>
                            <a onclick="gtag('event', '${serviceName}', {'event_category': 'link', 'event_label': 'gnb_more_edutech', 'send_to': '${gaMeasurementId}'});" href="//www.coolschool.co.kr/edutech" target="_blank" style="margin-bottom: 10px;">에듀테크스토리</a>
                            <h4>쿨스쿨소식</h4>
                            <a onclick="gtag('event', '${serviceName}', {'event_category': 'link', 'event_label': 'gnb_more_notice', 'send_to': '${gaMeasurementId}'});" href="//www.coolschool.co.kr/news/index" target="_blank">공지/소식</a>
                            <a onclick="gtag('event', '${serviceName}', {'event_category': 'link', 'event_label': 'gnb_more_contact', 'send_to': '${gaMeasurementId}'});" href="//www.coolschool.co.kr/messenger/technicalSupport" target="_blank">문의하기</a>
                            <a onclick="gtag('event', '${serviceName}', {'event_category': 'link', 'event_label': 'gnb_more_profile', 'send_to': '${gaMeasurementId}'});" href="//www.coolschool.co.kr/profile/search" target="_blank" style="margin-bottom: 22px">선생님찾기</a>
                        </li>
                    </ul>
                    <div>
                        <a onclick="gtag('event', '${serviceName}', {'event_category': 'link', 'event_label': 'gnb_more_all_service', 'send_to': '${gaMeasurementId}'});" href="//coolschool.co.kr/allService" target="_blank">서비스 전체보기</a>
                        <span class="dropdown-close">닫기</span>
                    </div>
                </div>
                <span class="coolris-more-btn">
                    더보기
                </span>
            </div>
        `
    }

    // 포인트 템플릿
    getPointTemplate(serviceName: string, gaMeasurementId: string) {
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
                <a onclick="gtag('event', '${serviceName}', {'event_category': 'link', 'event_label': 'gnb_point', 'send_to': '${gaMeasurementId}'});" href="//point.coolschool.co.kr" target="_blank">
                    <img src="//update.coolmessenger.com/_ImageServer/coolschool/commonTop/point.png" alt="img" />
                    <span data-name="spanPoint"></span>
                </a>
            </div>
        `
    }

    // 로그인 전 템플릿
    getBeforeLoginTemplate() {
        return `
            <style>
                div[coolrisBeforLogin] {
                    /*margin-top: -3px;*/
                }
                div[coolrisBeforLogin] a {
                    font-size: 13px;
                    color: #000000;
                    cursor: pointer;
                    line-height: 25px;
                    display: inline-block;
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

    // 탑배너 템플릿
    getTopBannerTemplate(serviceName: string, gaMeasurementId: string) {
        return `
            <style>
                /*===== topBanner =====*/
                div[coolrisTopBanner] {
                    background-color:#24d1ab;
                    /*display:none;*/
                    text-align:center;
                    font-family: NanumSquareRound, sans-serif;
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
                        <a onclick="gtag('event', '${serviceName}', {'event_category': 'link', 'event_label': 'main_banner_top', 'send_to': '${gaMeasurementId}'});" href="{{=it.coolTopBannerItems[idx].landingUrl}}" target="_blank">
                            <!--suppress CssInvalidPropertyValue -->
                            <div class="topbanner-item" style="background-color: {{=it.coolTopBannerItems[idx].backgroundColor}}">
                                <div class="inner">
                                    <img src="{{=it.coolTopBannerItems[idx].imageUrl}}" alt="img" />
                                </div>
                            </div>
                        </a>
                        {{ } }}
                    </div>
                </div>
            </div>
        `
    }

    // 알람 템플릿
    getAlarmTemplate(serviceName: string, gaMeasurementId: string) {
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
                        <li onclick="gtag('event', '${serviceName}', {'event_category': 'link', 'event_label': 'gnb_alarm_item', 'send_to': '${gaMeasurementId}'});">
                            <a href="{{=it.coolAlarmItems[idx].url}}" target="_blank">
                                <p>{{=it.coolAlarmItems[idx].message}}</p>
                                <span>{{=it.toDateYmdFormat(new Date(it.coolAlarmItems[idx].createdDate))}}</span>
                            </a>
                        </li>
                    {{ } }}
                    </ul>
                        <a onclick="gtag('event', '${serviceName}', {'event_category': 'link', 'event_label': 'all_alarm', 'send_to': '${gaMeasurementId}'});" href="/notification/index" target="_blank">알림 모두 보기</a>
                    </div>
                </div>
            </div>
        `
    }

    // footer 템플릿
    getFooterTemplate(footerTemplate: FooterTemplate) {
        return `
            <style>
                @font-face {
                    font-family: 'NanumGothic';
                    src: url("//resource.coolmessenger.com/coolschool/resources/fonts/nanumgothic/NanumGothic.woff2") format('woff2'),
                    url("//resource.coolmessenger.com/coolschool/resources/fonts/nanumgothic/NanumGothic.woff") format('woff'),
                    url("//resource.coolmessenger.com/coolschool/resources/fonts/nanumgothic/NanumGothic.eot") format('opentype');
                }
                .coolris-footer[coolrisFooter] {
                    border-top: 1px solid #dedede;
                    background-color: #ffffff;
                }
                .coolris-footer[coolrisFooter] * {
                    font-family: "NanumGothic","Dotum", sans-serif;
                    box-sizing: border-box;
                }
                .coolris-footer[coolrisFooter] .inner {
                    width: 1110px;
                    margin: 0 auto;
                    position: relative;
                    padding-top: 30px;
                    padding-bottom: 30px;
                }
                @media screen and (max-width: 1150px) {
                    .coolris-footer[coolrisFooter] .inner {
                        width: 100%;
                    }
                }
                .coolris-footer[coolrisFooter] .intro {
                    color: #bbbbbb;
                    font-size: 14px;
                    line-height: 24px;
                    margin-top: 17px;
                }
                .coolris-footer[coolrisFooter] .intro:after {
                    content: '';
                    display: block;
                    clear: both;
                }
            </style>
            <div class="coolris-footer" coolrisFooter>
                ${footerTemplate.quickMenu}
                <div class="inner">
                    ${footerTemplate.bi}
                    <div class="intro">
                        ${footerTemplate.link}
                    </div>
                    ${footerTemplate.info}
                </div>
            </div>
        `
    }

    /**
     *  footer BI
     */
    getBiTemplate(serviceName: string, gaMeasurementId: string) {
        return `
            <style>
                a[coolrisBi] {}
                a[coolrisBi] img {
                    width: 170px;
                    height: 45px;
                }
                @media screen and (max-width: 1150px) {
                    a[coolrisBi] {
                        width: 170px;
                        margin: 0 auto;
                        display: block;
                    }   
                }
            </style>
            <a coolrisBi onclick="gtag('event', '${serviceName}', {'event_category': 'link', 'event_label': 'footer_bi', 'send_to': '${gaMeasurementId}'});" href="//coolschool.co.kr" target="_blank">
                <img src="//update.coolmessenger.com/_ImageServer/coolschool/bi_coolschool_en.png" alt="image">
            </a>
        `
    }

    /**
     *  퀵메뉴 (위로가기, 아래로가기 버튼)
     */
    getQuickMenuTemplate() {
        return `
            <style>
                div[coolrisQuickMenu] {
                    position: fixed;
                    right: -45px;
                    bottom: 307px;
                    -webkit-transition: right 0.4s;
                    -moz-transition: right 0.4s;
                    -o-transition: right 0.4s;
                    transition: right 0.4s;
                    z-index: 1000;
                }
                div[coolrisQuickMenu].on {
                    right: 22px;
                }
                div[coolrisQuickMenu] span {
                    line-height: 20px;
                    font-size: 12px;
                    color: #adadad;
                    display: block;
                    border: 1px solid #9c9c9c;
                    cursor: pointer;
                    -webkit-border-radius: 3px;
                    -moz-border-radius: 3px;
                    border-radius: 3px;
                    background-image: url(//update.coolmessenger.com/_ImageServer/coolschool/2020/05/renew/arrow_quick.png);
                    background-repeat: no-repeat;
                    background-size: auto;
                    background-width: 100%;
                    background-height: auto;
                    background-position: center center;
                    width: 36px;
                    height: 36px;
                    background-color: #fff;
                }
                div[coolrisQuickMenu] .ico-bottom {
                    border-bottom: 0;
                       transform: rotate(180deg);
                }
            </style>
            <div coolrisQuickMenu>
                <span class="ico-top"></span>
                <span class="ico-bottom"></span>
            </div>
        `
    }

    /**
     *  링크 메뉴
     */
    getLinkTemplate(serviceName: string, gaMeasurementId: string) {
        return `
            <style>
                div[coolrisLink] {
                    display: inline-block;
                }
                div[coolrisLink] a {
                    margin-right: 35px;
                    position: relative;
                    color: #373737;
                    font-size: 14px;
                    line-height: 24px;
                    text-decoration: none;
                    cursor: pointer;
                }
                div[coolrisLink] a:hover {
                    text-decoration: underline;
                }
                div[coolrisLink] a:after {
                    content: '';
                    display: block;
                    width: 1px;
                    height: 13px;
                    background-color: #bbbbbb;
                    position: absolute;
                    right: -22px;
                    top: 0;
                }
                div[coolrisLink] a:last-child {
                    margin-right: 0;
                }
                div[coolrisLink] a:last-child:after {
                    display: none;
                }
                @media screen and (max-width: 980px) {
                    div[coolrisLink] a {
                        width: 50%;
                        display: block;
                        float: left;
                        margin-right: 0;
                        margin-bottom: 10px;
                        text-align: center;
                    }
                    div[coolrisLink] a:after {
                        display: none;
                    }
                    div[coolrisLink] {
                        display: block;
                    }
                }
            </style>
            <div coolrisLink>
                <a onclick="gtag('event', '${serviceName}', {'event_category': 'link', 'event_label': 'contactus', 'send_to': '${gaMeasurementId}'});"
                href="//www.coolschool.co.kr/together" target="_blank">광고·제휴·입점문의</a>
                <a onClick="gtag('event', '${serviceName}', {'event_category': 'link', 'event_label': 'terms_of_service_policy', 'send_to': '${gaMeasurementId}'});
                window.open('http://www.coolschool.co.kr/contract/term?type=html', 'coolschool_terms_of_service', 'width=500,height=350');" class="pointer">이용약관</a>
                <a onClick="gtag('event', '${serviceName}', {'event_category': 'link', 'event_label': 'privacy_policy', 'send_to': '${gaMeasurementId}'});
                window.open('http://www.coolschool.co.kr/contract/privacy?type=html', 'coolschool_privacy', 'width=500,height=350');" class="pointer">개인정보처리방침</a>
            </div>
        `
    }

    /**
     * 패밀리 사이트
     */
    getFamilySiteTemplate() {
        return `
            <style>
                span[coolrisFamilysite] {
                    display: block;
                    width: 182px;
                    background-color: #ffffff;
                    position: relative;
                    float: right;
                    top: -4px;
                }
                span[coolrisFamilysite] .coolris-familysite-btn {
                    font-size: 12px;
                    color: #343434;
                    width: 100%;
                    line-height: 30px;
                    height: 30px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    border: 1px solid #d6d6d6;
                    padding: 0 10px;
                    cursor: pointer;
                }
                span[coolrisFamilysite] .coolris-familysite-dropdown {
                    display: none;
                    background-color: #ffffff;
                    width: 100%;
                    padding: 10px 0;
                    border: 1px solid #d6d6d6;
                    border-bottom: 0;
                    position: absolute;
                    left: 0;
                    bottom: 30px;
                }
                span[coolrisFamilysite] .coolris-familysite-dropdown.show {
                    display: block;
                }
                span[coolrisFamilysite] .coolris-familysite-dropdown a {
                    padding: 0 10px;
                    display: block;
                    width: 100%;
                    font-size: 12px;
                    line-height: 28px;
                    height: 28px;
                    color: #373737;
                    text-decoration: none;
                }
                span[coolrisFamilysite] .coolris-familysite-dropdown a:hover {
                    background-color: rgba(100, 100, 100, 0.1);
                }
            </style>
            <span class="family-site" coolrisFamilysite>
                <span class="coolris-familysite-btn">
                    지란지교패밀리사이트
                    <img class="coolris-familysite-arrow" src="//update.coolmessenger.com/_ImageServer/coolschool/2020/05/renew/arrow_failysite.png" alt="img">
                </span>
                <span class="coolris-familysite-dropdown">
                    <a href="//jirancomms.com/" target="_blank">지란지교컴즈</a>
                    <a href="//www.jiransoft.co.kr/" target="_blank">지란지교소프트</a>
                    <a href="//www.jirandata.co.kr/" target="_blank">지란지교데이터</a>
                    <a href="//www.jiransecurity.com/" target="_blank">지란지교시큐리티</a>
                    <a href="//jiransnc.com/" target="_blank">지란지교에스앤씨</a>
                    <a href="//global.jiran.com/jp" target="_blank">JIRANSOFT JAPAN</a>
                    <a href="//www.jiran.com/" target="_blank">지란지교</a>
                </span>
            </span>
        `
    }

    /**
     *  사이트 정보
     */
    getInfoTemplate(serviceName?: string, gaMeasurementId?: string) {
        return `
            <style>
                section[coolrisInfo] {
                    
                }
                section[coolrisInfo] * {
                    font-size: 13px;
                    color: #858585;
                    line-height: 24px;
                    font-family: "Dotum", sans-serif;
                    margin: 0;
                    padding: 0;
                }
                section[coolrisInfo] a {
                    text-decoration: none;
                }
                section[coolrisInfo] p:first-child {
                    margin-top: 20px;
                }
                section[coolrisInfo] p:nth-child(2) {
                    margin-bottom: 10px;
                    margin-top: 4px;
                }
                section[coolrisInfo] p.patent {
                    line-height: 19px;
                    font-size: 12px;
                    margin-bottom: 15px;
                }
                section[coolrisInfo] p.emphasis {
                    color: #ff4d66;
                    font-weight: bold;
                }
            </style>
            <section coolrisInfo>
                <p>
                    ㈜쿨스쿨 ㅣ 대표: 오진연 ㅣ 서울특별시 강남구 역삼로 92길 7, 3층 ㅣ 사업자번호 : 314-86-66749 ㅣ통신판매업신고 : 제2020-서울강남-03761호
                </p>
                <br/>
                <p>
                    쿨스쿨 대표번호 <a href="tel:1600-1354">1600-1354</a> ㅣ <a href="mailto:cs@coolschool.co.kr">cs@coolschool.co.kr</a>  ㅣ 평일 9-17시 ㅣ 점심시간 12-13시 ㅣ 주말/공휴일 제외
                </p>
                <p class="emphasis">
                    ※ 쿨메신저/쿨알리미 문의 02-6325-6300
                </p>
                <br/>
                <p class="patent">
                    <img src="//update.coolmessenger.com/_ImageServer/samstory/images/sun.png" alt="image" />특허출원번호 10-2019-0071409 개인 콘텐츠 제공방법 및 장치<br/>
                    <img src="//update.coolmessenger.com/_ImageServer/samstory/images/sun.png" alt="image" />특허출원번호 10-2019-0071076 개인 프로필 정보 제공방법 및 장치<br/>
                </p>
                <p>
                    Copyrightⓒ  2020 ㈜쿨스쿨 ALL RIGHTS RESERVED
                </p>
            </section>
        `
    }
}
