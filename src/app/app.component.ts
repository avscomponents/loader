import { Component } from '@angular/core';
import { LoaderService } from './loader/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  loading: boolean;
  constructor(private loader: LoaderService) {
    console.log('AppComp constructor loader.loading:', loader.loading);
     this.loading = loader.loading;
  }
}
