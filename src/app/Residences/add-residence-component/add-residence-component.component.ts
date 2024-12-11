import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-residence-component',
  templateUrl: './add-residence-component.component.html',
  styleUrls: ['./add-residence-component.component.css']
})
export class AddResidenceComponentComponent {

  residenceForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.residenceForm = this.fb.group({
      id: [''],
      name: ['', [Validators.required, Validators.minLength(3)]],
      address: ['', Validators.required],
      image: ['', [Validators.required, Validators.pattern('(https?:\\/\\/.*\\.(?:png|jpg|jpeg))')]],
      status: ['Disponible', Validators.required],
      apartments: this.fb.array([])
    });
  }


  get apartments(): FormArray {
    return this.residenceForm.get('apartments') as FormArray;
  }


  addApartment() {
    const apartmentGroup = this.fb.group({
      apartNum: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      floorNum: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      surface: ['', Validators.required],
      terrace: ['yes', Validators.required],
      surfaceTerrace: [{ value: '', disabled: true }, Validators.pattern('^[0-9]+$')],
      category: ['S+1', Validators.required],
      residence: ['']
    });

    
    apartmentGroup.get('terrace')?.valueChanges.subscribe((value) => {
      const surfaceControl = apartmentGroup.get('surfaceTerrace');
      if (value === 'yes') {
        surfaceControl?.enable();
      } else {
        surfaceControl?.disable();
        surfaceControl?.reset();
      }
    });

    this.apartments.push(apartmentGroup);
  }


  removeApartment(index: number) {
    this.apartments.removeAt(index);
  }


  onSubmit() {
    if (this.residenceForm.valid) {
      console.log('Résidence et appartements:', this.residenceForm.value);
    }
  }


  onReset() {
    this.residenceForm.reset({
      status: 'Disponible'
    });
    this.apartments.clear();
  }
}
