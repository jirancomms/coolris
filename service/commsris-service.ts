import {RisService} from "./ris-service";
import {constants, FooterTemplate} from '../coolris-common';

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
                    <a href="${constants.siteUrl.coolmessengerUrl}" target="_blank">쿨메신저</a>
                </li>                
                <li onclick="gtag('event', '${serviceName}', {'event_category': 'link', 'event_label': 'gnb_sms', 'send_to': '${gaMeasurementId}'});">
                    <a href="${constants.siteUrl.coolsmsUrl}" target="_blank">문자</a>
                </li>
                <li onclick="gtag('event', '${serviceName}', {'event_category': 'link', 'event_label': 'gnb_coolAlimTalk', 'send_to': '${gaMeasurementId}'});">
                    <a href="${constants.siteUrl.coolalimTalkUrl}" target="_blank">쿨알림톡</a>
                </li>
                <li onclick="gtag('event', '${serviceName}', {'event_category': 'link', 'event_label': 'gnb_coolendar', 'send_to': '${gaMeasurementId}'});">
                    <a href="${constants.siteUrl.coolendarUrl}" target="_blank">학사일정</a>
                </li>
                <li onclick="gtag('event', '${serviceName}', {'event_category': 'link', 'event_label': 'gnb_coolpass', 'send_to': '${gaMeasurementId}'});">
                    <a href="${constants.siteUrl.coolpassUrl}" target="_blank">학교방문예약</a>
                </li>
                <li onclick="gtag('event', '${serviceName}', {'event_category': 'link', 'event_label': 'gnb_cooldiary', 'send_to': '${gaMeasurementId}'});">
                    <a href="${constants.siteUrl.cooldiaryUrl}" target="_blank">학급일지</a>
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
                @media screen and (max-width: 980px) {
                .coolris-footer[coolrisFooter] .inner{padding-top: 20px;}
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
                @media screen and (max-width: 980px) {
                    a[coolrisBi] {
                        display: none;
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
                div[coolrisLink] .web {
                        display: block;
                    }
                div[coolrisLink] .mobile {
                        display: none;
                    }
                @media screen and (max-width: 980px) {
                div[coolrisLink] .web {
                        display: none;
                    }
                div[coolrisLink] .mobile {
                        display: inline-flex;
                    }
                    div[coolrisLink] a, div[coolrisLink] span {
                        margin: 0 10px;
                        text-align: center;
                        border: 1px solid #d1d1d1;
                        min-height: 40px;
                        display: inline-flex;
                        align-items: center;
                        font-size: 13px;
                        color: #797979;
                        padding: 0 24px;
                    }
                    div[coolrisLink] a:after {
                        display: none;
                    }
                    div[coolrisLink] {
                        display: flex;
                        justify-content: center;
                        padding-bottom: 15px;
                    }
                }
            </style>
            <div coolrisLink>
                <div class="web">
                    <a onclick="gtag('event', '${serviceName}', {'event_category': 'link', 'event_label': 'contactus', 'send_to': '${gaMeasurementId}'});" id="marketing" href="https://ad.coolmessenger.com" target="_blank">광고문의</a>
                    <a onclick="gtag('event', '${serviceName}', {'event_category': 'link', 'event_label': 'support', 'send_to': '${gaMeasurementId}'});" id="support">기술문의</a>
                    <a onclick="gtag('event', '${serviceName}', {'event_category': 'link', 'event_label': 'withyou', 'send_to': '${gaMeasurementId}'});" href="https://withyou.jiran.com" target="_blank">윤리경영</a>
                    {{?it && it.footerLink}}
                        {{~it.footerLink :item:index}}
                          {{?item.aTag}}
                            <a onclick="gtag('event', '${serviceName}', {'event_category': 'link', 'event_label': '{{=item.aTag.eventLabel}}', 'send_to': '${gaMeasurementId}'});"
                                {{?item.aTag.href}} href="{{=item.aTag.href}}" {{?}}
                                {{?item.aTag.target}} target="{{=item.aTag.target}} {{?}}">
                                {{=item.aTag.content}}
                            </a>
                          {{?}}
                       {{~}}
                    {{?}}
                </div>
                <div class="mobile">
                    <span style="cursor: pointer;" onClick="gtag('event', '${serviceName}', {'event_category': 'link', 'event_label': 'privacy_policy', 'send_to': '${gaMeasurementId}'});
                        window.open('//member.coolmessenger.com/contract/privacy?type=html', 'coolschool_privacy', 'width=500,height=350');">개인정보처리방침</span>
                    <span style="cursor: pointer;" onClick="gtag('event', '${serviceName}', {'event_category': 'link', 'event_label': 'terms_of_service_policy', 'send_to': '${gaMeasurementId}'});
                        window.open('//member.coolmessenger.com/contract/term?type=html', 'terms_of_service_policy', 'width=500,height=350');">이용약관</span> 
                </div>
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
                section[coolrisInfo] p > span:not(.mobile-span):after {
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
                section[coolrisInfo] .web {
                        display: block;
                    }
                section[coolrisInfo] .mobile {
                        display: none;
                    }
                    section[coolrisInfo] .link-box img {
                        width: 51px;
                        height: 51px;
                    }
                @media screen and (max-width: 980px) {
                    section[coolrisInfo] {padding: 0 20px;}
                    section[coolrisInfo] .web {
                        display: none;
                    }
                    section[coolrisInfo] .mobile {
                        display: flex !important;
                        justify-content: center;
                        flex-direction: column;
                        align-items: center;
                        word-break: break-all;
                    }
                    section[coolrisInfo] .mobile .link-box {
                        margin: 27px 0 10px 0;
                        float: none;
                        padding: 0;
                    }
                    section[coolrisInfo] .mobile .text {
                        display: flex;
                        justify-content: flex-start;
                        flex-direction: column;
                    }
                    section[coolrisInfo] .mobile .text a {
                        text-decoration: none;
                    }
                    section[coolrisInfo] .mobile .text span {
                        word-break: break-all;
                    }
                }
            </style>
            <section coolrisInfo>
                <div class="web">
                    <div class="link-box">
                        <a href="https://blog.naver.com/jirancomms" target="_blank">
                            <img src="//update.coolmessenger.com/_ImageServer/coolris/ico_blog_big.png" alt="img" />
                        </a>               
                        <a href="https://www.youtube.com/channel/UCOQfhiS4GRhFuHWY-MEZD_Q/featured" target="_blank">
                            <img src="//update.coolmessenger.com/_ImageServer/coolris/ico_youtube_big.png" alt="img" />
                        </a>
                        {{?it && it.footerInfo}}
                            {{?it.footerInfo.showCleanspam}}
                                <img src="https://yeorcqadlpopsmgaoudu.supabase.co/storage/v1/object/public/certification/mark/6dd905f1-eda8-4687-910a-0caeed573863/c66f548d-aab6-4ed5-8d9f-353cabb99dfb-2024-10-23T07:11:03.527Z" style="cursor: pointer; width: 52px; height: 52px; margin-left: 5px;" onclick="(function(){window.open('https://cleanspam.or.kr/ci/85','_blank','width=800, height=1151, toolbar=no, menubar=no, scrollbars=no, resizable=no')})()" />
                            {{?}}
                        {{?}}
                    </div>
                    <p><span>대표자 : 안대근</span><span>사업자등록번호 : 764-87-00314</span><span>통신판매업 신고번호 : 제2023-성남수정-0685호</span></p>
                    <p><span>(13453) 경기도 성남시 수정구 금토로80번길 37, 인피니티타워 W동 3층</span><span>대표전화 : <a href="tel:1670-4846">1670-4846</a></span><span>팩스 : 070-7605-2935</span></p>
                    <p><span>개인정보관리책임자 : 박노준</span>
                    <span style="cursor: pointer;" onClick="gtag('event', '${serviceName}', {'event_category': 'link', 'event_label': 'privacy_policy', 'send_to': '${gaMeasurementId}'});
                    window.open('//member.coolmessenger.com/contract/privacy?type=html', 'coolschool_privacy', 'width=500,height=350');">개인정보처리방침</span>
                    <span style="cursor: pointer;" onClick="gtag('event', '${serviceName}', {'event_category': 'link', 'event_label': 'terms_of_service_policy', 'send_to': '${gaMeasurementId}'});
                    window.open('//member.coolmessenger.com/contract/term?type=html', 'terms_of_service_policy', 'width=500,height=350');">이용약관</span></p>
                     <p class="web"><span>© JiranComms. All rights reserved.</span></p>
                 </div>
                
                <div class="mobile">
                    <div class="text">
                        <p>
                            <span>(주) 지란지교컴즈</span>
                            <span class="mobile-span">대표자 : 안대근</span>
                        </p>
                        <p><span class="mobile-span">사업자등록번호 : 764-87-00314</span></p>
                        <p><span class="mobile-span">통신판매업 신고번호 : 제2023-성남수정-0685호</span></p>
                        <p><span class="mobile-span">경기도 성남시 수정구 금토로 80번길 37, 인피니티타워 W동 3층</span></p>
                        <p><span>대표전화 : <a href="tel:1670-4846">1670-4846</a></span><span class="mobile-span">팩스 : 070-7605-2935</span></p>
                        <p><span>개인정보관리책임자 : 박노준</span></p>
                    </div>
                    <div class="link-box">
                        <a href="https://blog.naver.com/jirancomms" target="_blank">
                            <img src="//update.coolmessenger.com/_ImageServer/coolris/ico_blog_big.png" alt="img" />
                        </a>               
                        <a href="https://www.youtube.com/channel/UCOQfhiS4GRhFuHWY-MEZD_Q/featured" target="_blank">
                            <img src="//update.coolmessenger.com/_ImageServer/coolris/ico_youtube_big.png" alt="img" />
                        </a>            
                    </div>
                    <p><span>© JiranComms. All rights reserved.</span></p>
                </div>
            </section>
        `
    }
}
