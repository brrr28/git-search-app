import { Component, OnInit } from '@angular/core';
import { GetUserService } from 'src/app/services/get-user.service';
import { IUser } from '../blocks/blocks.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  data!: IUser[];
  search!: string;
  message!: string;
  displayedColumns: string[] = ['avatar', 'id', 'login'];

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
        this.data = [data];
        console.log(data)
        this.message = '';
      },
      error => this.message = error.error.message
      )
    }
  }

}
