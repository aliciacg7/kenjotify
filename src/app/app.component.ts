import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import * as localDB from '../assets/localDB.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation : ViewEncapsulation.ShadowDom
})
export class AppComponent {

  data = localDB;

  ngOnInit(): void {
    console.log(this.data)
  }
  
}
