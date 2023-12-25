import { Routes } from '@angular/router';
import {AboutMeComponent} from "./components/about-me/about-me.component";
import {ContactComponent} from "./components/contact/contact.component";

export const routes: Routes = [
  { path: '', redirectTo: '/about-me', pathMatch: 'full' },
  { path: 'about-me', component: AboutMeComponent },
  { path: 'contact', component: ContactComponent }
];
