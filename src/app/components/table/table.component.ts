import { Component, OnInit } from '@angular/core';
import { GetUserService } from 'src/app/services/get-user.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  data!: any;
  search!: string;
  message!: string;
  displayedColumns: string[] = ['avatar', 'id', 'login'];

  constructor(private user: GetUserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.user.getUsers()
    .subscribe((data: any) => {
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
        this.data = data.items;
        this.message = '';
      },
      error => this.message = error.error.message
      )
    }
  }

}
