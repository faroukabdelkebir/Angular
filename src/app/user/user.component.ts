import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  userForm = new FormGroup({

    username: new FormControl('',Validators.required),
    email: new FormControl('',[Validators.required, Validators.email])

    });

    addUser(){
      const userData = this.userForm.value;

      console.log(userData);

    }
}
