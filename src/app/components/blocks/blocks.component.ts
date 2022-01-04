import { Component, OnInit } from '@angular/core';
import { GetUserService } from 'src/app/services/get-user.service';

@Component({
  selector: 'app-blocks',
  templateUrl: './blocks.component.html',
  styleUrls: ['./blocks.component.scss']
})
export class BlocksComponent implements OnInit {

  data!: any;
  userSingle!: any;
  search!: string;
  message!: string;
  howUsers!: number; 

  constructor(private user: GetUserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.user.getUsers()
    .subscribe((data: any) => {
      this.data = data;
      this.message = '';
      this.howUsers = 20;
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
        this.howUsers = data.total_count;
        console.log(this.howUsers)
        this.data = data.items;
        this.message = '';
      },
      error => this.message = error.error.message
      )
    }
  }

}
