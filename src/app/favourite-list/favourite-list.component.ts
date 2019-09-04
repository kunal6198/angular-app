import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../app-service.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favourite-list',
  templateUrl: './favourite-list.component.html',
  styleUrls: ['./favourite-list.component.css']
})
export class FavouriteListComponent implements OnInit {
  public movies=[];

  constructor(private _movie : AppServiceService, private router: ActivatedRoute) { }

  ngOnInit() {
    this._movie.getFavourites()
      .subscribe(data => {
        console.log(data);
        this.movies = data;
      });
  }
  delFav(movie)
  {
    this._movie.deleteUser(movie.id).subscribe(
      ()=> console.log(`Movie with Id = ${movie.id}deleted`),
      (err) => console.log(err)
    );
  }

}
