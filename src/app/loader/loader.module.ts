import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader.component';
import { LoaderService } from './loader.service';
import { ILoaderConfig } from './loader-config.interface';
import { LoaderConfig } from './loader-config.model';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [LoaderComponent],
  declarations: [LoaderComponent],
  providers: [LoaderService]
})
export class LoaderModule {
  static forRoot(config: ILoaderConfig): ModuleWithProviders {
    console.log(config);
    const loader = new LoaderService();
    if (config) {
      loader.blockUI = config.blockUI;
      loader.text = config.text;
      loader.opacity = config.opacity;
    }
    return {
      ngModule: LoaderModule,
      providers: [{
        provide: LoaderService,
        useValue: loader
      }]
    };
  }
}