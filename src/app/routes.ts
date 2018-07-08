import {Route} from '@angular/router';
import {PlacesInfoComponent} from './places-info/places-info.component';
import {places} from './info-mock';
import {SignUpComponent} from './user-forms/sign-up/sign-up.component';
import {SignInComponent} from './user-forms/sign-in/sign-in.component';

export const routes: Route [] = [
  {
    path: '',
    redirectTo: 'signup',
    pathMatch: 'full'
  },
  {
    path: 'signup',
    component: SignUpComponent
  },
  {
    path: 'signin',
    component: SignInComponent
  },
  {
    path: 'places',
    component: PlacesInfoComponent
  },
  {
    path: '**',
    redirectTo: 'signup'
  }
];
