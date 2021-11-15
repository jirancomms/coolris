// 쿨리스 옵션 클레스
export interface CoolrisOpts {
    logoutOpts: LogoutOpts;
    gaOpts: GaOpts;
    layoutOpts: LayoutOpts;
}

// 레이아웃 변화 주는 옵션
export interface LayoutOpts {
    isFullSize: boolean; // 해더의 레이아웃을 full-size로 변형
}

// 구글 코드 옵션
export interface GaOpts {
    gaMeasurementId: string; // 구글 코드 ID
    gaPageviewCall: boolean; // 페이지 뷰의 여부
}

// 로그아웃 옵션
export interface LogoutOpts {
    isRestoreLocation: boolean; // 로그아웃한 사이트에 남아있을 여부
    isLogoutProc: boolean; // /logoutProc 사용 유무
    logoutProcUrl: string | undefined;  // 다른 로그아웃 url이 필요할 때
    callbackLogoutComplete: Function; // 로그아웃 완료 후 콜백함수
}

// 템플릿 종류
export interface CoolTemplate {
    login: string;
    menu: string;
    more: string;
    alarm?: string;
    point: string;
    beforeLogin: string;
    topBanner: string;
    bi?: string
}

// 푸터용 템플릿 종류
export interface FooterTemplate {
    bi: string;
    quickMenu: string;
    link: string;
    familySite: string;
    info: string;
}

// 적용 사이트에서 필요한 env 가져오는 로직
export class CoolEnv {

    getEnv() {
        let localHost = location.hostname.indexOf('local');
        let devHost = location.hostname.indexOf('dev');
        if (localHost === -1 && devHost === -1) {
            return 'prod';
        }
        if (localHost === 0) {
            return 'local';
        }
        if (devHost === 0) {
            return 'dev';
        }
    }

    getEnvPrefix() {
        let prefix = '';
        const env = this.getEnv();
        switch (env) {
            case "prod":
                break
            case "local":
            case "dev":
                prefix = env + '-'
                break;
            default:
                break;
        }
        return prefix;
    }

}

const coolEnv = new CoolEnv();

export const constants = {
    memberUrl:  (() => {
        if (location.hostname.indexOf('coolmessenger.com') !== -1 || location.hostname.indexOf('coolalimi') !== -1) {
            return `//${coolEnv.getEnvPrefix()}member.coolmessenger.com`;
        }
        return `//${coolEnv.getEnvPrefix()}member.coolschool.co.kr`;
    })(),
    searchUrl:  (() => {
        if (location.hostname.indexOf('coolmessenger.com') !== -1 || location.hostname.indexOf('coolalimi') !== -1) {
            return `//${coolEnv.getEnvPrefix()}search.coolmessenger.com`;
        }
        return `//${coolEnv.getEnvPrefix()}search.coolschool.co.kr`;
    })(),
    clientIds: {
        'www': 'NjM2YzY5NjU2ZTc0NWY2OTY0M2E0MzRmNGY0YzUzNDM0ODRmNGY0Yw==', // coolschool
        '': 'NjM2YzY5NjU2ZTc0NWY2OTY0M2E0MzRmNGY0YzUzNDM0ODRmNGY0Yw==', // coolschool
        'coolschool': 'NjM2YzY5NjU2ZTc0NWY2OTY0M2E0MzRmNGY0YzUzNDM0ODRmNGY0Yw==', // coolschool
        'my': 'NjM2YzY5NjU2ZTc0NWY2OTY0M2E0MzRmNGY0YzUzNDM0ODRmNGY0Yw==', // myInfo
        'coolendar': 'NjM2YzY5NjU2ZTc0NWY2OTY0M2E0MzRmNGY0YzRhNGY0Mg==', // coolendar
        'coolendar3': 'NjM2YzY5NjU2ZTc0NWY2OTY0M2E0MzRmNGY0YzRhNGY0Mg==', // coolendar3
        'cooledu': 'NjM2YzY5NjU2ZTc0NWY2OTY0M2E0MzRmNGY0YzQ1NDQ1NQ==', // cooledu
        'samstory': 'NjM2YzY5NjU2ZTc0NWY2OTY0M2E1MzQxNGQ1MzU0NGY1MjU5', // samstory
        'school': 'NjM2YzY5NjU2ZTc0NWY2OTY0M2E0MzRmNGY0YzRkNDU1MzUzNDU0ZTQ3NDU1Mg==', // coolmessenger
        'coolpama': 'NjM2YzY5NjU2ZTc0NWY2OTY0M2E0MzRmNGY0YzUwNDE0ZDQx', // coolpama
        'coolbooks': 'NjM2YzY5NjU2ZTc0NWY2OTY0M2E0MzRmNGY0YzU0NDI0ZjRmNGI1Mw==', // coolbooks
        't-mall': 'NjM2YzY5NjU2ZTc0NWY2OTY0M2E1NzQ1NTQ0NTQxNDM0ODQ1NTI=', // t-mall
        'coolmarket': 'NjM2YzY5NjU2ZTc0NWY2OTY0M2E0MzRmNGY0YzRkNDE1MjRiNDU1NA==', //coolmarket
        'coolmova': 'NjM2YzY5NjU2ZTc0NWY2OTY0M2E0ZDRmNTY0MQ==', // coolmova
        't-fun': 'NjM2YzY5NjU2ZTc0NWY2OTY0M2E0NDQxNWE1YTRjNDU0NTQ0NTU=', // t-fun
        'member': 'NjM2YzY5NjU2ZTc0NWY2OTY0M2E0MzRmNGY0YzUzNDM0ODRmNGY0Yw==', // myInfo
        'point': 'NjM2YzY5NjU2ZTc0NWY2OTY0M2E0MzRmNGY0YzUzNDM0ODRmNGY0Yw==', // point
        'alimi': 'NjM2YzY5NjU2ZTc0NWY2OTY0M2E0MzZmNmY2YzQxNmM2MTcyNmQ=', // alimi
        'coolalimi': 'NjM2YzY5NjU2ZTc0NWY2OTY0M2E0MzZmNmY2YzQxNmM2MTcyNmQ=', // coolalimi
        'eduspace': 'NjM2YzY5NjU2ZTc0NWY2OTY0M2E0MjQ1NTM1NDU0NDU0Mw==', // eduspace
        'futureclass': 'NjM2YzY5NjU2ZTc0NWY2OTY0M2E0MzRmNGY0YzUzNDM0ODRmNGY0Yw==', // futureclass
    }
};
