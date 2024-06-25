import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { ImagesService } from '../services/images.service';
import { Observable, catchError, throwError } from 'rxjs';
import { Game } from '../services/images.type';
import { GamesComponent } from '../games/games.component';

@Component({
  selector: 'app-dynamic',
  standalone: true,
  templateUrl: './dynamic.component.html',
  styleUrl: './dynamic.component.css',
  imports: [RouterOutlet, AsyncPipe, GamesComponent],
  providers: [ImagesService],

})
export class DynamicComponent {
  public games$: Observable<Array<Game>>

  constructor(public imageService: ImagesService, private router: Router){
    this.games$ = imageService.dynamicGames.pipe(
      catchError((err) => {
        router.navigate(['/404']);
        return throwError(() => new Error('Could not find matching products. Redirecting...'))
      })
    );
  }
}
