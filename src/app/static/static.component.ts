import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { ImagesService } from '../services/images.service';
import { Observable, catchError, throwError } from 'rxjs';
import { Game } from '../services/images.type';
import { GamesComponent } from '../games/games.component';

@Component({
  selector: 'app-static',
  standalone: true,
  templateUrl: './static.component.html',
  styleUrl: './static.component.css',
  imports: [RouterOutlet, AsyncPipe, GamesComponent],
  providers: [ImagesService],
})
export class StaticComponent {
  protected games$: Observable<Array<Game>>;
  protected backend: string;

  constructor(
    public imageService: ImagesService,
    router: Router,
  ) {
    this.backend = imageService.staticUrl;
    this.games$ = imageService.staticGames.pipe(
      catchError((err) => {
        router.navigate(['/404']);
        return throwError(
          () => new Error('Could not find static matching products. Redirecting...'),
        );
      }),
    );
  }
}
