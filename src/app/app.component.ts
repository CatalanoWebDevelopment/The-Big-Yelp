import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'The-Big-Yelp';
  businesses: any;
  constructor(private data: DataService) {}

  onClick(search, location, price): void {
    this.data
      .searchRestaurants(search, location, price)
      .subscribe(data => (this.businesses = data.businesses));
  }
}
