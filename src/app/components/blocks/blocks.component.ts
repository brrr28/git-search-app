import { Component, OnInit } from '@angular/core';
import { GetUserService } from 'src/app/services/get-user.service';

export interface IUser {
  login: string;
  avatar_url: string;
  id: number;
}

@Component({
  selector: 'app-blocks',
  templateUrl: './blocks.component.html',
  styleUrls: ['./blocks.component.scss']
})
export class BlocksComponent implements OnInit {

  data!: IUser[];
  userSingle!: any;
  search!: string;
  message!: string;

  constructor(private user: GetUserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.user.getUsers()
    .subscribe((data: IUser[]) => {
      this.data = data;
      this.message = '';
    },
    error => this.message = error.error.message
    )
  }

  getUser(): void {
    if(!this.search) {
      this.getUsers()
    } else {
      this.user.getUser(this.search)
      .subscribe(data => {
        this.data = [];
        this.userSingle = data;
        this.message = '';
      },
      error => this.message = error.error.message
      )
    }
  }

}
