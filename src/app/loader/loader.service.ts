import { Injectable } from '@angular/core';
import { ILoaderConfig } from './loader-config.interface';

@Injectable()
export class LoaderService {
  public loading: boolean;
  public text: string;
  public blockUI: boolean;
  public opacity: number;

  constructor(config: any) {
 //  constructor() {
    // if (config) {
    //   this.blockUI = config.blockUI;
    //   this.text = config.text;
    //   this.opacity = config.opacity;

    // }
   
    // this.text = 'testing text in service....';
    console.log('this.loading in service constructor: ', this.loading);
  }
  show() {
    this.loading = true;
  }
  hide() {
    this.loading = false;
  }

}
