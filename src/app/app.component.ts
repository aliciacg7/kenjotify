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
  showDeleteModal = false;
  
  enableDeleteMode = {
    albums: false,
    artists: false
  }

  ngOnInit(): void {
  }
  
  receiveDisplay($event) {
    this.showDeleteModal = $event;
  }
}
