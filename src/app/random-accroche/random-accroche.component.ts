import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-random-accroche',
  templateUrl: './random-accroche.component.html',
  styleUrls: ['./random-accroche.component.scss']
})
export class RandomAccrocheComponent implements OnInit {

  accroche;

  listeAccroches = ['Wesh', 'bien ou quoi ?', 'Salut', 'Tu veux devenir riche ?', 'Salut, tu aimes les patates ?', 'Donnez moi de la moula', 'Salut jeune entrepreneur', 'Tu veux la vie de rêve ?', 'Revenu passif rapidemment'];
  constructor() { }

  ngOnInit(): void {
    this.getAccroche();
  }

  getAccroche() {
    const index = Math.floor(Math.random() * Math.floor(this.listeAccroches.length));
    this.accroche = this.listeAccroches[index];
  }

}
