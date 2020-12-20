import { Component, OnInit } from '@angular/core';
import { Register } from './register.model';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  register = new Register();
  data:any;
  message:any;
  status:any;
  constructor(
    private dataService:DataService,
    private route: Router
  ) { }

  ngOnInit(): void {
  }
  submit()
  {
     this.dataService.registerUser(this.register).subscribe(res=>{
     this.data = res;
     this.message = this.data.message;
     this.status = this.data.status;
     this.route.navigate(['/']);

    })
  }

}
