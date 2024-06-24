import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-404',
  standalone: true,
  imports: [],
  templateUrl: './404.component.html',
  styleUrl: './404.component.css'
})
export class MissingComponent{
  backend: string;

  constructor() {
    this.backend = environment.backend
  }



}
