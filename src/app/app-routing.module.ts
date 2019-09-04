import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { FavouriteListComponent } from './favourite-list/favourite-list.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { SearchBarComponent } from './search-bar/search-bar.component';


const routes: Routes = [
  { path: 'movieDetails/:id', component: MovieDetailComponent},
  { path: 'favourites', component: FavouriteListComponent},
  { path: '', component: MovieListComponent},
  { path: 'searchbar/:search', component: SearchBarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[MovieDetailComponent,FavouriteListComponent,MovieListComponent,SearchBarComponent]