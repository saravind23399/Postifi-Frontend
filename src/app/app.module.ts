import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AuthServiceConfig, GoogleLoginProvider, SocialLoginModule } from 'angularx-social-login';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoogleComponent } from './Components/Auth/google/google.component';
import { environment } from 'src/environments/environment';
import { AuthService } from './Services/Auth/auth.service';
import { AppService } from './Services/App/app.service';

const authServiceConfig = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider(environment.auth.google.clientId)
  },
]);

@NgModule({
  declarations: [
    AppComponent,
    GoogleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocialLoginModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: ()=>authServiceConfig
    },
    AuthService,
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
