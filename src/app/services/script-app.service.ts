import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ScriptAppService {

  SERVER = environment.urlAddress;

  constructor(private http: HttpClient) { }

  getAccroches(): Observable<any> {
    return this.http.get(this.SERVER + '/api/accroche');
  }

  getAllAccroches(): Observable<any> {
    return this.http.get(this.SERVER + '/api/accroche/all');
  }

  createAccroche(accroche) {
    return new Promise<void>((resolve, reject) => {
      this.http.post(this.SERVER + '/api/accroche', { accroche: accroche })
        .subscribe((retour) => {
            resolve();
          }, (error) => {
            reject(error);
          }
        );
    });
  }

  deleteAccroche(id) {
    return new Promise<void>((resolve, reject) => {
      this.http.delete(this.SERVER + '/api/accroche/' + id)
        .subscribe((retour) => {
            resolve();
          }, (error) => {
            reject(error);
          }
        );
    });
  }

}
