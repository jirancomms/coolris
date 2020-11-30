import {CoolrisOpts} from "./coolris-common";
import {Risbase} from "./risbase";

declare var $: any;

declare var ga: any;

export class Commsris extends Risbase {

    constructor(protected accessToken: string = '', protected serviceName) {
        super(accessToken, serviceName );
    }
}
