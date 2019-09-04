import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../app-service.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  public Id: number;
  public movies ;
  public Url: string;
  constructor(private _movie : AppServiceService, private router: ActivatedRoute,private http: HttpClient) { }

  ngOnInit() {
    let id = parseInt(this.router.snapshot.paramMap.get('id'));
    console.log(id);
    
    
    this.Url ="https://api.themoviedb.org/3/movie/" + id + "?api_key=aa47bc266e8283a6d8dbdf41335f33d2&language=en-US";
    this._movie.getDetails(this.Url)
      .subscribe(data => {
        console.log(data);
        this.movies = data;
      });
     


  }

  

}
