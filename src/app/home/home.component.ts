import { Component } from '@angular/core';
import { Residence } from '../core/models/residence';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
 //début Interpolation 
 VAR1 = 10

 getDateTime(): string {
   return new Date().toLocaleTimeString();
   }

 isTrue = true;

 items = ['Item 1', 'Item 2', 'Item 3'];
//fin Interpolation
 


 //début property banding
 imgsrc = "https://www.coursinfo.fr/wp-content/uploads/2016/04/facebook-logo.jpg"
 imgAlt = 'Errer photo not found'

 isAvailable = true;

 color = 'red';
 categorie = 'clothes';

 nameDetails = 'The name of the actor is <b>Will Smith</b>';
 //fin property banding

 

//début event banding
 FunctionOnButtonClick () {
   alert("Hello 4SE 3")
 }
//fin event banding




 //début Two way binding
 VAR3 = ""
 //fin Two way binding



//début Les directives structurelles
 listResidences:Residence[]=[
   {id:1,
     "name": "El fel",
     "address":"Borj Cedria",
   "image":"../../assets/images/R1.jpeg", 
   status: "Disponible"},

   {id:2,
     "name": "El yasmine",
   "address":"Ezzahra",
   "image":"../../assets/images/R2.jpg", 
   status: "Disponible" },

   {id:3,
     "name": "El Arij",
   "address":"Rades",
   "image":"../../assets/images/R3.jpg", 
   status: "Vendu"},

   {id:4,
     "name": "El Anber",
     "address":"inconnu",
   "image":"../../assets/images/R4.jpg", 
   status: "En Construction"}
   ];
   
   
 Function2 (e : Residence) {
   if(e.address === "inconnu"){
     alert("adresse inconnu")
   }
   else {
     alert (e.address)
   }
 }

 //fin Les directives structurelles


}
