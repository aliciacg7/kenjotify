import { Component, OnInit, Output, EventEmitter, Input, ApplicationRef } from '@angular/core';
import { AlbumType } from 'src/app/models/album/album.module';
import { ArtistType } from 'src/app/models/artist/artist.module';
import { AlbumService } from 'src/app/services/album/album.service';
import { ArtistService } from 'src/app/services/artist/artist.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-modal-create',
  templateUrl: './modal-create.component.html',
  styleUrls: ['./modal-create.component.scss']
})
export class ModalCreateComponent implements OnInit {

  formNewAlbum :AlbumType = {
    title: '',
    coverUrl: '',
    year: 0,
    genre: ''
  }

  formNewArtist :ArtistType = { 
    name: '',
    photoUrl: '',
    birthdate: '',
    deathDate: '',
  }

  constructor(private albumService: AlbumService, private artistService: ArtistService, public appRef: ApplicationRef, public datePipe: DatePipe) {}

  ngOnInit(): void {}

  @Input() createType:String;

  @Output() displayEvent = new EventEmitter<any>();

  showCreateModal() {
    this.displayEvent.emit({ show: false, type: 'create' })
  }

  submitNewData() {
    if(this.createType=='album') {
      console.log(this.formNewAlbum)
      this.albumService.createNewAlbum(this.formNewAlbum)
        .subscribe((album) => {
          console.log('Album ',album.title,' succesfully created');
      });
    }
    else if (this.createType=='artista') {
      console.log(this.formNewArtist)
      this.artistService.createNewArtist(this.formNewArtist)
        .subscribe((artist) => {
          console.log('Artist ',artist.name,' succesfully created');
      });
    }
    this.showCreateModal()
    this.appRef.tick()
  }
}
