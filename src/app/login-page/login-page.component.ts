import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LoginserviceService} from '../services/loginservice.service';
import {CookieService} from 'ngx-cookie';



@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(private  loginservice: LoginserviceService, private cookieService: CookieService) {
  }
  userName = '';
  password = '';

  ngOnInit(): void {
  }

  loginuser() {
    this.loginservice.loginuser(this.userName, this.password).subscribe(resp => {
      if (resp.message === 'success') {
        const todayDate = new Date();       // 24 hours for cookie
        const tomorrow = new Date(todayDate);
        tomorrow.setDate(tomorrow.getDate() + 1);
        const cookieOption = {
          expires: tomorrow
        };
        this.cookieService.put('tokenData', resp.token, cookieOption);
        alert('Success');
        // this.router.navigate(['/']).then();       // import to main page
      } else {
        alert('Please Try Again!');
      }
      console.log(this.userName);
      console.log(resp);
    }, error => {
      console.log(error);
    });
  }

  }

