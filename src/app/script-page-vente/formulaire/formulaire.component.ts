import { Component, Input, OnInit } from '@angular/core';
import { FormArray } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';

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

  getGroupeDatas(): FormArray {
    return this.modelForm.get('datas') as FormArray;
  }

  getDatas(dataGroupe): FormArray {
    return dataGroupe.get('data') as FormArray;
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
    for(let groupeData of this.getGroupeDatas().controls) {
      for(let data of this.getDatas(groupeData).controls) {
        const regex = new RegExp('%%'+data.get('key').value+'%%', 'g');
        if (data.get('reponse').value) {
          res = res.replace(regex, () => {
            return data.get('reponse').value;
          });
        }
      }
    }
    this.modelForm.get('texte').setValue(res);
  }
}
