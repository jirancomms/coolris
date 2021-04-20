import {constants} from "../coolris-common";
import {RisService} from "./ris-service";

export class CoolrisService extends RisService {
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
                    padding: 20px;
                    min-width: 330px;
                    border: 1px solid #9b9b9b;
                    border-radius: .25rem;
                    position: absolute;
                    top: 33px;
                    right: 0;
                    z-index: 9999;
                }
                div[coolrisProfile] .coolris-profile-dropdown:after {
                    content: '';
                    display: block;
                    clear: both;
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
                div[coolrisProfile] .coolris-profile-dropdown a img {
                   margin-top: -3px;
                   vertical-align: middle;
                }
                div[coolrisProfile] .coolris-profile-dropdown .logout {
                    height: 30px;
                    line-height: 30px;
                    font-size: 13px;
                    color: #6f6f6f;
                    background-color: #ffffff;
                    display: inline-block;
                    border: 1px solid #dedede;
                    text-align: center;
                    margin-top: 7px;
                    cursor: pointer;
                    width: auto;
                    padding: 0 16px;
                }
                div[coolrisProfile] .coolris-profile-dropdown > div {
                    display: block;
                    float: left;
                }
                div[coolrisProfile] .coolris-profile-dropdown .user-avator {
                    width: 70px;
                    height: 70px;
                }
                div[coolrisProfile] .coolris-profile-dropdown .user-avator .profile-img {
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                    border: 1px solid #d1d1d1;
                }
                div[coolrisProfile] .coolris-profile-dropdown .user-info {
                    width: calc(100% - 80px);
                    padding-left: 18px;
                }
                div[coolrisProfile] .coolris-profile-dropdown .user-info .user-name {
                    font-size: 14px;
                    display: flex;
                    flex-wrap: wrap;
                    line-height: 20px;
                    color: #000000;
                    margin-bottom: 2px;
                }
                div[coolrisProfile] .coolris-profile-dropdown .user-info .user-name .profile-name {
                    color: #00a1e4;
                    font-size: 14px;
                    font-weight: normal;
                }
                div[coolrisProfile] .coolris-profile-dropdown .user-info .user-name .user-id {
                    font-size: 12px;
                    color: #939393;
                    margin-left: 4px;
                }
                div[coolrisProfile] .coolris-profile-dropdown .user-info p span {
                    text-align: left;
                    font-size: 12px;
                    color: #484848;
                }
                div[coolrisProfile] .coolris-profile-dropdown .user-info p {
                    margin-bottom: 0;
                    line-height: 24px;
                }
                div[coolrisProfile] .coolris-profile-dropdown {
                
                }
                div[coolrisProfile] .coolris-profile-dropdown .user-info .user-point,
                div[coolrisProfile] .coolris-profile-dropdown .user-info .user-coolmova {
                    display: inline-block;
                    width: 88px;
                }
                div[coolrisProfile] .coolris-profile-dropdown .user-info .user-personal-info .coolmova-btn {
                    font-weight: bold;
                    display: none;
                    text-align: left;
                    font-size: 12px;
                    color: #484848;
                    text-decoration: underline;
                }
                div[coolrisProfile] .coolris-profile-dropdown .user-info .user-point + a {
                    color: #00a1e4;
                }
                div[coolrisProfile] .coolris-profile-dropdown .user-info .user-edit {
                    overflow: hidden;
                }
                div[coolrisProfile] .coolris-profile-dropdown .user-info .user-edit a {
                    font-size: 12px;
                    color: #484848;
                    position: relative;
                    margin-right: 24px;
                    float: left;
                }
                div[coolrisProfile] .coolris-profile-dropdown .user-info .user-edit a:last-child {
                    margin-right: 0;
                }
                div[coolrisProfile] .coolris-profile-dropdown .user-info .user-edit a:after {
                    content: '';
                    display: block;
                    height: 10px;
                    width: 1px;
                    background-color: #c7c7c7;
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    right: -13px;
                }
                div[coolrisProfile] .coolris-profile-dropdown .user-info .user-edit a:last-child:after {
                    display: none;
                }
            </style>
            <div coolrisProfile>
                <div class="coolris-profile-dropdown">
                    <img
                    class="dropdown-tail"
                    src="//update.coolmessenger.com/_ImageServer/coolschool/resources/images/dropbox_tail.png"
                    alt="img" />
                    <div class="user-avator">
                        <img
                        class="profile-img"
                        data-name="imgProfileImg"
                        src="//update.coolmessenger.com/_ImageServer/coolschool/resources/images/default_profile.png"
                        onerror="this.src='//update.coolmessenger.com/_ImageServer/coolschool/resources/images/default_profile.png'"
                        alt="img" />
                    </div>
                    <div class="user-info">
                        <h3 class="user-name">
                            <span class="profile-name" data-name="spanProfileName"></span>님
                            <span class="user-id" data-name="spanUserId"></span>
                        </h3>
                        <div class="user-personal-info">
                            <p>
                                <span class="user-point">쿨포인트</span>
                                <a
                                onclick="gtag('event', '${serviceName}', {'event_category': 'link', 'event_label': 'gnb_point', 'send_to': '${gaMeasurementId}'});"
                                href="//point.coolschool.co.kr"
                                target="_blank"
                                data-name="spanPoint"></a>
                            </p>
                            <p>
                                <span class="user-coolmova">내 안심번호</span>
                                <a
                                onclick="gtag('event', '${serviceName}', {'event_category': 'link', 'event_label': 'gnb_safeNumber', 'send_to': '${gaMeasurementId}'});"
                                href="${constants.memberUrl}/my/#/safeNumber"
                                target="_blank"
                                class="coolmovaBtn"
                                data-name="spanCoolmova"></a>
                                <a class="coolmova-btn"
                                onclick="gtag('event', '${serviceName}', {'event_category': 'link', 'event_label': 'gnb_safeNumber', 'send_to': '${gaMeasurementId}'});"
                                href="${constants.memberUrl}/my/#/safeNumber"
                                target="_blank"
                                class="coolmovaBtn">신청</a>
                            </p>
                        </div>
                        <div class="user-edit">
                            <a
                            onclick="gtag('event', '${serviceName}', {'event_category': 'link', 'event_label': 'gnb_myinfo', 'send_to': '${gaMeasurementId}'});"
                            href="${constants.memberUrl}/my/#/"
                            data-name="myInfo">
                            회원정보 수정
                            </a>
                            <a
                            onclick="gtag('event', '${serviceName}', {'event_category': 'link', 'event_label': 'gnb_profile_edit', 'send_to': '${gaMeasurementId}'});"
                            href="${constants.memberUrl}/my/#/myDefaultsProfile">
                            검색프로필 설정
                            </a>
                        </div>
                        <span class="logout dropdown-close" data-name="spanLogout">로그아웃</span>
                    </div>
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

    /**
     *  숫자 원처리 (, 콤마 붙텨주기)
     * @param num 숫자
     * @protected
     */
    protected addComma(num: any) {
        const regexp = /\B(?=(\d{3})+(?!\d))/g;
        return num.toString().replace(regexp, ',');
    }
}
