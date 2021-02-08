import {constants, CoolrisOpts, CoolTemplate, LogoutOpts} from "./coolris-common";
import {RisbaseCommon} from "./risbase-common";

declare var $: any;
declare var gtag: any;
declare var window: any;

export class Risbase extends RisbaseCommon {

    protected loginInfo = {result: false, data: undefined} as any;

    constructor(
        protected accessToken: string = '',
        serviceName = undefined
    ) {
        super(serviceName);
    }

    /**
     * 쿨리스 해더 생성
     * @param coolrisOpt 쿨리스 옵션
     */
    async start(coolrisOpt: CoolrisOpts | any = undefined) {
        this.setGoogleCode(coolrisOpt); // 구글 ID적용, 구글 코드 함수 적용

        // @ts-ignore
        const gnbOuterTemplateFn = this.doT.template(this.risService.getGnbOuterTemplate());
        $('#coolrisGnb').html(gnbOuterTemplateFn());

        // 탑배너 쿠키가 없다면 탑배너 영역 데이터 로드 및 랜더
        if (!this.getCookie('topbanner')) {
            this.loadSettingTopBanner();
        }

        // interface Cooltemplate에 템플릿 주기
        const coolTemplate = this.getCoolTemplate();

        // 로그인 여부에 따른 처리
        const memberResponse = await this.loginCheck();
        const isLogin = memberResponse.result;

        // dot에 template을 준다.
        // @ts-ignore
        const coolrisTemplateFn = this.doT.template(this.risService.getGnbTemplate(coolTemplate));
        $('[data-name=coolrisGnbArea]').html(coolrisTemplateFn({isLogin: isLogin}));

        // 로그인 드롭다운
        this.dropdownToggle('coolris-profile-btn', 'coolris-profile-dropdown', 'gnb_my');
        this.dropdownOnOff('coolris-profile-dropdown', this.targetProfileCheck);

        // 더보기 드롭다운
        this.dropdownToggle('coolris-more-btn', 'coolris-more-dropdown', 'gnb_more');
        this.dropdownOnOff('coolris-more-dropdown', this.targetMoreCheck);

        // 이벤트
        this.onLoginOutEvents(coolrisOpt);

        // 로그인에 되어 있다면 내 영역 데이터 로드 및 랜더
        if (isLogin && this.accessToken) {
            this.loadSettingMyArea();
        }
    }

    getCoolTemplate(): CoolTemplate {
        return  {
            login: this.risService.getLoginTemplate(this.serviceName, this.gaMeasurementId),
            menu: this.risService.getGnbMenuTemplate(this.serviceName, this.gaMeasurementId),
            more: this.risService.getMoreTemplate(this.serviceName, this.gaMeasurementId),
            point: this.risService.getPointTemplate(this.serviceName, this.gaMeasurementId),
            beforeLogin: this.risService.getBeforeLoginTemplate(),
            topBanner: this.risService.getTopBannerTemplate(this.serviceName, this.gaMeasurementId)
        };
    }

