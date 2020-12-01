import {Risbase} from "./risbase";
import {CoolrisOpts} from "./coolris-common";

declare var gtag: any;
declare var window: any;

export class Coolris extends Risbase {

    constructor(protected accessToken: string = '', protected serviceName) {
        super(accessToken, serviceName);
    }

    async start(coolrisOpt: CoolrisOpts | any = undefined): Promise<void> {
        if (!coolrisOpt) {
            coolrisOpt = {};
        }
        coolrisOpt.gaMeasurementId = 'UA-92421532-1';
        await super.start(coolrisOpt);
    }
}
