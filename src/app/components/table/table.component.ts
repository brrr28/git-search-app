import { Component, OnInit } from '@angular/core';
import { GetUserService } from 'src/app/services/get-user.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  // data: any;

  constructor(private user: GetUserService) { }

  ngOnInit(): void {
    this.user.getUsers();
  }

}
