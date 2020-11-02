import { Component, OnInit } from '@angular/core';
import { ScriptAppService } from '../script-app.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  constructor(private service: ScriptAppService) { }

  ngOnInit(): void {
    this.service.connectBackend().subscribe(val => {
      console.log(val);
    }, error => {
      console.log('error : ', error);
    });
  }

}
