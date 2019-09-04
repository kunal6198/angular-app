import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../app-service.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  public movies=[] ;
  public Url;

  constructor(private _movie : AppServiceService, private router: ActivatedRoute) { }

  ngOnInit() {
    let id = (this.router.snapshot.paramMap.get('search'));

    this.Url ="https://api.themoviedb.org/3/search/movie?api_key=aa47bc266e8283a6d8dbdf41335f33d2&language=en-US&query="+id+"&page=1&include_adult=false";
    this._movie.getSearch(this.Url)
      .subscribe(data => {
        console.log(data);
        this.movies = data.results;
      });
  }
  onSearchFav(movie)
  {
    return this._movie.addToFav(movie).subscribe();
  }

}
