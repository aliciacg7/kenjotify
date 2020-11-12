import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ArtistType } from 'src/app/models/artist/artist.module';


@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  public url = environment.baseUrlAPI + 'artist';

  constructor(private httpService: HttpClient) {}

  public getAllArtists () {
    try {
      return this.httpService.get<ArtistType[]>(`${this.url}s/all`);
    } catch (error) {
      console.log(error);
    }
  }

  public createNewArtist (newArtist: ArtistType) {
    try {
      return this.httpService.post<ArtistType>(`${this.url}`, newArtist)
    } catch (error) {
      console.log(error);
    }
  }

  public deleteArtist (idArtist: String) {
    try {
      return this.httpService.delete<ArtistType>(`${this.url}/${idArtist}`)
    } catch (error) {
      console.log(error);
    }
  }
}
