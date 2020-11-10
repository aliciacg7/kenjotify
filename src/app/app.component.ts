import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import * as localDB from 'src/assets/localDB.json';
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
    console.log(this.data)
    this.albumService.getAllAlbums().subscribe((dataReal) => {
      console.log(dataReal);
    });
  }
  
  receiveDisplay($event) {
    this.showDeleteModal = $event;
  }
}
