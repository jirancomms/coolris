import {CoolrisOpts} from "./coolris-common";
import {Risbase} from "./risbase";

declare var $: any;

declare var ga: any;

export class Commsris extends Risbase {

    constructor(protected accessToken: string = '', protected serviceName) {
        super(accessToken, serviceName );
    }

    async start(coolrisOpt: CoolrisOpts | any = undefined) {
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
        this.onLoginOutEvents(coolrisOpt);

        // 로그인에 되어 있다면 내 영역 데이터 로드 및 랜더
        if (isLogin && this.accessToken) {
            this.loadSettingMyArea();
        }
    }
}
