import {Injectable} from '@angular/core';
import {AbstractRequest} from './abstract-request';
import {HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ScannerService extends AbstractRequest {

  public startScanning(target, type: string): Observable<HttpResponse<any>> {//
    return this.http.post<HttpResponse<any>>(`${this.api}/scanner/start`, {
        target,
        type,
      }, {observe: 'response'},
    );
  }

  public fetchScanResult(id: string): Observable<HttpResponse<any>> {
    return this.http.get<HttpResponse<any>>(`${this.api}/scanner/${id}`,
      {observe: 'response'},
    );
  }
}
