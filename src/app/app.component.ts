import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import * as localDB from '../assets/localDB.json';
import { AlbumService } from 'src/app/services/album/album.service';
import { ArtistService } from 'src/app/services/artist/artist.service';

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

  constructor(private albumService: AlbumService, private artistService: ArtistService){}

  ngOnInit(): void {
    this.albumService.getAllAlbums().subscribe((data) => {
      console.log(data);
    });
  }
  
  receiveDisplay($event) {
    this.showDeleteModal = $event;
  }
}
