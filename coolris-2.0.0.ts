import {Risbase} from "./risbase";

export class Coolris extends Risbase {

    constructor(protected accessToken: string = '', protected serviceName) {
        super(accessToken, serviceName);
    }
}
