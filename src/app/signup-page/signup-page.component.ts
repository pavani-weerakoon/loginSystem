import { Component, OnInit } from '@angular/core';
import {LoginserviceService} from '../services/loginservice.service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent implements OnInit {
  constructor(private  loginservice: LoginserviceService) {
  }

  userName = '';
  password = '';

  ngOnInit(): void {
  }
  userRegister() {
    this.loginservice.userRegister(this.userName, this.password).subscribe(resp => {
      console.log(resp);
      if (resp.message === 'success') {
        alert('Success');
      } else {
        alert('Already Exists!');
      }
      }, (error: any) => {
      console.log(error);
    });


  }
}
