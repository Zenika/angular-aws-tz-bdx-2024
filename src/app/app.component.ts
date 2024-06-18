import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ImagesService } from './services/images.service';
import { Observable } from 'rxjs';

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
  public images$: Observable<Array<String>>

  constructor(public imageService: ImagesService){
    this.images$ = imageService.images

  }
}
