    
import { Component, OnInit } from '@angular/core';

import { AuthService as googleAuthService } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';
import { map } from 'rxjs/operators';
import { AuthService } from 'src/app/Services/Auth/auth.service';

@Component({
  selector: 'app-google',
  templateUrl: './google.component.html',
  styleUrls: ['./google.component.css']
})
export class GoogleComponent implements OnInit {
  user: SocialUser;

  constructor(private googleAuthService: googleAuthService, private authService: AuthService) { }

  ngOnInit() {
    this.googleAuthService.authState.subscribe((user) => {
      this.authService.checkGoogleIdToken(user.idToken).subscribe((response: any)=>{
        console.log(response)
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