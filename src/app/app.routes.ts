import { Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { PetsComponent } from './pages/pets/pets.component';
import { PetDetailsComponent } from './pages/pet-details/pet-details.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'pets', component: PetsComponent },
      { path: 'pets/:id', component: PetDetailsComponent },
      { path: 'error', component: ErrorPageComponent },
    ],
  },
];
