import {HttpClient} from '@angular/common/http';
import {APP_CONFIG} from '../../../environments/environment.dev';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class AbstractRequest {
  protected api: string;

  constructor(protected http: HttpClient) {
    this.api = 'http://192.168.1.62:3000/v1';//`http://${APP_CONFIG.apiServer}:${APP_CONFIG.apiPort}/${APP_CONFIG.apiVersion}`;
  }

}
