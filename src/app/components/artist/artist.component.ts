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

  showDeleteModal(artistId) {
    this.displayEvent.emit({ show: true, type: 'delete', id: artistId, execute: false, typeDelete: 'artist' })
  }

  getUrlPhoto<String>(photoUrl:any) {
    if(photoUrl.split(':')[0] !== 'https') {
      photoUrl = '../../../assets/images/user_icon.png'
    }
    return photoUrl
  }

  beautifyDate(date:String) {
    let splittedDate = date.split('-');
    let d = splittedDate[2][0] + splittedDate[2][1];
    let m = splittedDate[1];
    let y = splittedDate[0]; 
    return d+'/'+m+'/'+y
  }
}
