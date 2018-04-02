import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoaderModule } from './loader/loader.module';

export const loaderConfig = {
  blockUI: true, opacity: 0.5, text: 'testing loader, loading...'
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    LoaderModule.forRoot()
  ],  
  bootstrap: [AppComponent]
})
export class AppModule { }
