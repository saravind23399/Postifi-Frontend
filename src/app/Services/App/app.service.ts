import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  resolveBackendUrl(segment: string) {
    return environment.backendUrl + segment
  }
}
