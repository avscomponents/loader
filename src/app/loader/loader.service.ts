import { Injectable } from '@angular/core';
import { ILoaderConfig } from './loader-config.interface';

@Injectable()
export class LoaderService {
  public loading: boolean;
  public text: string;
  public blockUI: boolean;
  public opacity: number;

  
        constructor() {
    
 // constructor(config: ILoaderConfig) {
    // if (config) {
    //   this.blockUI = config.blockUI;
    //   this.text = config.text;
    //   this.opacity = config.opacity;
    // }
   
    // this.text = 'testing text in service....';    
  }
  show(blockUI?: boolean, text?: string ) {
    this.loading = true;
    this.blockUI = blockUI;
    this.text = text;
  }
  hide() {
    this.loading = false;
    this.blockUI = false;
    this.text = '';
  }

}
