import { Component, Input, OnInit } from '@angular/core';
import { saveAs } from 'file-saver';
@Component({
  selector: 'app-export',
  templateUrl: './export.component.html',
  styleUrls: ['./export.component.scss']
})
export class ExportComponent implements OnInit {

  @Input() modelForm;

  constructor() { }

  ngOnInit(): void {
  }


  downloadTxt() {
    console.log(this.modelForm.get('nom'));
    const blob = new Blob([this.modelForm.get('texte').value], {type: "text/plain;charset=utf-8"});
    const filename = this.modelForm.get('nom').value + '.txt';
    saveAs(blob, filename);
  }

}
