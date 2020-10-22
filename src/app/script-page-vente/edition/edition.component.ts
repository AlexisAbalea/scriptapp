import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ScriptAppService } from 'src/app/script-app.service';

@Component({
  selector: 'app-edition',
  templateUrl: './edition.component.html',
  styleUrls: ['./edition.component.scss']
})
export class EditionComponent implements OnInit {

  formulaire = {
    prenom: '',
    activite: '',
    desir: '',
    erreur: '',
    support: ''
  };

  resultat = `Si vous faites ${this.scriptService.formulaire.activite}, prêtez attention à ce que je vais vous dire parce que c’est probablement LA vidéo la plus importante que vous allez regarder en 2018.
Si vous ${this.scriptService.formulaire.desir} vous ne pouvez plus ${this.scriptService.formulaire.erreur}. Ça ne marche pas. Ça ne marche plus.
Bonjour je m’appelle ${this.scriptService.formulaire.prenom} et ceci est un(e) ${this.scriptService.formulaire.support} très spécial(e) … dans un instant je vais vous expliquer pourquoi.`;

  constructor(private scriptService: ScriptAppService) {

   }

  ngOnInit(): void {
    console.log(this.formulaire)
  }

}
