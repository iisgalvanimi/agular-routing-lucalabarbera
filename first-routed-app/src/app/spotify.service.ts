import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
   //url per oauth: https://developer.spotify.com/console/get-search-item/
  constructor(private http: HttpClient) { }

  searchTrack(query: string) {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQCpULnoVneVNt0cj0Tkj-zBFvDqk3Gbf7yri4ubllsYPcIwDx3ByCvMMUBrgvw028GqKVkShqlHyW6IxaVIs8m28O--qBbSjeb6S1whaVRExXJCnNzwJLE7aQSAIV9I2KtejJBrmP7I1_rL05iTRs5kebMQbVpUGJylQplBJ3YxROdh'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
  }
}
