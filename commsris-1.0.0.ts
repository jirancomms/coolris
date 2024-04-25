import {constants, CoolrisOpts, CoolTemplate} from "./coolris-common";
import {Risbase} from "./risbase";
import {CommsrisService} from "./service/commsris-service";
import {tsLoaderSource} from "ts-loader/dist/utils";
import {ChannelTalkService} from "./service/channeltalk-service";

export class Commsris extends Risbase {
	popupCurrentLeftPosition: number;

    constructor(protected accessToken: string = '', serviceName = undefined) {
        super(accessToken, serviceName);
        this.risService = new CommsrisService();
		this.popupCurrentLeftPosition = 0;
    }

    async start(coolrisOpt: CoolrisOpts | any = undefined): Promise<void> {
        const options: any = this.initOption(coolrisOpt);
        options.gaOpts.gaMeasurementId = options.gaOpts.gaMeasurementId ? options.gaOpts.gaMeasurementId : 'G-6F5MJCTM7J';

        await super.start(options);

		// 각각의 사이트에 알맞는 팝업을 보여주는 시스템
		// this.openPopup();
		this.openPopup2();
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

        this.execChannelTalk();
		// 기술문의 채널톡 메시지 열기 이벤트
		this.onEventOpenChannelTalkMessenger();
    }

    async loadSettingMyArea(): Promise<CCResult<Member>> {
        // 프로필 세팅
        const profileResult = await this.loadProfileResult(this.accessToken);
        if (!profileResult.data) {
            return profileResult;
        }
        let profileData = profileResult.data;
        this.settingProfile(profileData);
		return profileResult;
    }

