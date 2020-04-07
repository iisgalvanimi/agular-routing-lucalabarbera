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
        'Bearer curl -X "GET" "https://api.spotify.com/v1/search?q=roses&type=track" -H "Accept: application/json" -H "Content-Type: application/json" -H "Authorization: Bearer BQCP8IqsfetqmaXvCkhQ-djcMcOQL85YEnpFYwYBXJLrZ5AMe0clGX2ghH_n4YHNBlsHFy9b-dzyr5PYLmpEOZeGHt3mOoijO9YFpPNN3nmCSDE5Kfo-SrNjlvPnG4CPXmUAZyNyxpNIjUXdE2I82vNSLWDK1NG-8L1eBag8Hthz8dzA"'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
  }
}
