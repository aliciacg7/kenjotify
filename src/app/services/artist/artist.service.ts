import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  public url = environment.baseUrlAPI + 'artist';

  constructor(private httpService: HttpClient) {}

  public getAllArtists () {
    return this.httpService.get(`${this.url}s/all`);
  }
}
