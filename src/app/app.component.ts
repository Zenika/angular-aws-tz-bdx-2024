import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ImagesService } from './services/images.service';
import { Observable } from 'rxjs';
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

  constructor(public imageService: ImagesService){
    this.games$ = imageService.games

  }
}
