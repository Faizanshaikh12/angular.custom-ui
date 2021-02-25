import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../register/auth-service.service';
import {any} from 'codelyzer/util/function';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})


export class OrdersComponent implements OnInit {

  data: any = [];

  constructor(private authService: AuthServiceService) {
    this.authService.getAll().subscribe(data => {
      this.data = data;
      console.log(data);
    });
  }

  ngOnInit(): void {
  }


}
