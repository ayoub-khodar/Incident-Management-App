
export class Article{
  constructor(public id?: number,
              public ref?: string,
              public nbc?: number,
              public quantite?: number,
              public dateLivraison?: Date,
              public categorie?: string,
              public fournisseur?: string){

  }
}
