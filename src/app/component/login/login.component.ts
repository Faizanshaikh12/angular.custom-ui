import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../register/auth-service.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // @ts-ignore
  // @ts-ignore
  form: any = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required, Validators.minLength(6)])
  });


  tutorial = {
    email: '',
    password: ''
  };
  submitted = false;
  constructor(private authService: AuthServiceService) { }

  ngOnInit(): void {
}
  saveTutorial(): void {
  const data = {
    email: this.tutorial.email,
    password: this.tutorial.password
  };


  this.authService.// @ts-ignore
    login(data).subscribe(response => {
        console.log(response);
        this.submitted = true;
      },
      // @ts-ignore
      error => {
        console.log(error);
      });
}
}
