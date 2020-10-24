import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormArray } from '@angular/forms';

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
