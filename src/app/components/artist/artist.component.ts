import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() artistInfo: any;

  @Input() enableDeleteArtist: boolean;

  @Output() displayEvent = new EventEmitter<boolean>();

  showDeleteModal() {
    this.displayEvent.emit(true)
  }
}
