import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScriptAppService {

  formulaire = {
    prenom: '',
    activite: '',
    desir: '',
    erreur: '',
    support: ''
  };

  SERVER = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  connectBackend() {
    return this.http.get(this.SERVER + '/api/connect');
  }

  getAccroches(): Observable<any> {
    return this.http.get(this.SERVER + '/api/accroche');
  }

  getAllAccroches(): Observable<any> {
    return this.http.get(this.SERVER + '/api/accroche/all');
  }

  createAccroche(accroche) {
    return new Promise((resolve, reject) => {
      this.http.post('http://localhost:3000/api/accroche', { accroche: accroche })
        .subscribe((retour) => {
            resolve();
          }, (error) => {
            reject(error);
          }
        );
    });
  }

  deleteAccroche(id) {
    return new Promise((resolve, reject) => {
      this.http.delete('http://localhost:3000/api/accroche/' + id)
        .subscribe((retour) => {
            resolve();
          }, (error) => {
            reject(error);
          }
        );
    });
  }

}
