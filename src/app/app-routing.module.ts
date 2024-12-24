import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { AddResidenceComponentComponent } from './Residences/add-residence-component/add-residence-component.component';
import { ResidenceDetailsComponentComponent } from './Residences/residence-details-component/residence-details-component.component';
import { ApartmentsComponentComponent } from './Apartments/apartments-component/apartments-component.component';
import { AddApartmentComponentComponent } from './Apartments/add-apartment-component/add-apartment-component.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ResidencesComponentComponent } from './Residences/residences-component/residences-component.component';

const routes: Routes = [
  {path: 'home1' , component: HomeComponent},
  {path: 'Residence' , component: ResidencesComponentComponent},

  { path: "adduser", component: UserComponent },
  { path: "addr", component: AddResidenceComponentComponent },

  { path: "residence", component: ResidencesComponentComponent },
  { path: "residence/details/:id", component: ResidenceDetailsComponentComponent},
  {path:"appart", component:ApartmentsComponentComponent},
  {path:"addApp", component:AddApartmentComponentComponent},
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
