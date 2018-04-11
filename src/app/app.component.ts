import { Component } from '@angular/core';
import { LoaderService } from './loader/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Testing loader component';

  constructor(public loader: LoaderService) {
    console.log('AppComp constructor loader.loading:', loader.loading);
    loader.loading;
  }
  blockUI() {
    this.loader.blockUI = true;
    setTimeout(() => {
      this.loader.blockUI = false;
    }, 3000);
  }
  showLoader() {
    this.loader.show();
  }
  hideLoader() {
    this.loader.hide();
  }
}
