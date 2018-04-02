import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoaderModule } from './loader/loader.module';
import { LoaderConfig } from './loader/loader-config.model';

// export const loaderConfig = {
//   blockUI: true, opacity: 0.5, text: 'testing loader, loading...'
// }

const config = new LoaderConfig('testing txt', true, 0.5);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    LoaderModule.forRoot(config)
  ],  
  bootstrap: [AppComponent]
})
export class AppModule { }
