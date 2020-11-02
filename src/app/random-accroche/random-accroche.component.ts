import { Component, OnInit } from '@angular/core';
import { ScriptAppService } from '../script-app.service';

@Component({
  selector: 'app-random-accroche',
  templateUrl: './random-accroche.component.html',
  styleUrls: ['./random-accroche.component.scss']
})
export class RandomAccrocheComponent implements OnInit {

  accroche;

  spinner = false;

  listeAccroches = [];
  constructor(private service: ScriptAppService) { }

  ngOnInit(): void {
    this.recupererAccroche();
  }

  recupererAccroche() {
    this.spinner = true;
    this.service.getAccroches().subscribe(val => {
      if (val) {
        val.forEach(element => {
          this.listeAccroches.push(element);
        });
        this.getAccroche();
      }
    }, error => {
      console.error(error);
    }, () => {
      this.spinner = false;
    });
  }

  getAccroche() {
    const index = Math.floor(Math.random() * Math.floor(this.listeAccroches.length));
    this.accroche = this.listeAccroches[index];
  }

}
