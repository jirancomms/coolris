import {CoolrisOpts} from "./coolris-common";
import {Risbase} from "./risbase";

declare var $: any;
declare var ga: any;

export class Commsris extends Risbase {

    constructor(protected accessToken: string = '', protected serviceName) {
        super(accessToken, serviceName );
    }

    async start(coolrisOpt: CoolrisOpts | any = undefined): Promise<void> {
        const options: any = this.initOption(coolrisOpt);
        options.gaOpts.gaMeasurementId = 'UA-92421532-1';
        await super.start(options);
    }

}
