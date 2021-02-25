import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from './auth-service.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router, RouterModule, Routes} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})

export class RegisterComponent implements OnInit {
  // @ts-ignore
  // @ts-ignore
  form: any = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required, Validators.minLength(6)])
  });

  tutorial = {
   name: '',
    email: '',
    password: ''
  };
  submitted = false;
  constructor(private authService: AuthServiceService, private router: Router) { }

  ngOnInit(): void {
  }
  saveTutorial(): void {
    this.router.navigateByUrl('/customers');
    const data = {
      name: this.tutorial.name,
      email: this.tutorial.email,
      password: this.tutorial.password
    };


    this.authService.// @ts-ignore
      create(data).subscribe(response => {
        console.log(response);
        this.submitted = true;
      },
      // @ts-ignore
      error => {
        console.log(error);
      });
  }
  newTutorial(): void {
    this.submitted = false;
    this.tutorial = {
      name: '',
      email: '',
      password: ''
    };
  }
}
