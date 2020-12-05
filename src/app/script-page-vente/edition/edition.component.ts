import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-edition',
  templateUrl: './edition.component.html',
  styleUrls: ['./edition.component.scss']
})
export class EditionComponent implements OnInit {

  @Input() modelForm;

  constructor() {

   }

  ngOnInit(): void {

  }

}
