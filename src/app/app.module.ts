import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResidenceComponent } from './residence/residence.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ApartmentsComponent } from './appartements/apartments/apartments.component';
import { ResidencesComponentComponent } from './Residences/residences-component/residences-component.component';
import { ResidenceDetailsComponentComponent } from './Residences/residence-details-component/residence-details-component.component';
import { AddResidenceComponentComponent } from './Residences/add-residence-component/add-residence-component.component';
import { ApartmentsComponentComponent } from './Apartments/apartments-component/apartments-component.component';
import { ApartmentsByResidenceComponentComponent } from './Apartments/apartments-by-residence-component/apartments-by-residence-component.component';
import { AddApartmentComponentComponent } from './Apartments/add-apartment-component/add-apartment-component.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ResidenceComponent,
    PageNotFoundComponent,
    ApartmentsComponent,
    ResidencesComponentComponent,
    ResidenceDetailsComponentComponent,
    AddResidenceComponentComponent,
    ApartmentsComponentComponent,
    ApartmentsByResidenceComponentComponent,
    AddApartmentComponentComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
