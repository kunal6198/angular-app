import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { IMovie, DMovie, FMovie } from './movie';
//import { Result } from './movie';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {
  
  private apiUrl: string ="https://api.themoviedb.org/3/movie/top_rated?api_key=aa47bc266e8283a6d8dbdf41335f33d2&page=2";
  //data: any ={};
  constructor(private http: HttpClient) { }

  getMovies(): Observable<IMovie>{
    return this.http.get<IMovie>(this.apiUrl);
  }

  getDetails(Url: string) : Observable<DMovie>{
    return this.http.get<DMovie>(Url);
  }

  addToFav(movie): Observable<any> {
    return this.http.post<any>('http://localhost:3000/posts/', movie);
  }

  getFavourites(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/posts/');
  }
  deleteUser(id: number): Observable<any> {
    return this.http.delete<any>(`${'http://localhost:3000/posts/'}/${id}`);
  }
  getSearch(search: string): Observable<any>{
    return this.http.get<any>(search);

  }
}

