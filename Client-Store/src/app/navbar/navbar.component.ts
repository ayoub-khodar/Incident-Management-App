import { Component, OnInit , Input , Output , EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { PrincipalState} from '../shared/principal.state';
import { Principal} from '../shared/principal.model';
import { AppService } from '../app.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private principal : Principal;

@Input()
showSideBar: boolean;

@Output()
showSideBarChange : EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor(private appService: AppService, private router: Router, private store : Store<PrincipalState>) { }


  ngOnInit() {
    this.store.select('principal').subscribe(principal => {
      this.principal = principal;
    })
  }


  afficherSideBar(){
    this.showSideBar = !this.showSideBar;
    this.showSideBarChange.emit(this.showSideBar);
  }

  hasRoleUser(){
    let hasRole: boolean = false;
    this.principal.authorities.forEach(item => {
      if (item.authority === "ROLE_USER"){
        hasRole = true;
      }
    });
    return hasRole;
  }
  hasRoleAdmin(){
    let hasRole: boolean = false;
    this.principal.authorities.forEach(item => {
      if (item.authority === "ROLE_ADMIN"){
        hasRole = true;
      }
    });
    return hasRole;
  }

  logout(){
  this.appService.logout(()=>{
    this.router.navigateByUrl('/login');
  });
}
}
