import { Routes } from '@angular/router';
import { MissingComponent } from './404/404.component';
import { StaticComponent } from './static/static.component';
import { DynamicComponent } from './dynamic/dynamic.component';

export const routes: Routes = [{
  path: '404',
  component: MissingComponent,
},{
  path: 'static',
  component: StaticComponent,
},{
  path: 'dynamic',
  component: DynamicComponent,
}];
