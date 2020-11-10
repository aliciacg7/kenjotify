import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  public url = environment.baseUrlAPI + 'album';

  constructor(private httpService: HttpClient) {}

  public getAllAlbums () {
    return this.httpService.get(`${this.url}s/all`);
  }
}
