import {CoolrisOpts, CoolTemplate} from "./coolris-common";
import {Risbase} from "./risbase";
import {CommsrisService} from "./service/commsris-service";

export class Commsris extends Risbase {

    constructor(protected accessToken: string = '', serviceName = undefined) {
        super(accessToken, serviceName);
        this.risService = new CommsrisService();
    }

    async start(coolrisOpt: CoolrisOpts | any = undefined): Promise<void> {
        const options: any = this.initOption(coolrisOpt);
        options.gaOpts.gaMeasurementId = options.gaOpts.gaMeasurementId ? options.gaOpts.gaMeasurementId : 'UA-92421532-1';
        await super.start(options);
    }

    getCoolTemplate(): CoolTemplate {
        return  {
            login: this.risService.getLoginTemplate(this.serviceName, this.gaMeasurementId),
            menu: this.risService.getGnbMenuTemplate(this.serviceName, this.gaMeasurementId),
            more: '',
            point: '',
            beforeLogin: this.risService.getBeforeLoginTemplate(),
            topBanner: this.risService.getTopBannerTemplate(this.serviceName, this.gaMeasurementId)
        };
    }

    footerStart(coolrisOpt: CoolrisOpts | any = undefined) {
        const options: any = this.initOption(coolrisOpt);
        options.gaOpts.gaMeasurementId = options.gaOpts.gaMeasurementId ? options.gaOpts.gaMeasurementId : 'UA-92421532-1';
        this.setGoogleCode(options); // 구글 ID적용, 구글 코드 함수 적용

        // interface footerTemplate에 템플릿 주기
        const footerTemplate = {
            bi: this.risService.getBiTemplate(this.serviceName, this.gaMeasurementId),
            quickMenu: this.risService.getQuickMenuTemplate(),
            link: this.risService.getLinkTemplate(this.serviceName, this.gaMeasurementId),
            familySite: this.risService.getFamilySiteTemplate(),
            info: this.risService.getInfoTemplate(this.serviceName, this.gaMeasurementId)
        };

        // dot에 template을 준다.
        // @ts-ignore
        const coolrisTemplateFn = this.doT.template(this.risService.getFooteremplate(footerTemplate));
        $('#commsrisFooter').html(coolrisTemplateFn());

        this.eventDropdownAndQuickMenu();
    }

    async loadSettingMyArea(): Promise<void> {
        // 프로필 세팅
        const profileResult = await this.loadProfileResult(this.accessToken);
        if (!profileResult.result) {
            return;
        }
        let profileData = profileResult.data;
        this.settingProfile(profileData);
    }

    settingProfile(profileData: any) {
        $('[data-name=imgProfileImg]').attr('src', profileData.profileImage);
        $('[data-name=spanProfileName]').html(profileData.name);
    }

    async loadSettingTopBanner() {

    }
}
