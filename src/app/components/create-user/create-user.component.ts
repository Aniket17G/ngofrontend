import { Component } from '@angular/core';
import { Users } from '../../models/User';
import { UserserviceService } from '../../service/userservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css'
})
export class CreateUserComponent {

  constructor(private service :UserserviceService){

  }

  submitted=false
  user=new Users();
  onSubmit(){
    this.save();
    this.submitted=true;
  }
  save(){
    this.service.createUser(this.user).subscribe();
  }

}
