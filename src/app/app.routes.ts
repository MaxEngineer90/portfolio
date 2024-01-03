import { Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { AboutMeContainerComponent } from './components/about-me-container/about-me-container.component';

export const routes: Routes = [
  { path: '', redirectTo: '/about-me', pathMatch: 'full' },
  { path: 'about-me', component: AboutMeContainerComponent },
  { path: 'contact', component: ContactComponent },
];
