import { Injectable } from '@angular/core';

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

  constructor() { }
}
