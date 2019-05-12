import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppService } from '../App/app.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private appService: AppService) { }

  checkGoogleIdToken(idToken: string) {
    const body = { idToken: idToken };
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.appService.resolveBackendUrl('/auth/google/resolveToken'),body,{headers: headers, observe: 'response'})
  }
}
