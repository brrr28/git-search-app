import { Component } from '@angular/core';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

@Component({
  selector: 'app-auth',
  templateUrl: 'auth.component.html',
  styleUrls: ['auth.component.scss']
})
export class AuthComponent {
  constructor() {
  }
  login() {
    const auth = getAuth()
    createUserWithEmailAndPassword(auth, 'pavel@gmail.com', '123456')
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(userCredential)
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
  }
  logout() {
    console.log('Hello')
  }
}
