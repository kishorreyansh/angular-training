import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { UserinfoService } from '../routing/service/userinfo.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  userRole: any;
  constructor(private userInfoService: UserinfoService){
    this.userRole = this.userInfoService.userRole;
  }

}
