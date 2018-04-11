import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoaderModule } from './loader/loader.module';
import { LoaderConfig } from './loader/loader-config.model';

export const loaderConfig = {
  blockUI: false, opacity: 0.5, text: ' Loading text test. loading ...'
}

// const config = new LoaderConfig('Loading text test. loading ...', false, 0.5);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    LoaderModule.forRoot(loaderConfig)
  ],  
  bootstrap: [AppComponent]
})
export class AppModule { }
