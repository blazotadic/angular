import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Signup } from "../auth/models/signup.model";
import { AuthService } from "../auth/services/auth.service";

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html'
  })
export class SignupComponent{
    constructor(
        private authService: AuthService,
        private router: Router) { }

      signup(signupForm){
          console.log(signupForm.value)
          const signupData: Signup = signupForm.value;
          this.authService.authenticate(signupData)
          .subscribe(data => { 
            this.router.navigate(['login']);
          }, error => {
            console.log('Error occurred. Error data: ', error);
          });



      }

}


