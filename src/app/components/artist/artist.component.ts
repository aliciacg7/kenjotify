import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ArtistType } from 'src/app/models/artist/artist.module' 

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() artistInfo: ArtistType;

  @Input() enableDeleteArtist: boolean;

  @Output() displayEvent = new EventEmitter<any>();

  showDeleteModal() {
    this.displayEvent.emit({ show: true, type: 'delete' })
  }
}
