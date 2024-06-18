import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ObservableInput, catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ImagesService {
  constructor(private http: HttpClient) {}

  get images(): Observable<Array<String>> {
    return this.http.get<Array<String>>(`https://picsum.photos/v2/list`).pipe(
      map<any, any>((obj: Array<any>):any => {
        console.log({obj})
        return obj.map(({download_url}) => download_url)}),
      catchError((err: any): ObservableInput<any> => {
        throw new Error('Missing url')
      })
    );
  }
}
