import { Subject } from 'rxjs/Subject';  // used to emit events when user logs in/out 
import { User } from './user.model';
import { AuthData } from './auth-data.model';
import { MatButtonToggleGroupMultiple } from '@angular/material';

export class AuthService {

   private user: User;
   public authChange = new Subject<boolean>();

   constructor() { }


   registerUser(authData: AuthData) {

      this.user = {
         email: authData.email,
         userId: "" + Math.round(Math.random() * 10000)
      };
      // emit a value of true for authChange to indicate logged on
      this.authChange.next(true);
   }

   login(authData: AuthData) {
      this.user = {
         email: authData.email,
         userId: "" + Math.round(Math.random() * 10000)
      };
      // emit a value of true for authChange to indicate logged on
      this.authChange.next(true);
   }

   logout() {
      this.user = null;
      // emit a value of false for authChange to indicate logged off
      this.authChange.next(false);
   }

   getUser() {
      // use spread operator to return a copy of the user rather than a reference
      // to the actual user object.
      return { ...this.user };
   }

   isAuth() {
      return this.user !== null;
   }
}