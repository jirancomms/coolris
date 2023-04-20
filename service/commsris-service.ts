import {RisService} from "./ris-service";
import {FooterTemplate} from "../coolris-common";

export class CommsrisService extends RisService {

    getGnbMenuTemplate(serviceName: string, gaMeasurementId: string): string {
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
                ul[coolrisGnbMenu] li:last-child {
                    margin-right: 0;
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
                ul[coolrisGnbMenu] li:last-child:after {
                    display: none;
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
                <li onclick="gtag('event', '${serviceName}', {'event_category': 'link', 'event_label': 'gnb_coolmsg', 'send_to': '${gaMeasurementId}'});">
                    <a href="//school.coolmessenger.com/" target="_blank">쿨메신저</a>
                </li>
                <li onclick="gtag('event', '${serviceName}', {'event_category': 'link', 'event_label': 'gnb_coolAlimi', 'send_to': '${gaMeasurementId}'});">
                    <a href="https://www.coolalimi.com/" target="_blank">쿨알리미</a>
                </li>
                <li onclick="gtag('event', '${serviceName}', {'event_category': 'link', 'event_label': 'gnb_sms', 'send_to': '${gaMeasurementId}'});">
                    <a href="//coolsms.coolmessenger.com/" target="_blank">문자</a>
                </li>
                <li onclick="gtag('event', '${serviceName}', {'event_category': 'link', 'event_label': 'gnb_coolAlimTalk', 'send_to': '${gaMeasurementId}'});">
                    <a href="https://www.coolalimi.com/alimtalk" target="_blank">쿨알림톡</a>
                </li>
                <li onclick="gtag('event', '${serviceName}', {'event_category': 'link', 'event_label': 'gnb_coolendar', 'send_to': '${gaMeasurementId}'});">
                    <a href="//coolendar.coolmessenger.com" target="_blank">학사일정</a>
                </li>                
            </ul>
        `
    }

    getMoreTemplate(serviceName: string, gaMeasurementId: string): string {
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
                    left: 0;
                    top: 33px;
                    z-index: 9999;
                    transform: translateX(-50%);
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
                            <a onclick="gtag('event', '${serviceName}', {'event_category': 'link', 'event_label': 'gnb_more_coolendar', 'send_to': '${gaMeasurementId}'});" href="//coolendar.coolmessenger.com" target="_blank">학사일정</a>
                            <a onclick="gtag('event', '${serviceName}', {'event_category': 'link', 'event_label': 'gnb_more_banner', 'send_to': '${gaMeasurementId}'});" href="//school.coolbooks.co.kr/" target="_blank">학교간행물</a>
                            <a onclick="gtag('event', '${serviceName}', {'event_category': 'link', 'event_label': 'gnb_more_schoolp', 'send_to': '${gaMeasurementId}'});" href="//schoolp.co.kr/store/placard" target="_blank">현수막/배너</a>
                        </li>
                        <li>
                            <h4>교사생활</h4>
                            <a onclick="gtag('event', '${serviceName}', {'event_category': 'link', 'event_label': 'gnb_more_samstory', 'send_to': '${gaMeasurementId}'});" href="//samstory.coolschool.co.kr/" target="_blank">블로그</a>
                            <a onclick="gtag('event', '${serviceName}', {'event_category': 'link', 'event_label': 'gnb_more_books', 'send_to': '${gaMeasurementId}'});" href="//coolbooks.coolschool.co.kr/" target="_blank">책</a>
                            <a onclick="gtag('event', '${serviceName}', {'event_category': 'link', 'event_label': 'gnb_more_edu_meeting', 'send_to': '${gaMeasurementId}'});" href="//cooledu.coolschool.co.kr/cooledulub/trainingList#ing" target="_blank">모임</a>
                            <a onclick="gtag('event', '${serviceName}', {'event_category': 'link', 'event_label': 'gnb_more_mova', 'send_to': '${gaMeasurementId}'});" href="//coolmova.coolschool.co.kr/" target="_blank">안심번호</a>
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

    // footer 템플릿
    getFooteremplate(footerTemplate: FooterTemplate) {
        return `
            <style>
                .coolris-footer[coolrisFooter] {
                    border-top: 1px solid #dedede;
                    background-color: #ffffff;
                }
                .coolris-footer[coolrisFooter] * {
                    font-family: "Dotum", sans-serif;
                    box-sizing: border-box;
                }
                .coolris-footer[coolrisFooter] .inner {
                    width: 1110px;
                    margin: 0 auto;
                    position: relative;
                    padding-top: 30px;
                    padding-bottom: 30px;
                }
                .coolris-footer[coolrisFooter] .inner:after {
                    content: '';
                    display: block;
                    clear: both;
                }
                .coolris-footer[coolrisFooter] .inner .left {
                    float: left;
                    width: 277px;
                }
                .coolris-footer[coolrisFooter] .inner .right {
                    width: 833px;
                    float: right;
                }
                @media screen and (max-width: 1150px) {
                    .coolris-footer[coolrisFooter] .inner {
                        width: 100%;
                    }
                    .coolris-footer[coolrisFooter] .inner .left {
                        width: 30%
                    }
                    .coolris-footer[coolrisFooter] .inner .right {
                        width: 70%
                    }
                }
                @media screen and (max-width: 770px) {
                    .coolris-footer[coolrisFooter] .inner .left {
                        width: 100%
                    }
                    .coolris-footer[coolrisFooter] .inner .right {
                        width: 100%
                    }
                }
                .coolris-footer[coolrisFooter] .intro {
                    color: #bbbbbb;
                    font-size: 14px;
                    line-height: 24px;
                    margin-bottom: 10px;
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
                    <div class="left">
                        ${footerTemplate.bi}
                    </div>
                    <div class="right">
                        <div class="intro">
                            ${footerTemplate.link}
                            ${footerTemplate.familySite}
                        </div>
                        ${footerTemplate.info}
                    </div>
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
                @media screen and (max-width: 1150px) {
                    a[coolrisBi] {
                        display: block;
                        margin: 0 auto 30px;
                        width: 170px;
                    }
                }
            </style>
            <a coolrisBi onclick="gtag('event', '${serviceName}', {'event_category': 'link', 'event_label': 'footer_bi', 'send_to': '${gaMeasurementId}'});" href="//www.jirancomms.com/" target="_blank">
                <img src="//update.coolmessenger.com/_ImageServer/samgular/bi-jirancomms.png" alt="image">
            </a>
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
                <a onclick="gtag('event', '${serviceName}', {'event_category': 'link', 'event_label': 'contactus', 'send_to': '${gaMeasurementId}'});" href="mailto:jc-sale@jiran.com" target="_blank">광고문의</a>
                <a onclick="gtag('event', '${serviceName}', {'event_category': 'link', 'event_label': 'support', 'send_to': '${gaMeasurementId}'});" href="https://school.coolmessenger.com/support/question#qna" target="_blank">기술문의</a>
            </div>
        `
    }

    /**
     *  사이트 정보
     */
    getInfoTemplate(serviceName: string, gaMeasurementId: string) {
        return `
            <style>
                section[coolrisInfo] {
                    
                }
                section[coolrisInfo] * {
                    font-size: 12px;
                    line-height: 26px;
                    color: #7b7b7b;
                    font-family: "Dotum", sans-serif;
                    margin: 0;
                    padding: 0;
                } 
                section[coolrisInfo] p a, section[coolrisInfo] p span {
                    margin-bottom: 0;
                    position: relative;
                }     
                section[coolrisInfo] p > span {
                    display: inline-block;
                    margin-right: 21px;
                }
                section[coolrisInfo] p > span:after {
                    width: 1px;
                    height: 9px;
                    background-color: #d2d2d2;
                    content: '';
                    display: block;
                    position: absolute;
                    right: -10px;
                    top: 50%;
                    transform: translateY(-50%);
                }
                section[coolrisInfo] p > span:last-child:after {
                    display:  none;
                }
                section[coolrisInfo] p > span:last-child {
                    margin-right: 0;
                }
                section[coolrisInfo] .link-box {
                    float: right;
                    padding-right: 15px;
                    margin-top: -9px;
                    display: flex;
                }
                section[coolrisInfo] .link-box a {
                    text-decoration: none;
                }
                section[coolrisInfo] .link-box a:first-child {
                    margin-right: 5px;
                }
            </style>
            <section coolrisInfo>
                <div class="link-box">
                    <a href="https://blog.naver.com/jirancomms" target="_blank">
                        <img src="//update.coolmessenger.com/_ImageServer/coolris/ico_blog.png" alt="img" />
                    </a>               
                    <a href="https://www.youtube.com/channel/UCOQfhiS4GRhFuHWY-MEZD_Q/featured" target="_blank">
                        <img src="//update.coolmessenger.com/_ImageServer/coolris/ico_youtube.png" alt="img" />
                    </a>            
                </div>
                <p><span>대표자 : 황찬우</span><span>사업자등록번호 : 764-87-00314</span><span>통신판매업 신고번호 : 제2016-서울강남00304호</span></p>
                <p><span>(13453) 경기도 성남시 수정구 금토로80번길 37, 인피니티타워 W동 10층</span><span>대표전화 : <a href="tel:1670-4846">1670-4846</a></span><span>팩스 : 070-7605-2935</span></p>
                <p><span>개인정보관리책임자 : 박노준</span><span style="cursor: pointer;" onClick="gtag('event', '${serviceName}', {'event_category': 'link', 'event_label': 'privacy_policy', 'send_to': '${gaMeasurementId}'});
                window.open('//member.coolmessenger.com/contract/privacy?type=html', 'coolschool_privacy', 'width=500,height=350');">개인정보처리방침</span><span style="cursor: pointer;" onClick="gtag('event', '${serviceName}', {'event_category': 'link', 'event_label': 'terms_of_service_policy', 'send_to': '${gaMeasurementId}'});
                window.open('//member.coolmessenger.com/contract/term?type=html', 'terms_of_service_policy', 'width=500,height=350');">이용약관</span></p>
                <p><span>© JiranComms. All rights reserved.</span></p>
            </section>
        `
    }
}
