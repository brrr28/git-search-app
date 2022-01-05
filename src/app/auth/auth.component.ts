import { Component } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: 'auth.component.html',
  styleUrls: ['auth.component.scss']
})
export class AuthComponent {
  constructor() {
  }
  // login() {
  //   this.auth.signInWithEmailAndPassword('hello@da.com', '123456')
  // }
  logout() {
    console.log('Hello')
  }
}
