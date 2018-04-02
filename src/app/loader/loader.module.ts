import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader.component';
import { LoaderService } from './loader.service';
import { ILoaderConfig } from './loader-config.interface';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [LoaderComponent],
  declarations: [LoaderComponent],
  providers: [LoaderService]
})
export class LoaderModule {
  static forRoot(): ModuleWithProviders {
    // console.log(config);
    return {
      ngModule: LoaderModule,
      providers: [{
        provide: LoaderService,
        useValue: new LoaderService()
      }]
    };
  }
}