import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';

import { AppService } from '../app.service';

@Component({
  selector: 'app-request-reset',
  templateUrl: './request-reset.component.html',
  styleUrls: ['./request-reset.component.css']
})
export class RequestResetComponent implements OnInit {

resetForm: FormGroup;

  public form = {
    email: null
  };

  constructor(private appService: AppService,
              private router: Router) { }

  ngOnInit(): void {
  }

  resetpass(){

  }
  // reset(){
  // this.appService.reset(()=>{
  //   this.router.navigateByUrl('/request-reset');
  // });}

}
