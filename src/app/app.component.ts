import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
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
  toBeDeleted = {
    typeDelete: '',
    storage: ''
  }
  modalType: String;
  
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
    this.albumService.getAllAlbums().subscribe((res) => {
      this.albumData = [...res]
    });
    this.artistService.getAllArtists().subscribe((res) => {
      this.artistData = [...res]
    });
  }
  
  receiveDisplay($event) {
    if($event.type === 'delete') {
      if($event.execute === false) {
        this.toBeDeleted.storage = $event.id
        this.toBeDeleted.typeDelete = $event.typeDelete
      }
      
      if($event.execute === true) {
        if(this.toBeDeleted.typeDelete === 'album'){
          this.albumService.deleteAlbum(this.toBeDeleted.storage)
            .subscribe(() => {
              this.albumData = this.albumData.filter(album => album._id !== this.toBeDeleted.storage)
              console.log('Album ', this.toBeDeleted.storage, ' succesfully deleted.');
            });
        }
        else if(this.toBeDeleted.typeDelete === 'artist'){
          this.artistService.deleteArtist(this.toBeDeleted.storage)
            .subscribe(() => {
              this.artistData = this.artistData.filter(artist => artist._id !== this.toBeDeleted.storage)
              console.log('Artist ', this.toBeDeleted.storage, ' succesfully deleted.');
            });
        }
      }
      this.showModal.delete = $event.show;
    }
      
    else if($event.type === 'create') {
      this.showModal.create = $event.show;
    }
  }
}
