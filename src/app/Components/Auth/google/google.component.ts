
import { Component, OnInit } from '@angular/core';

import { AuthService as googleAuthService } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';
import { AuthService } from 'src/app/Services/Auth/auth.service';

@Component({
  selector: 'app-google',
  templateUrl: './google.component.html',
  styleUrls: ['./google.component.css']
})
export class GoogleComponent implements OnInit {
  user: SocialUser
  providers: Array<any>

  constructor(private googleAuthService: googleAuthService, private authService: AuthService) { }

  ngOnInit() {
    this.googleAuthService.readyState.subscribe((response) => {
      this.providers = response
    })
    this.googleAuthService.authState.subscribe((user) => {
      this.authService.checkGoogleIdToken(user.idToken).subscribe((response: any) => {
        console.log(response)
      }, (error)=>{
        console.log(error)
      })
    });
  }

  signInWithGoogle(): void {
    this.googleAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);

  }

  signOut(): void {
    this.googleAuthService.signOut();
  }
}