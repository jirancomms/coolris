export interface CoolrisOpts {
    logoutOpts: LogoutOpts;
    gaOpts: GaOpts;
}

export interface GaOpts {
    gaMeasurementId: string;
    gaPageviewCall: boolean;
}

export interface LogoutOpts {
    isRestoreLocation: boolean;
    isLogoutProc: boolean;
    logoutProcUrl: string | undefined;
    callbackLogoutComplete: Function;
}

export interface CoolTemplate {
    login: string;
    menu: string;
    more: string;
    alarm?: string;
    point: string;
    beforeLogin: string;
    topBanner: string;
}

export interface FooterTemplate {
    bi: string;
    quickMenu: string;
    link: string;
    familySite: string;
    info: string;
}

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
    memberUrl: `//${coolEnv.getEnvPrefix()}member.coolschool.co.kr`,
    searchUrl: `//${coolEnv.getEnvPrefix()}search.coolschool.co.kr`,
    clientIds: {
        'www': 'NjM2YzY5NjU2ZTc0NWY2OTY0M2E0MzRmNGY0YzUzNDM0ODRmNGY0Yw==', // coolschool
        '': 'NjM2YzY5NjU2ZTc0NWY2OTY0M2E0MzRmNGY0YzUzNDM0ODRmNGY0Yw==', // coolschool
        'coolschool': 'NjM2YzY5NjU2ZTc0NWY2OTY0M2E0MzRmNGY0YzUzNDM0ODRmNGY0Yw==', // coolschool
        'my': 'NjM2YzY5NjU2ZTc0NWY2OTY0M2E0MzRmNGY0YzUzNDM0ODRmNGY0Yw==', // myInfo
        'coolendar': 'NjM2YzY5NjU2ZTc0NWY2OTY0M2E0MzRmNGY0YzRhNGY0Mg==', // coolendar
        'coolendar3': 'NjM2YzY5NjU2ZTc0NWY2OTY0M2E0MzRmNGY0YzRhNGY0Mg==', // coolendar3
        'cooledu': 'NjM2YzY5NjU2ZTc0NWY2OTY0M2E0MzRmNGY0YzQ1NDQ1NQ==', // cooledu
        'samstory': 'NjM2YzY5NjU2ZTc0NWY2OTY0M2E1MzQxNGQ1MzU0NGY1MjU5', // samstory
        'coolmessenger': 'NjM2YzY5NjU2ZTc0NWY2OTY0M2E0MzRmNGY0YzRkNDU1MzUzNDU0ZTQ3NDU1Mg==', // coolmessenger
        'coolpama': 'NjM2YzY5NjU2ZTc0NWY2OTY0M2E0MzRmNGY0YzUwNDE0ZDQx', // coolpama
        'coolbooks': 'NjM2YzY5NjU2ZTc0NWY2OTY0M2E0MzRmNGY0YzU0NDI0ZjRmNGI1Mw==', // coolbooks
        't-mall': 'NjM2YzY5NjU2ZTc0NWY2OTY0M2E1NzQ1NTQ0NTQxNDM0ODQ1NTI=', // t-mall
        'coolmarket': 'NjM2YzY5NjU2ZTc0NWY2OTY0M2E0MzRmNGY0YzRkNDE1MjRiNDU1NA==', //coolmarket
        'coolmova': 'NjM2YzY5NjU2ZTc0NWY2OTY0M2E0ZDRmNTY0MQ==', // coolmova
        't-fun': 'NjM2YzY5NjU2ZTc0NWY2OTY0M2E0NDQxNWE1YTRjNDU0NTQ0NTU=', // t-fun
        'member': 'NjM2YzY5NjU2ZTc0NWY2OTY0M2E0MzRmNGY0YzUzNDM0ODRmNGY0Yw==', // myInfo
        'point': 'NjM2YzY5NjU2ZTc0NWY2OTY0M2E0MzRmNGY0YzUzNDM0ODRmNGY0Yw==' // point
    }
};
