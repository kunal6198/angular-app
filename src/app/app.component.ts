import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppServiceService } from './app-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //template: `
  //  <h2> Movie Details </h2>
  //  <ul *ngFor="let movie of movies.results">
  //    <li>{{movie.vote_average}}--{{movie.original_title}}--{{movie.overview}}</li>
  //  </ul>
  //`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private _movie : AppServiceService,private router: Router) { }

  showFav()
  {
    this.router.navigate(['/favourites']);
  }
  movieSearch(search: string){
    this.router.navigate(['/searchbar',search]);
  }

}
