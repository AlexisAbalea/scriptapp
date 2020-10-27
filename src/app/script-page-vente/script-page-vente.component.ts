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
    /*
    this.model.texte = 'Gagner pres de %%argent%% par seconde sans bouger de chez vous vous interesse ? Bonjour, mon nom est %%prenom%%. Cette technique est basé sur une méthode %%methode%%. C\'est tres simple, elle consiste %%principe%%, ça marche véritablement ! Bisous %%prenom%%';
    const map = new Map<String, QuestionReponse>();
    map.set('argent', {question: 'Combien ça rapporte ?', indication: 'Gagner pres de ... par seconde', reponse: ''});

    map.set('prenom', {question: 'Qui êtes-vous ?', indication: 'mon nom est ...', reponse: ''});

    map.set('methode', {question: 'D\'ou vient la méthode ?', indication: 'Cette technique est basé sur une méthode ... (exemple : de traders américains)', reponse: ''});

    map.set('principe', {question: 'Quel est le principe ?', indication: 'elle consiste ... (exemple : à parier sur des courbes)', reponse: ''});

    this.model.datas = map;
    */

    this.model.texte = `Si vous faites %%activite%%, prêtez attention à ce que je vais vous dire parce que c’est probablement LA vidéo la plus importante que vous allez regarder en 2018.

Si vous %%désir%% vous ne pouvez plus %%erreur%%. Ça ne marche pas. Ça ne marche plus.

Mais avant cela j'ai une question pour vous ...

Est-ce que vous êtes satisfait de %%situation%%?
Vous avez dû essayer %solutionObsolete% mais sans que ça fonctionne.
Peut-être que vous avez tout essayé et que vous avez baissé les bras.


Si c’est le cas, sachez que ce n’est pas votre faute. Il y a quelque chose qu’on ne nous dit pas. Mais … je n’en dis pas plus ici.

Restez avec moi jusqu’au bout parce que je vais vous montrer comment %%objectif%% sans %%penibilite%%.
Lisez ce que j’ai à vous dire maintenant parce qu’après ça sera trop tard.
Je m’appelle %%nomprenom%% et il y a quelques mois j’étais exactement dans votre situation.
Ça ne marchait juste pas, j’étais ridicule...
Tout le monde me disait de laisser tomber, que ce n’était pas possible / que ce n’était pas pour moi ...
J’ai dû appeler ma femme pour lui dire que %%drame%%

Et pourtant j’avais tout fait comme il faut %%actionpasse%%

Le problème c’est %%probleme%%
Comme je n’avais plus rien à perdre j’ai décidé de %%independance%%

J’ai d’abord essayé %%essai%% c’était intéressant mais pas encore suffisant.

J’ai aussi tenté %%essai2%% mais, pareil, les résultats n’étaient pas assez bons.

Puis je me suis tourné vers %%essaibizarre%% et là … là il s’est passé quelque chose d’incroyable !

C’est à ce moment que j’ai compris que si je n’avais pas réussi avant. C’était à cause de %%ennemis%% Et ce n’est pas étonnant que j’ai à ce point eu des difficultés.

Pendant des années on m’a fait croire que %%ennemis%% on m’a dit qu’il fallait faire %%mensonge%% et je les ai crus.

Le vrai problème ce sont les %%ennemiscommun%%. Ce sont eux qui nous empêchent de %%objectif%%.

Une fois que j’ai réalisé %%realise%% c’est là que j’ai vraiment commencé à %%resultat%% RAPIDEMENT.
Je n’avais pas réalisé au début mais ça permet aussi de %%beneficesecondaire%%, de %%beneficesecondaire2%% et de %%beneficesecondaire3%%.

Et c’est pour cette raison que j’ai créé %%produit%%.
Ça m’a pris des mois de travail, de développement, j’ai dû rassembler, j’ai travaillé avec les meilleurs experts, …
Ce qui me coûtait %%coutait%% me coûte que %%coute%% maintenant.
Du coup, je peux maintenant me focaliser sur %%beneficesupplementaire%%
Et les gens adorent voici ce qu’en pensent mes clients %%temoignage%%
Mais avant qu’on passe au choses sérieuses,
Laissez-moi vous poser une question :
Est-ce que ça vous dirait d’avoir accès à %%produit%% ?

Vous allez obtenir %%bonus%%, %%bonus2%% et %%bonus3%%.

La valeur totale de tout cela est de %%fauxprix%%€
Pour enfin réussir à %%objectif%% ça vaudrait le coup ?
Mais ce n’est pas le prix que je vais vous demander. Aujourd’hui je vous propose %%offre%% à seulement %%vraiprix%% €

Et ce que je vais faire, c’est prendre sur mes épaules tous les risques, votre achat est protégé par ma garantie %%garantie%%.
Par contre, vous devez vous dépêcher parce que %%urgence%%.
Mais imaginez comment vous allez vous sentir quand %%objectifatteint%%.

Tout ce que vous avez à faire c’est de cliquer sur le bouton qui va vous amener sur une page de commande sécurisée. Une fois que vous aurez commandé vous serez %%calltoaction%%
Pour ceux qui sont déjà passés à l’action voici ce qu’on va faire %%actionprochaine%%.

Vous voyez … pour moi ça ne change pas grand-chose %%raisonABL%%.

Tout ça c’est pour VOUS.

Sans %%offre%% vous allez continuer à %%penibilite%%.

Cela peut avoir l’air un peu dur, mais c’est la réalité.

La balle est dans votre camp.
Vous êtes libre de ne pas saisir cette opportunité mais %%penibilite%%.

Pour nous, ça ne va pas changer grand-chose.
Donc c’est vraiment à vous de faire un pas de notre direction et d’aller à l’étape suivante.
Rappelez-vous, pour uniquement %%vraiprix%% €, vous allez avoir accès à %%offre%% et enfin pouvoir %%objectif%%.
    `;

    const map = new Map<String, Map<String, QuestionReponse>>();
    const map1 = new Map<String, QuestionReponse>();
    const map2 = new Map<String, QuestionReponse>();
    const map3 = new Map<String, QuestionReponse>();
    const map4 = new Map<String, QuestionReponse>();
    map1.set('activite', {question: 'Quel est votre activité ?', indication: 'indication ...', reponse: ''});
    map1.set('désir', {question: 'Quel est votre désir ?', indication: 'indication ...', reponse: ''});
    map1.set('erreur', {question: 'Une erreur ?', indication: 'indication ...', reponse: ''});
    map1.set('solutionObsolete', {question: 'Les solutions obsolete ?', indication: 'indication ...', reponse: ''});
    map1.set('objectif', {question: 'Quel est l\'objectif ?', indication: 'indication ...', reponse: ''});
    map1.set('penibilite', {question: 'Penibilité', indication: 'indication ...', reponse: ''});
    map1.set('nomprenom', {question: 'Quel est votre nom ?', indication: 'indication ...', reponse: ''});
    map1.set('drame', {question: 'Un drame ?', indication: 'indication ...', reponse: ''});
    map2.set('actionpasse', {question: 'Action passé ?', indication: 'indication ...', reponse: ''});
    map2.set('probleme', {question: 'Probleme ?', indication: 'indication ...', reponse: ''});
    map2.set('independance', {question: 'Decision radicale ?', indication: 'indication ...', reponse: ''});
    map2.set('essai', {question: 'premier essai ?', indication: 'indication ...', reponse: ''});
    map2.set('essai2', {question: 'deuxieme essai ?', indication: 'indication ...', reponse: ''});
    map2.set('essaibizarre', {question: 'essai concluant ?', indication: 'indication ...', reponse: ''});
    map2.set('ennemis', {question: 'Ennemis ?', indication: 'indication ...', reponse: ''});
    map2.set('ennemiscommun', {question: 'Ennemis commun ?', indication: 'indication ...', reponse: ''});
    map2.set('realise', {question: 'Ce qui a ete realise ?', indication: 'indication ...', reponse: ''});
    map2.set('resultat', {question: 'Le resultat ?', indication: 'indication ...', reponse: ''});
    map2.set('beneficesecondaire', {question: 'Un benefice secondaire ?', indication: 'indication ...', reponse: ''});
    map3.set('beneficesecondaire2', {question: 'Un autre benefice ?', indication: 'indication ...', reponse: ''});
    map3.set('beneficesecondaire3', {question: 'Un dernier benefice ?', indication: 'indication ...', reponse: ''});
    map3.set('produit', {question: 'Quel est le produit ?', indication: 'indication ...', reponse: ''});
    map3.set('coutait', {question: 'Qu\'est ce que ça coûtait ?', indication: 'indication ...', reponse: ''});
    map3.set('coute', {question: 'Que\'est ce que ça coûte ?', indication: 'indication ...', reponse: ''});
    map3.set('beneficesupplementaire', {question: 'Un benefice supplementaire ?', indication: 'indication ...', reponse: ''});
    map3.set('temoignage', {question: 'Un temoignage ?', indication: 'indication ...', reponse: ''});
    map3.set('bonus', {question: 'Quel est le bonus ?', indication: 'indication ...', reponse: ''});
    map4.set('bonus2', {question: 'Un autre bonus ?', indication: 'indication ...', reponse: ''});
    map4.set('bonus3', {question: 'Encore un autre bonus ?', indication: 'indication ...', reponse: ''});
    map4.set('fauxprix', {question: 'Le faux prix ?', indication: 'indication ...', reponse: ''});
    map4.set('offre', {question: 'Une offre ?', indication: 'indication ...', reponse: ''});
    map4.set('vraiprix', {question: 'Quel est le vrai prix ?', indication: 'indication ...', reponse: ''});
    map4.set('urgence', {question: 'Raison de l\'urgence ?', indication: 'indication ...', reponse: ''});
    map4.set('objectifatteint', {question: 'L\'Objectif à atteindre ?', indication: 'indication ...', reponse: ''});
    map4.set('calltoaction', {question: 'Apres la commande vous serez ?', indication: 'indication ...', reponse: ''});
    map4.set('actionprochaine', {question: 'Les prochaines actions ?', indication: 'indication ...', reponse: ''});
    map4.set('raisonABL', {question: 'Raison ABL ?', indication: 'indication ...', reponse: ''});

    // this.model.datas = map;
    map.set('accroche', map1);
    map.set('intro', map2);
    map.set('action', map3);
    map.set('vente', map4);

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
    if (this.model.datas) {
      this.model.datas.forEach((valueGroupe, keyGroupe) => {
        (this.modelForm.get('datas') as FormArray).push(this.formBuilder.group({
            key: keyGroupe,
            data: this.formBuilder.array(this.getDataFormBuilder(valueGroupe))
          }));
      });
    }
  }

  getDataFormBuilder(valueGroupe) {
    const tab = [];
    valueGroupe.forEach((val, key) => {
      tab.push(this.formBuilder.group({
        key: key,
        question: val.question,
        reponse: [val.reponse, Validators.required],
        indication: val.indication
      }));
    });
    return tab;
  }

}
