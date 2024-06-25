import { AsyncPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { ImagesService } from '../services/images.service';
import { BehaviorSubject, Observable, catchError, throwError } from 'rxjs';
import { Game } from '../services/images.type';

@Component({
  selector: 'app-games',
  standalone: true,
  templateUrl: './games.component.html',
  styleUrl: './games.component.css',
  imports: [RouterOutlet, AsyncPipe],
  providers: [ImagesService],

})
export class GamesComponent {
  @Input({required: true}) games$: Observable<Array<Game>> = new BehaviorSubject<Array<Game>>([]);
}
