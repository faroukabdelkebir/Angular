import { Component } from '@angular/core';
import { Residence } from '../core/models/residence';

@Component({
  selector: 'app-residence',
  templateUrl: './residence.component.html',
  styleUrls: ['./residence.component.css']
})
export class ResidenceComponent {

  id!: number;
    name!: string;
    address!: string; 
    image!: string;
    status!: string;


    

  listeFavoris : ResidenceComponent[] = [];


 ajouterFavoris(residence: ResidenceComponent) {
  if (this.listeFavoris.includes(residence)) {
      this.listeFavoris.push(residence);
      console.log(`Résidence ajoutée aux favoris : ${residence.name}`);
  } else {
      console.log(`Résidence déjà dans les favoris : ${residence.name}`);
  }
}

searchQuery: string = ''; // Valeur de la recherche

/*get filteredResidences(): Residence[] {
  return this.listResidences.filter(residence =>
    residence.address.toLowerCase().includes(this.searchQuery.toLowerCase())
  );
}*/

}