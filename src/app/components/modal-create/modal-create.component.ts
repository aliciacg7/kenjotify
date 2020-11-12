import { Component, OnInit, Output, EventEmitter, Input, ApplicationRef } from '@angular/core';
import { AlbumType } from 'src/app/models/album/album.module';
import { AlbumService } from 'src/app/services/album/album.service';

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

  constructor(private albumService: AlbumService, public appRef: ApplicationRef) {}

  ngOnInit(): void {
  }

  @Output() displayEvent = new EventEmitter<any>();

  showCreateModal() {
    this.displayEvent.emit({ show: false, type: 'create' })
  }

  submitNewAlbum() {
    console.log(this.formNewAlbum)
    this.albumService.createNewAlbum(this.formNewAlbum)
      .subscribe((album) => {
        console.log('Album ',album.title,' succesfully created');
    });
    this.showCreateModal()
    this.appRef.tick()
  }
}
