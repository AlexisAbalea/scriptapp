import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  accesUtilisateur: boolean;
  accesPageVente: boolean;
  accesAccroche: boolean;
  constructor() { }

  ngOnInit(): void {
  }

  changeMenu(event) {
    this.accesUtilisateur = false;
    this.accesPageVente = false;
    this.accesAccroche = false;

    if(event === 'util') {
      this.accesUtilisateur = true;
    }
    if(event === 'pageVente') {
      this.accesPageVente = true;
    }
    if(event === 'accroche') {
      this.accesAccroche = true;
    }
  }

}
