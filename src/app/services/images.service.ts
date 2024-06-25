import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ObservableInput, catchError, map } from 'rxjs';
import { Game } from './images.type';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ImagesService {
  constructor(private http: HttpClient) {}

  get staticGames(): Observable<Array<Game>> {
    return this.#games(`${environment.backend}/static`)
  }
  get dynamicGames(): Observable<Array<Game>> {
    return this.#games(environment.backend)
  }


  #games(url: string): Observable<Array<Game>> {
    return this.http.get<Array<Game>>(url).pipe(
      catchError((err: any): ObservableInput<Array<Game>> => {
        console.log({ err });
        throw new Error('Error just occured retrieving data');


      }),
    );
  }
}
