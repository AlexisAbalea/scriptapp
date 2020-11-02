import { HttpClient } from '@angular/common/http';
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
    return this.http.get(this.SERVER + '/api/accroches');
  }
}