    settingProfile(profileData: Member) {
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


	async openPopup2() {
		let subdomain = this.getHost();
		const response: any = await this.getPopupData(subdomain);

		for (const popupInfo of response) {
			const { etc2 } = popupInfo;
			if (await this.hasDisplayedPopup(etc2)) {
				this.showPopup(popupInfo);
			}
		}
	}

	async showPopup({ landingUrl: popupurl, etc1: popupSizeDict, createdDate, startDate, endDate, imageUrl }) {
		var strWidth;
		var strHeight;
		// 이미지 정보 가져오기
		const size = await this.getImageSize(strWidth, strHeight, imageUrl);

		const popupStartDate = new Date(this.convertDate(startDate) + ' 00:00:00');
		const popupEndDate = new Date(this.convertDate(endDate) + ' 23:59:59');
		const nowDate = new Date();

		if (popupStartDate <= nowDate && nowDate <= popupEndDate) {
			var img = new Image();
			img.src = imageUrl
			var devicePixelRatio = window.devicePixelRatio
			// 고해상도를 모니터, 폰? 을 이용해서 확인하는 유저를 위한 계산
			// var w = Math.round(img.width * devicePixelRatio);
			// var h = Math.round(img.height * devicePixelRatio);

			var whaleSizeOption = 'width=' + Math.round(img.width) + ',height=' + Math.round(img.height) + ',left=' + this.popupCurrentLeftPosition;
			var chromeSizeOption = 'width=' + Math.round(img.width) + ',height=' + (Math.round(img.height) + 30 + ',left=' + this.popupCurrentLeftPosition);
			this.popupCurrentLeftPosition += Math.round(img.width);
			console.log(this.popupCurrentLeftPosition);

			// var sizeOption = 'width=' + img.width + ',height=' + img.height;
			// const chromeSizeOption = `width=${popupChromeWidth},height=${popupChromeHeight},toolbar=no,history=no,status=n,top=0,left=0,scrollbars=no,menubar=no`;
			// const chromeSizeOption = `toolbar=no,history=no,status=n,top=0,left=0,scrollbars=no,menubar=no`;
			// const whaleSizeOption = `width=${popupWhaleWidth},height=${popupWhaleHeight},toolbar=no,history=no,status=n,top=0,left=0,scrollbars=no,menubar=no`;
			// const whaleSizeOption = `toolbar=no,history=no,status=n,top=0,left=0,scrollbars=no,menubar=no`;
			const sizeOption = navigator.userAgent.indexOf('Whale') > -1 ? whaleSizeOption : chromeSizeOption;

			window.open(popupurl, createdDate, sizeOption)
		}

		// async function openTest() {
		// 	if (popupStartDate <= nowDate && nowDate <= popupEndDate) {
		// 		var img = new Image();
		// 		img.src = imageUrl
		// 		var devicePixelRatio = window.devicePixelRatio
		// 		// 고해상도를 모니터, 폰? 을 이용해서 확인하는 유저를 위한 계산
		// 		// var w = Math.round(img.width * devicePixelRatio);
		// 		// var h = Math.round(img.height * devicePixelRatio);
		// 		var whaleSizeOption = 'width=' + Math.round(img.width) + ',height=' + Math.round(img.height);
		// 		var chromeSizeOption = 'width=' + Math.round(img.width) + ',height=' + (Math.round(img.height) + 30);
		// 		// var sizeOption = 'width=' + img.width + ',height=' + img.height;
		// 		// const chromeSizeOption = `width=${popupChromeWidth},height=${popupChromeHeight},toolbar=no,history=no,status=n,top=0,left=0,scrollbars=no,menubar=no`;
		// 		// const chromeSizeOption = `toolbar=no,history=no,status=n,top=0,left=0,scrollbars=no,menubar=no`;
		// 		// const whaleSizeOption = `width=${popupWhaleWidth},height=${popupWhaleHeight},toolbar=no,history=no,status=n,top=0,left=0,scrollbars=no,menubar=no`;
		// 		// const whaleSizeOption = `toolbar=no,history=no,status=n,top=0,left=0,scrollbars=no,menubar=no`;
		// 		const sizeOption = navigator.userAgent.indexOf('Whale') > -1 ? whaleSizeOption : chromeSizeOption;
		//
		// 		window.open(popupurl, createdDate, sizeOption)
		// 	}
		// }

		// openTest();
	}

	async getImageSize(strWidth, strHeight, imageUrl) {
		return new Promise((resolve, reject) => {
			const img = new Image();
			img.onload = function() {
				const size = {
					width: img.width,
					height: img.height
				};
				resolve(size);
			};
			img.onerror = function() {
				reject(new Error('Image load error'));
			};
			img.src = imageUrl;
		});
	}


	/**
	 * 사이트에 알맞는 팝업을 실행시켜주는 로직입니다.
	 */
	async openPopup() {

		// commsris를 호출한 사이트의 subdomain 정보를 가져옵니다.
		let subdomain = this.getHost();
		const response: any = await this.getPopupData(subdomain);

		for (const popupInfo of response) {
			const { etc2 } = popupInfo;
			if (await this.hasDisplayedPopup(etc2)) {
				this.displayPopup(popupInfo);
			}
		}
	}

	/**
	 * @param subdomain
	 * domain이 보여줘야하는 팝업 리스트 정보를 가져옵니다.
	 * comms-search 서버로 부터 조회
	 */
    async getPopupData(subdomain) {
		let url = `${constants.searchUrl}/api/commsrating/_search?serviceType=popup&etcList1=`+subdomain
		// let url = `https://dev-search.coolmessenger.com/api/commsrating/_search?serviceType=popup&etcList1=`+"coolsms"
		return new Promise((resolve) => {
			$.get(url).then(response => {
				resolve(response.data);
			});
		});
    }

	/**
	 *
	 * @param cookieName
	 * @private
	 * 쿠키 정보가 있으면, 팝업을 안보여주고
	 * 쿠키 정보가 없으면, 팝업을 보여줍니다.
	 */
	async hasDisplayedPopup(cookieName) {
		let cookie = this.getCookie(cookieName);
		return cookie == "";
	}

	/**
	 *
	 * @param popupurl
	 * @param popupSizeDict
	 * @param createdDate
	 * @param startDate
	 * @param endDate
	 * @private
	 * 팝업을 실행하는 로직입니다.
	 * 도메인에 알맞는 팝업을 실행시켜주며
	 * 팝업의 가로, 세로 설정 및 기타 설정들을 지정합니다.
	 */
	private displayPopup({ landingUrl: popupurl, etc1: popupSizeDict, createdDate, startDate, endDate }) {
		let parse = JSON.parse(popupSizeDict);

		let popupChromeWidth = parse['chromeWidth']
		let popupChromeHeight = parse['chromeHeight']
		let popupWhaleWidth = parse['whaleWidth']
		let popupWhaleHeight = parse['whaleHeight']


		const popupStartDate = new Date(this.convertDate(startDate) + ' 00:00:00');
		const popupEndDate = new Date(this.convertDate(endDate) + ' 23:59:59');
		const nowDate = new Date();
		if (popupStartDate <= nowDate && nowDate <= popupEndDate) {
			let image = new Image();
			image.src = "https://update.coolmessenger.com/_ImageServer/popup/2023/04/17/template1.png"
			const width = image.width;
			const height = image.height;

			// const chromeSizeOption = `width=${popupChromeWidth},height=${popupChromeHeight},toolbar=no,history=no,resizable=no,status=n,top=0,left=0,scrollbars=no,menubar=no`;
			const chromeSizeOption = `width=${width},height=${height},toolbar=no,history=no,resizable=no,status=n,top=0,left=0,scrollbars=no,menubar=no`;
			// const whaleSizeOption = `width=${popupWhaleWidth},height=${popupWhaleHeight},toolbar=no,history=no,resizable=no,status=n,top=0,left=0,scrollbars=no,menubar=no`;
			const whaleSizeOption = `width=${width},height=${height},toolbar=no,history=no,resizable=no,status=n,top=0,left=0,scrollbars=no,menubar=no`;
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

    // footer없이 채널톡만 띄우기
    execChannelTalk(){
        const channelTalkService: ChannelTalkService = new ChannelTalkService();
        channelTalkService.loadScript();
        channelTalkService.boot({
            "pluginKey": "6213ceca-3275-4662-8bbf-302407b85a89"
        });
    }

    // 기술지원 채널톡 메시지 열기
    openChannelTalkMessenger(){
        const channelTalkService: ChannelTalkService = new ChannelTalkService();
        /*channelTalkService.loadScript();
        channelTalkService.boot({
            "pluginKey": "6213ceca-3275-4662-8bbf-302407b85a89"
        });*/
        channelTalkService.showMessenger();
    }

	onEventOpenChannelTalkMessenger() {
		$('#support').on('click', () => {
			this.openChannelTalkMessenger();
		});
	}
}
