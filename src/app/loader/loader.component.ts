import { Component, OnInit, Input } from '@angular/core';
import { LoaderService } from './loader.service';

@Component({
  selector: 'avs-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {
  

  constructor( private loader: LoaderService ) {
   
    console.log("loader constructtor loader.loading: ", loader.text);
   }

  ngOnInit() {
    console.log('loaderComponent ngOnInit() loading:', );
    console.log('text: ', this.loader.text);
  }

}