    /**
     *  쿨스쿨 푸터 생성 함수
     */
    footerStart(coolrisOpt: CoolrisOpts | any = undefined) {
        const options: any = this.initOption(coolrisOpt);
        options.gaOpts.gaMeasurementId = options.gaOpts.gaMeasurementId ? options.gaOpts.gaMeasurementId : 'UA-92421532-1';
        this.setGoogleCode(options); // 구글 ID적용, 구글 코드 함수 적용

        // interface footerTemplate에 템플릿 주기
        const footerTemplate = {
            bi: this.risService.getBiTemplate(this.serviceName, this.gaMeasurementId),
            quickMenu: this.risService.getQuickMenuTemplate(),
            link: this.risService.getLinkTemplate(this.serviceName, this.gaMeasurementId),
            info: this.risService.getInfoTemplate()
        };

        // dot에 template을 준다.
        // @ts-ignore
        const coolrisTemplateFn = this.doT.template(this.risService.getFooterTemplate(footerTemplate));
        $('#coolrisFooter').html(coolrisTemplateFn());

        this.eventDropdownAndQuickMenu();
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

    protected async loginCheck() {
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
        switch(this.getHost()) {
            case 't-fun': // t-fun
                param.redirect_uri = 'http://t-fun.coolschool.co.kr/oauth_cool.php';
                param.redirect_uri_next = 'http://t-fun.coolschool.co.kr/happy_member_login.php?mode=logout';
                break;
            case 'coolmarket': // coolmarket
                param.redirect_uri = 'https://coolmarket.coolschool.co.kr/api/coolschool/callbackLogin.asp';
                param.redirect_uri_next = 'https://coolmarket.coolschool.co.kr';
                break;
            case 't-mall': // t-mall
                param.redirect_uri = 'https://t-mall.coolschool.co.kr/api/coolschool/callbackLogin.asp';
                param.redirect_uri_next = 'https://t-mall.coolschool.co.kr/';
                break;
            case 'coolmova': // coolmova
                param.redirect_uri = 'https://coolmova.coolschool.co.kr:443/jiran/api/login';
                break;
        }
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
            url: logoutUrl.replace(':client_id', this.getClientId()),
            type: 'GET',
            contentType: "application/json",
            dataType: "jsonp",
        };
        const settingResponse = await $.ajax(setting);
        if (settingResponse.result === 'success') {
            this.setCookie('accessToken', '', -1 as any);
            this.setCookie('client_id', '', -1 as any);

            this.logoutForOtherSite(); // 외부의 다른 사이트들 로그아웃을 위함

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

    logoutForOtherSite() {
        const clientId = this.getClientId();
        switch(this.getHost()) {
            case 't-fun': // t-fun
                location.href = 'http://t-fun.coolschool.co.kr/happy_member_login.php?mode=logout';
                break;
            case 'coolmarket': // coolmarket
                location.href = 'https://coolmarket.coolschool.co.kr//member/logout.asp';
                break;
            case 't-mall': // t-mall
                break;
            case 'coolmova': // coolmova
                break;
        }
    }

    // 회원가입
    join() {
        const CLIENT_ID = this.getClientId();
        const form = document.createElement('form');                                     // form 엘리멘트 생성
        form.setAttribute('method', 'post');                                   // method 속성 설정
        form.setAttribute('action', constants.memberUrl);       // action 속성 설정
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
    protected onLoginOutEvents(coolrisOpts: CoolrisOpts = undefined) {
        // 로그인
        $("[data-name='aCoolLogin']").click(() => {
            gtag('event', this.serviceName, {'event_category': 'link', 'event_label': 'gnb_login', 'send_to': this.gaMeasurementId});
            this.goCoolLogin();
        });

        // 회원가입
        $("[data-name='aCoolJoin']").click(() => {
            gtag('event', this.serviceName, {'event_category': 'link', 'event_label': 'gnb_join', 'send_to': this.gaMeasurementId});
            this.join();
        });

        // 로그아웃
        let logoutResult;
        $("[data-name='spanLogout']").click(() => {
            gtag('event', this.serviceName, {'event_category': 'link', 'event_label': 'gnb_logout', 'send_to': this.gaMeasurementId});
            if(coolrisOpts && coolrisOpts.logoutOpts) {
                logoutResult = this.logout(coolrisOpts.logoutOpts);
            } else {
                logoutResult = this.logout();
            }
            if(coolrisOpts && coolrisOpts.logoutOpts && coolrisOpts.logoutOpts.callbackLogoutComplete) {
                coolrisOpts.logoutOpts.callbackLogoutComplete(logoutResult);
            }
        });
    }

    getClientId() {
        const host = this.getHost();
        let clientId = (constants as any).clientIds[host];
        if(!clientId && console) {
            console.warn('can`t not find clientId');
        }
        return clientId;
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
        const alarmTemplateFn = this.doT.template(this.risService.getAlarmTemplate(this.serviceName, this.gaMeasurementId));
        $("[data-name='divAlarmArea']").html(alarmTemplateFn({
            coolAlarmItems: coolAlarmItems,
            toDateYmdFormat: this.toDateYmdFormat
        }));

        // 알람 드롭다운 이벤트
        this.dropdownToggle('coolris-alarm-btn', 'coolris-alarm-dropdown', 'gnb_alarm');
        this.dropdownOnOff('coolris-alarm-dropdown', this.targetAlarmCheck);
    }

    /**
     *  탑배너 데이터 로드 및 세팅
     */
    async loadSettingTopBanner() {
        const setting = {
            url: '//samstory.coolschool.co.kr/api/mainViewList?views=topBandBanner',
            type: 'GET'
        };

        const responseData = await $.ajax(setting);
        const response = responseData.data.topBandBannerList;

        if (!response || response.length === 0) {
            return;
        }

        // 배너 기한 체크
        const nowDate = new Date();
        response.bannerData = response.filter((k: any) => {
            if (nowDate >= new Date(k.startDate) && nowDate <= new Date(k.endDate)) {
                return k;
            }
        });

        this.suffle(response.bannerData);
        if (!response.bannerData || response.bannerData.length === 0) {
            return;
        }
        // @ts-ignore
        const topBannerTemplateFn = this.doT.template(this.risService.getTopBannerTemplate(this.serviceName, this.gaMeasurementId));
        $("[data-name='divTopBannerArea']").html(topBannerTemplateFn({
            coolTopBannerItems: response.bannerData,
        }));

        // 탑배너 슬라이드 이벤트
        this.topBannerSlideEvent();
        // 탑배너 닫기 이벤트
        this.topbannerCloseEvent();
    }

    async loginResultPromise() {
        if(this.loginInfo.result) {
            return this.loginInfo;
        } else {
            return this.loginCheck();
        }
    }
}
