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
  providers: [LoaderService, LoaderConfig]
})
export class LoaderModule {
  static forRoot(config): ModuleWithProviders {
    // console.log(config);
    return {
      ngModule: LoaderModule,
      providers: [{
        provide: LoaderService,
        useValue: new LoaderService(config)
      }]
    };
  }
}