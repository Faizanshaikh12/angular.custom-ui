import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-ncform',
  templateUrl: './ncform.component.html',
  styleUrls: ['./ncform.component.css']
})
export class NcformComponent implements OnInit {

  form: any;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.form = new FormGroup(
      {
        name: new FormControl('', Validators.required),
        city: new FormControl('', Validators.required),
        age: new FormControl('', Validators.required)
      }
    );
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  add() {
    const data: any = this.form.value;
    this.router.navigate(['customers'], {
      queryParams: {data: btoa(JSON.stringify(data))}
    });
  }
  // tslint:disable-next-line:typedef
  close(){

  }
}
