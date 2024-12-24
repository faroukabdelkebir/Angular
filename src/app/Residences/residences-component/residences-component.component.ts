import { Component } from '@angular/core';
import { Residence } from 'src/app/core/models/residence';
import { ResidenceService } from 'src/app/core/service/residence.service';

@Component({
  selector: 'app-residences-component',
  templateUrl: './residences-component.component.html',
  styleUrls: ['./residences-component.component.css']
})
export class ResidencesComponentComponent {
  searchItem="";
  listResidences:Residence[]=[];
  listFavoris: Residence[] = [];
  visiblity=false;
  vv! :string;

  constructor(private residenceService : ResidenceService) { }

  ngOnInit() {
    this.residenceService.getResidences().subscribe(
      (data)=>{
        this.listResidences=data
      }
    )
  }

  deleteResidence(id: number): void {
    this.residenceService.deleteResidence(id).subscribe(() => {
      this.listResidences = this.listResidences.filter(res => res.id !== id);
    });
  }

    showLocation(r:Residence ){
      if (r.address=== "inconnu"){
        alert('adr inconnu')
      }
else{
  this.visiblity=true;
this.vv= r.name
}
    }


addFavoris(r:Residence){
  console.log(this.listFavoris);

if (this.listFavoris.includes(r)){
alert('already liked')
}
else{this.listFavoris.push(r);
console.log('tab', this.listFavoris);
}
}
}

