import { Component, OnInit, Input } from '@angular/core';
import { FormGroup , Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { ArticleService } from './article.service';
import { Article } from '../shared/article.model';
import { DataModel } from '../shared/data.model';
import { CrudService } from 'src/app/shared/crud.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  articles: Article[];


  data: any;

  @Input()
  service: CrudService;

  @Input()
  initItem: any;

  @Input()
  initForm: FormGroup;

  // @Input()
  // dataModelList: DataModel[];

  article: Article = new Article();


  @Input()
  articlesModel: DataModel[];

  articleType= "sample";

  @Input()
  dataModelList: DataModel[];

  constructor(){

  }

  ngOnInit() {

  }

  // dataChanged($event){
  //   this.data = this.data.concat($event);
  // }

}
