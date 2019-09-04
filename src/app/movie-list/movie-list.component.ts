import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../app-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  search_m : string;
  public movies = [];

  constructor(private _movie : AppServiceService,private router: Router,private moviefav : AppServiceService) { }

  ngOnInit() {
    this._movie.getMovies()
      .subscribe(data => {
        console.log(data);
        this.movies = data.results;
      });
  }
  Search()
  {
    if(this.search_m!="")
    {
      this.movies = this.movies.filter(data=>{
      return data.title.toLocaleLowerCase().match(this.search_m.toLocaleLowerCase());
      });
    }
    else this.ngOnInit();
  }

  onSelect(movie)
  {
    this.router.navigate(['/movieDetails',movie.id])
  }

  onFav(movie) 
  {
    return this.moviefav.addToFav(movie).subscribe();
  } 

}
