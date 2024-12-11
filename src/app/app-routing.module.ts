import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResidenceComponent } from './residence/residence.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'home1' , component: HomeComponent},
  {path: 'Residence' , component: ResidenceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }