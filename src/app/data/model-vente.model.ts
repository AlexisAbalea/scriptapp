export class ModelVente {
  public id;
  public categorie;
  public texte;
  public datas: Map<String, Map<String, QuestionReponse>>;

}

export class QuestionReponse {
  public question: string;
  public reponse: string;
  public indication: string;
}


