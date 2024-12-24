import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-residence-details-component',
  templateUrl: './residence-details-component.component.html',
  styleUrls: ['./residence-details-component.component.css']
})
export class ResidenceDetailsComponentComponent {
  residenceId: any
  constructor( private activatedroute : ActivatedRoute) { }
  ngOnInit(): void {
    this.residenceId = this.activatedroute.snapshot.paramMap.get('id');

  }

}
