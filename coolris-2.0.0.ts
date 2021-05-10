import {Risbase} from "./risbase";
import {CoolrisOpts, CoolTemplate} from "./coolris-common";
import {CoolrisService} from "./service/coolris-service";

export class Coolris extends Risbase {
    constructor(protected accessToken: string = '', serviceName = undefined) {
        super(accessToken, serviceName);
        this.risService = new CoolrisService();
    }

    async start(coolrisOpt: CoolrisOpts | any = undefined): Promise<void> {
        await super.start(this.initOption(coolrisOpt));
    }

    getCoolTemplate(): CoolTemplate {
        return  {
            login: this.risService.getLoginTemplate(this.serviceName, this.gaMeasurementId),
            menu: this.risService.getGnbMenuTemplate(this.serviceName, this.gaMeasurementId),
            more: this.risService.getMoreTemplate(this.serviceName, this.gaMeasurementId),
            point: '',
            beforeLogin: this.risService.getBeforeLoginTemplate(),
            topBanner: this.risService.getTopBannerTemplate(this.serviceName, this.gaMeasurementId)
        };
    }

    // 회원 종류에 따라서 뿌려주는 정보를 달리하자.
    settingProfile(profileData: any) {
        // 공통 (프로필 이미지, 이름, 아이디)
        $('[data-name=imgProfileImg]').attr('src', profileData.profileImage);
        $('[data-name=spanProfileName]').text(profileData.name);
        const spanUserId = $('[data-name=spanUserId]');
        spanUserId.text(`(${profileData.id})`);

        // 소셜아이디 체크 룰
        const socialCheckRule = /^(g|f|n)_([a-zA-Z0-9])*$/gi;

        // 개인일 때
        if (Number(profileData.memberType) === 1 && !new RegExp(socialCheckRule).test(profileData.id)) {
            $('[data-name=spanPoint]').text(this.addComma(profileData.point));

            // 쿨모바 있을 때
            if (profileData.movaNo && profileData.movaNo.length > 0) {
                $('[data-name=spanCoolmova]').text(profileData.movaNo);
            } else {
                $('[data-name=spanCoolmova]').css('display', 'none');
                $('.coolmova-btn').css('display', 'inline-block');
            }
            return;
        } else { // 개인이 아닐 때 포인트, 안심번호 숨기기
            $('.user-personal-info').css('display', 'none');
            $('[data-name=spanLogout]').css('margin-top', 30);
            spanUserId.css({'margin-left': 0, 'display': 'block'});
        }

        // 소셜일 때 통합계정아이디 대신에 서비스명 노출
        const facebookRule = /^f_([a-zA-Z0-9])*$/gi;
        const googleRule = /^g_([a-zA-Z0-9])*$/gi;
        const naverRule = /^n_([a-zA-Z0-9])*$/gi;
        if (new RegExp(socialCheckRule).test(profileData.id)) {
            if (new RegExp(naverRule).test(profileData.id)) {
                spanUserId.text(`(SNS연동-네이버)`);
            }
            if (new RegExp(facebookRule).test(profileData.id)) {
                spanUserId.text(`(SNS연동-페이스북)`);
            }
            if (new RegExp(googleRule).test(profileData.id)) {
                spanUserId.text(`(SNS연동-구글)`);
            }
            return;
        }
        
        // 학교, 기업, 단체일 때
        let $myinfoEl = $('[data-name=myInfo]');
        switch(Number(profileData.memberType)) {
            case 2:
                $myinfoEl.text('학교정보 수정');
                break;
            case 3:
                $myinfoEl.text('기업정보 수정');
                break;
            case 4:
                $myinfoEl.text('단체정보 수정');
                break;
        }
    }
}
