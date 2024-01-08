import { Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { AboutMeContainerComponent } from './components/about-me-container/about-me-container.component';
import { HomeComponent } from './components/home/home.component';
import { CertificateComponent } from './components/about-me-container/certificate/certificate.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutMeContainerComponent },
  { path: 'certification', component: CertificateComponent },
  { path: 'contact', component: ContactComponent },
];
