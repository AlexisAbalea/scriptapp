import { Component, Input, OnInit } from '@angular/core';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.scss']
})
export class FormulaireComponent implements OnInit {

  @Input() modelForm;

  constructor() { }

  ngOnInit(): void {
  }

  getDatas(): FormArray {
    return this.modelForm.get('datas') as FormArray;
  }


  setFormulaire() {
    this.sliceTexteModel();
  }

  /**
   * Pour chaque key cherche index et remplace par le model
   */
  sliceTexteModel() {
    const texte = this.modelForm.get('texte').value;
    let res = texte;
    for(let data of this.getDatas().controls) {
      const regex = new RegExp('%%'+data.get('key').value+'%%', 'g');
      if (data.get('reponse').value) {
        res = res.replace(regex, () => {
          return data.get('reponse').value;
        });
      }
    }
    this.modelForm.get('texte').setValue(res);
  }
}
