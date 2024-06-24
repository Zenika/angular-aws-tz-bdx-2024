import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { ImagesService } from './services/images.service';
import { Observable, catchError, map, tap, throwError } from 'rxjs';
import { Game } from './services/images.type';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe],
  providers: [ImagesService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'aws-ng-front';
  public games$: Observable<Array<Game>>

  constructor(public imageService: ImagesService, private router: Router){
    this.games$ = imageService.games.pipe(
      catchError((err) => {
        router.navigate(['/404']);
        return throwError(() => new Error('Could not find matching products. Redirecting...'))
      })
    );
  }
}
