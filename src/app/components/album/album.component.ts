import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {

  ngOnInit(): void {
  }

  @Input() albumInfo: any;

  @Input() enableDeleteAlbum: boolean;

  @Output() displayEvent = new EventEmitter<boolean>();

  constructor() {}

  showDeleteModal() {
    this.displayEvent.emit(true)
  }

}
