import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) {}

  searchRestaurants(search, location, price): Observable<any> {
    const options = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${process.env.API_KEY}`
      })
    };
    return this.http.get(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${search}&price=${price}&location=${location}`,
      options
    );
  }
}
