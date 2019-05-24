import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';
import { AuthData } from '../auth-data.model';

@Component({
   selector: 'app-login',
   templateUrl: './login.component.html',
   styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

   loginForm: FormGroup;

   constructor(private authService: AuthService) { }

   ngOnInit() {
      //this.loginForm.value.password = "";
      this.loginForm = new FormGroup({
         email: new FormControl(null,
            { validators: [Validators.required, Validators.email] }),
         password: new FormControl(null,
            { validators: [Validators.required] })
      });

   }

   onSubmit() {
      console.log(this.loginForm.value.email, this.loginForm.value.password);
      let authData: AuthData = {
         email: this.loginForm.value.email,
         password: this.loginForm.value.password
      };
      this.authService.login(authData);
   }
}
