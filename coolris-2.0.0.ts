import {Risbase} from "./risbase";
import {CoolrisOpts} from "./coolris-common";
import {CoolrisService} from "./service/coolris-service";

export class Coolris extends Risbase {
    constructor(protected accessToken: string = '', serviceName = undefined) {
        super(accessToken, serviceName);
        this.risService = new CoolrisService();
    }

    async start(coolrisOpt: CoolrisOpts | any = undefined): Promise<void> {
        await super.start(this.initOption(coolrisOpt));
    }
}
