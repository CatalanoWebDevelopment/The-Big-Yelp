import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) {}

  searchRestaurants(search, location, price): Observable<any> {
    const options = {
      headers: new HttpHeaders({
        Authorization: `Bearer SiJqNHg3CrbnCUl5Jt3qEOvdQzA4e_l4BcPw3Ky5RaIZoQQCSj1DhtizYDym9Gj4z7yoIxGjFEIW6TWNc9LUwUFPmDRC45jYeJUP2bQigO2xSciqVt7n4scukEfrW3Yx`
      })
    };
    return this.http.get(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${search}&price=${price}&location=${location}`,
      options
    );
  }
}
