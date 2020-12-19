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
    let res = this.modelForm.get('texte').value;
    for(let groupeData of this.getGroupeDatas().controls) {
      for(let data of this.getDatas(groupeData).controls) {
        console.log('reponse -> key :', data.get('reponse').value, data.get('key').value);
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
