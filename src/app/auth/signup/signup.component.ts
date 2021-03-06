import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { AuthData } from '../auth-data.model';

@Component({
   selector: 'app-signup',
   templateUrl: './signup.component.html',
   styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

   maxDate: Date;
   constructor(private authService: AuthService) { }

   ngOnInit() {
      this.maxDate = new Date();
      this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
   }

   onSubmit(form: NgForm) {
      console.log(form);
      let authData: AuthData = {
         email: form.value.email,
         password: form.value.password
      };
      this.authService.registerUser(authData);
   }

}
