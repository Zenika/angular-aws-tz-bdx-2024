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

  get games(): Observable<Array<Game>> {
    console.log({ backend: environment.backend });
    return this.http.get<Array<Game>>(environment.backend).pipe(
      catchError((err: any): ObservableInput<any> => {
        console.log({ err });
        throw new Error('Error just occured retrieving data');
      }),
    );
  }
}
