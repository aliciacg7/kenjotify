import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

import { AlbumType } from 'src/app/models/album/album.module'
import { map } from 'rxjs/operators';


@Injectable({providedIn: 'root'})

export class AlbumService {

  public url = environment.baseUrlAPI + 'album';

  constructor(private httpService: HttpClient) {}

  public getAllAlbums () {
    try {
      return this.httpService.get<AlbumType[]>(`${this.url}s/all`)
    } catch (error) {
      console.log(error);
    }
  }

  public createNewAlbum (newAlbum: AlbumType) {
    try {
      return this.httpService.post<AlbumType>(`${this.url}`, newAlbum)
    } catch (error) {
      console.log(error);
    }
  }

  public deleteAlbum (idAlbum: String) {
    try {
      return this.httpService.delete<AlbumType>(`${this.url}/${idAlbum}`)
    } catch (error) {
      console.log(error);
    }
  }
}
