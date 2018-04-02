import { ILoaderConfig } from "./loader-config.interface";

export class LoaderConfig implements ILoaderConfig {

    constructor(public text: string,
        public blockUI: boolean,
        public opacity: number) {

    }
}
