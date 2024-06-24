import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ObservableInput, catchError, map } from 'rxjs';
import { Game } from './images.type';


@Injectable({
  providedIn: 'root',
})
export class ImagesService {
  constructor(private http: HttpClient) {}

  get games(): Observable<Array<Game>> {
    return this.http.get<Array<Game>>(`https://picsum.photos/v2/list`).pipe(
      catchError((err: any): ObservableInput<any> => {
        throw new Error('Missing url')
      })
    );
  }
}
