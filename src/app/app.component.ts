import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import * as localDB from 'src/assets/localDB.json';
import { AlbumService } from 'src/app/services/album/album.service';
import { ArtistService } from 'src/app/services/artist/artist.service';
import { AlbumType } from 'src/app/models/album/album.module'
import { ArtistType } from 'src/app/models/artist/artist.module'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation : ViewEncapsulation.ShadowDom
})
export class AppComponent {

  albumData: AlbumType[] = [];
  artistData: ArtistType[] = []
  albumToBeDeleted: String;
  
  enableDeleteMode = {
    albums: false,
    artists: false
  }

  showModal = {
    delete: false,
    create: false
  }

  constructor(private albumService: AlbumService, private artistService: ArtistService){}

  ngOnInit(): void {
    this.albumService.getAllAlbums().subscribe((dataReal) => {
      // console.log(dataReal);
      this.albumData = [...dataReal]
    });
  }
  
  receiveDisplay($event) {
    console.log($event)
    if($event.type === 'delete') {
      if($event.execute === false) this.albumToBeDeleted = $event.id
      else if($event.execute === true) {
        this.albumService.deleteAlbum(this.albumToBeDeleted)
          .subscribe(() => {
            console.log('Album ', this.albumToBeDeleted, ' succesfully deleted.');
          });
      }
      this.showModal.delete = $event.show;
    }
    else if($event.type === 'create') this.showModal.create = $event.show;
  }
}
