import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { AlbumType } from 'src/app/models/album/album.module';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {

  ngOnInit(): void {}

  @Input() albumInfo: AlbumType;

  @Input() enableDeleteAlbum: boolean;

  @Output() displayEvent = new EventEmitter<any>();

  constructor() {}

  showDeleteModal(albumId) {
    this.displayEvent.emit({ show: true, type: 'delete', id: albumId, execute: false, typeDelete: 'album'})
  }

  getUrlImage<String>(coverUrl) {
    if(String(coverUrl).split(':')[0] !== 'https') {
      coverUrl = '../../../assets/images/default-disk-soft.jpg'
    }
    return coverUrl
  }

}
