import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModelVente, QuestionReponse } from '../data/model-vente.model';

@Component({
  selector: 'app-script-page-vente',
  templateUrl: './script-page-vente.component.html',
  styleUrls: ['./script-page-vente.component.scss']
})
export class ScriptPageVenteComponent implements OnInit {

  modelForm: FormGroup;
  model: ModelVente;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initReactiveForm();
    this.getModel();
    this.setModelForm();
  }



  getModel() {
    this.model = new ModelVente;
    this.model.id = 1;
    this.model.categorie = 'email';
    this.model.texte = 'Gagner pres de %%argent%% par seconde sans bouger de chez vous vous interesse ? Bonjour, mon nom est %%prenom%%. Cette technique est basé sur une méthode %%methode%%. C\'est tres simple, elle consiste %%principe%%, ça marche véritablement ! Bisous %%prenom%%';
    const map = new Map<String, QuestionReponse>();
    map.set('argent', {question: 'Combien ça rapporte ?', indication: 'Gagner pres de ... par seconde', reponse: ''});

    map.set('prenom', {question: 'Qui êtes-vous ?', indication: 'mon nom est ...', reponse: ''});

    map.set('methode', {question: 'D\'ou vient la méthode ?', indication: 'Cette technique est basé sur une méthode ... (exemple : de traders américains)', reponse: ''});

    map.set('principe', {question: 'Quel est le principe ?', indication: 'elle consiste ... (exemple : à parier sur des courbes)', reponse: ''});

    this.model.datas = map;

    console.log(this.model);
  }

  initReactiveForm() {
    this.modelForm = this.formBuilder.group({
      id: '',
      categorie: '',
      texte: '',
      datas: this.formBuilder.array([])
    });
  }

  initDatas() {
    return this.formBuilder.group({
      key: '',
      question: '',
      reponse: '',
      indication: ''
    });
  }

  setModelForm() {
    this.modelForm.get('id').setValue(this.model.id);
    this.modelForm.get('categorie').setValue(this.model.categorie);
    this.modelForm.get('texte').setValue(this.model.texte);
    this.setDatasArray()
    console.log(this.modelForm);
  }

  setDatasArray() {
    this.model.datas.forEach((value, key) => {
      (this.modelForm.get('datas') as FormArray).push(this.formBuilder.group({
          key: key,
          question: value.question,
          reponse: [value.reponse, Validators.required],
          indication: value.indication
        }));
    });
  }

}
