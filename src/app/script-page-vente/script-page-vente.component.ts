import { Component, OnInit } from '@angular/core';
import { ScriptAppService } from '../script-app.service';

@Component({
  selector: 'app-script-page-vente',
  templateUrl: './script-page-vente.component.html',
  styleUrls: ['./script-page-vente.component.scss']
})
export class ScriptPageVenteComponent implements OnInit {

  objet = {
    prenom: '',
    activite: '',
    desir: '',
    erreur: '',
    support: ''
  }

  constructor(private scriptService: ScriptAppService) { }

  ngOnInit(): void {
  }


  setFormulaire() {
    this.scriptService.formulaire = this.objet;
  }

}
