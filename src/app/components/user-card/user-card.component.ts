import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetUserService } from 'src/app/services/get-user.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {

  login!: string;
  userData: any;

  constructor(private route: ActivatedRoute, private user: GetUserService, private location: Location) { }

  ngOnInit(): void {
    this.route.params.subscribe( (data: any) => {
      this.login = data.login
    }
    )
    this.getUser()
  }

  back() {
    this.location.back();
  }

  getUser() {
    this.user.getUser(this.login)
    .subscribe(data => {
      this.userData = data
    }) 
  }

}
