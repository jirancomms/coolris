import {constants, CoolrisOpts, CoolTemplate} from "./coolris-common";
import {Risbase} from "./risbase";
import {CommsrisService} from "./service/commsris-service";

export class Commsris extends Risbase {

    constructor(protected accessToken: string = '', serviceName = undefined) {
        super(accessToken, serviceName);
        this.risService = new CommsrisService();
    }

    async start(coolrisOpt: CoolrisOpts | any = undefined): Promise<void> {
        const options: any = this.initOption(coolrisOpt);
        options.gaOpts.gaMeasurementId = options.gaOpts.gaMeasurementId ? options.gaOpts.gaMeasurementId : 'G-6F5MJCTM7J';

		// 각각의 사이트에 알맞는 팝업을 보여주는 시스템
		this.openPopup();

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
        options.gaOpts.gaMeasurementId = options.gaOpts.gaMeasurementId ? options.gaOpts.gaMeasurementId : 'G-6F5MJCTM7J';
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

    /**
     *  탑배너 데이터 가져오기
     */
    async getBannerData() {
        const setting = {
            url: '//search.coolmessenger.com/api/commsrating/_search?q=topBandBanner&qf=viewType&serviceType=commsBanner',
            type: 'GET'
        };
        return await $.ajax(setting).then(response => {return response.data});
    }

	async openPopup() {

		const host = this.getHost();
		const response: any = await this.getPopupData(host);

		for (const popupInfo of response) {
			const { createdDate } = popupInfo;
			if (await this.hasDisplayedPopup(createdDate)) {
				this.displayPopup(popupInfo);
			}
		}
	}

    async getPopupData(domain) {
		let url = `${constants.searchUrl}/api/commsrating/_search?serviceType=popup&viewType=common&etcList1=`+domain

		return new Promise((resolve) => {
			$.get(url).then(response => {
				resolve(response.data);
			});
		});
    }

	async hasDisplayedPopup(createdDate) {
		const cookieName = `pop${createdDate}`;
		let cookie = this.getCookie(cookieName);
		return cookie == "";
	}

	displayPopup({ landingUrl: popupurl, etc1: popupChromeWidth, etc2: popupChromeHeight, etc3: popupWhaleWidth, etc4: popupWhaleHeight, createdDate, startDate, endDate }) {
		const popupStartDate = new Date(this.convertDate(startDate) + ' 00:00:00');
		const popupEndDate = new Date(this.convertDate(endDate) + ' 23:59:59');
		const nowDate = new Date();
		if (popupStartDate <= nowDate && nowDate <= popupEndDate) {
			const chromeSizeOption = `width=${popupChromeWidth},height=${popupChromeHeight},toolbar=no,history=no,resizable=no,status=n,top=0,left=0,scrollbars=no,menubar=no`;
			const whaleSizeOption = `width=${popupWhaleWidth},height=${popupWhaleHeight},toolbar=no,history=no,resizable=no,status=n,top=0,left=0,scrollbars=no,menubar=no`;
			const sizeOption = navigator.userAgent.indexOf('Whale') > -1 ? whaleSizeOption : chromeSizeOption;
			window.open(popupurl, createdDate, sizeOption);
		}
	}

	convertDate(sampleTimestamp) {
		let date = new Date(sampleTimestamp); //타임스탬프를 인자로 받아 Date 객체 생성

		let year = date.getFullYear().toString().slice(-4); //년도 뒤에 두자리
		let month = ("0" + (date.getMonth() + 1)).slice(-2); //월 2자리 (01, 02 ... 12)
		let day = ("0" + date.getDate()).slice(-2); //일 2자리 (01, 02 ... 31)
		let hour = ("0" + date.getHours()).slice(-2); //시 2자리 (00, 01 ... 23)
		let minute = ("0" + date.getMinutes()).slice(-2); //분 2자리 (00, 01 ... 59)
		let second = ("0" + date.getSeconds()).slice(-2); //초 2자리 (00, 01 ... 59)
		let returnDate = year + "/" + month + "/" + day;
		return returnDate;
	}

    /**
     * 구글코드 옵션 합쳐주기 (디폴트 옵션 주기)
     * @param coolrisOpt
     */
    initOption(coolrisOpt: CoolrisOpts | any = undefined): CoolrisOpts {
        const defOption: CoolrisOpts = {
            gaOpts: {
                gaPageviewCall: true,
                gaMeasurementId: 'G-6F5MJCTM7J'
            }
        } as any;
        return $.extend(true, defOption, coolrisOpt);
    }
}
