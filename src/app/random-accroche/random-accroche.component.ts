import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-random-accroche',
  templateUrl: './random-accroche.component.html',
  styleUrls: ['./random-accroche.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class RandomAccrocheComponent implements OnInit {

  // Genre False = Feminin, True = Masculin
  produits: Produits[] = [
    {value: '', viewValue: 'Autre', genre: false },
    {value: 'livre', viewValue: 'Livre', genre: true},
    {value: 'guide', viewValue: 'Guide', genre: true},
    {value: 'ebook', viewValue: 'Ebook', genre: true},
    {value: 'rapport', viewValue: 'Rapport', genre: true},
    {value: 'dossier', viewValue: 'Dossier', genre: true},
    {value: 'logiciel', viewValue: 'Logiciel', genre: true},
    {value: 'pack', viewValue: 'Pack', genre: true},
    {value: 'formation', viewValue: 'Formation', genre: false},
    {value: 'programme', viewValue: 'Programme', genre: true},
    {value: 'méthode', viewValue: 'Méthode', genre: false},
    {value: 'technique', viewValue: 'Technique', genre: false},
    {value: 'webinaire', viewValue: 'Webinaire', genre: true},
    {value: 'seminaire', viewValue: 'Séminaire', genre: true}
  ];


  reponse;

  resultat = '';

  ngOnInit(): void {
    this.initReponse();
  }

  majTexte() {
    console.log(this.reponse);
    this.resultat = '';
    this.resultat = this.getTexte(this.reponse);
  }

  deleteForm() {
    this.resultat = '';
    this.initReponse();
  }

  initReponse() {
    this.reponse = {reponse1: {value: '', viewValue: '', genre: false}, reponse2: '', reponse3: '', reponse3bis: '', reponse4: '', reponse5: '', reponse6: ''};
  }

  getTexte(reponse) {
    return `
    1. Qui d'autre veut ${reponse.reponse2} ?

    2. ${reponse.reponse1.genre ? 'Ce' : 'Cette'} ${reponse.reponse1.value} a déjà aidé X ${reponse.reponse4} à ${reponse.reponse3bis}. A qui le tour ?

    3. Un nombre important de ${reponse.reponse4} utilisent ${reponse.reponse1.genre ? 'ce' : 'cette'} ${reponse.reponse1.value} pour ${reponse.reponse3bis}. Pourquoi pas vous ?

    4. Acceptez de recevoir ${reponse.reponse1.genre ? 'ce' : 'cette'} ${reponse.reponse1.value} pour apprendre à ${reponse.reponse3} !

    5. Apprenez vous aussi comment ${reponse.reponse3}.

    6. VOUS aussi vous POUVEZ ${reponse.reponse3} !

    7. Combien d'argent perdez-vous chaque année parce que vous n'utilisez pas ${reponse.reponse1.genre ? 'ce' : 'cette'} ${reponse.reponse1.value} pour ${reponse.reponse3} ?

    8. Imaginez que vous puissiez ${reponse.reponse3} ?

    9. Choisissez parmi ces secrets lequel vous permettra de ${reponse.reponse3}.

    10. Arrêtez de ${reponse.reponse6} et commencez à ${reponse.reponse3} !

    11. Avez-vous ce qu'il faut pour ${reponse.reponse3} ?

    12. Comment faire pour ${reponse.reponse3} ?

    13. Certains arrivent à ${reponse.reponse3bis}. Comment font-ils ?

    14. ${reponse.reponse1.genre ? 'Ce' : 'Cette'} ${reponse.reponse1.value} pourrait bien vous faire ${reponse.reponse3} !

    15. Découvrez pourquoi ${reponse.reponse1.genre ? 'ce' : 'cette'} ${reponse.reponse1.value} va vous permettre de ${reponse.reponse3} !

    16. Si vous avez déjà ${reponse.reponse5}, cette page n'est pas pour vous !

    17. Pour les ${reponse.reponse4} qui veulent ${reponse.reponse3bis} !

    18. N'allez surtout pas tenter de ${reponse.reponse3} avant d'avoir testé ${reponse.reponse1.genre ? 'ce' : 'cette'} ${reponse.reponse1.value} !

    19. Lesquelles de ces 9 erreurs faites-vous quand vous voulez ${reponse.reponse3} ?

    20. Faites-vous ces 9 erreurs quand vous souhaitez ${reponse.reponse3} ?

    21. Si vous avez 10 minutes par jour, voici LE moyen de ${reponse.reponse3} !

    22. Pouvez-vous vraiment vous permettre de ${reponse.reponse6} ?

    23. Pouvez-vous vraiment vous passer de ${reponse.reponse5} ?

    24. Ils ont bien ri quand il a dit qu'il pouvait ${reponse.reponse2} ! Mais quand ils l'ont revu un mois plus tard...

    25. Quel est le moyen le plus sûr de ${reponse.reponse3} ?

    26. Prenez 7 secondes pour voir si vous pouvez ${reponse.reponse3} !

    27. Si vous avez toujours voulu ${reponse.reponse5}...

    28. Regardez comment VOUS AUSSI vous pouvez ${reponse.reponse3} !

    29. X ${reponse.reponse4} qui connaissent ${reponse.reponse1.genre ? 'ce' : 'cette'} ${reponse.reponse1.value} peuvent vous dire qu'il est facile de ${reponse.reponse3}.

    30. Rejoignez les X ${reponse.reponse4} qui savent comment ${reponse.reponse3bis}.

    31. Faites partie des X ${reponse.reponse4} qui connaissent les clefs pour ${reponse.reponse3bis}.

    32. Réservé exclusivement aux ${reponse.reponse4} qui veulent ${reponse.reponse5}.

    33. Et si vous obteniez ${reponse.reponse5} avant la fin de ce mois ?

    34. Avis aux ${reponse.reponse4} qui veulent ${reponse.reponse3bis} et avoir enfin ${reponse.reponse5}...

    35. Il y a quelques semaines, je ne savais pas comment faire pour avoir ${reponse.reponse5}.

    36. Tous les ${reponse.reponse4} devraient avoir ${reponse.reponse1.genre ? 'ce' : 'cette'} ${reponse.reponse1.value} pour pouvoir ${reponse.reponse3bis}...

    37. Voici ${reponse.reponse1.genre ? 'LE' : 'LA'} ${reponse.reponse1.value} que les autres ${reponse.reponse4} espèrent bien ne jamais voir entre vos mains...

    38. X manières simples de ${reponse.reponse3} sans trop d'effort...

    39. Beaucoup de ${reponse.reponse4} ne savent pas comment faire pour ${reponse.reponse3bis}.

    40. Voici ${reponse.reponse1.genre ? 'LE' : 'LA'} ${reponse.reponse1.value} que les autres ${reponse.reponse4} espèrent que vous ne découvrirez jamais...

    41. ${reponse.reponse1.genre ? 'Ce' : 'Cette'} ${reponse.reponse1.value} reste le plus court chemin vers ${reponse.reponse5}...

    42. Il y a quelques ${reponse.reponse4} dans le monde qui arrivent facilement à ${reponse.reponse3bis}. Quel est leur secret ?

    43. Cessez une bonne fois pour toutes de ${reponse.reponse6} !

    44. Chaque jour, des milliers de ${reponse.reponse4} savent comment ${reponse.reponse3bis}. Il ne manque plus que VOUS !

    45. Combien de fois avez-vous espéré ${reponse.reponse3} sans jamais y parvenir ?

    46. Seuls les ${reponse.reponse4} les plus motivés sauront comment ${reponse.reponse5}. Voyons si vous avez les capacités requises...

    47. Une poignée de ${reponse.reponse4} veulent vous faire partager le secret qui leur a permis de ${reponse.reponse3}...

    `;
  }
}

interface Produits {
  value: string;
  viewValue: string;
  genre: boolean;
}

