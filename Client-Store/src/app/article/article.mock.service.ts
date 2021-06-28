import {Injectable} from '@angular/core';
import {Article} from '../shared/article.model';
import { of } from 'rxjs';
import { Observable } from 'rxjs';

import { CrudService } from '../shared/crud.service';

@Injectable()
export class ArticleMockService implements CrudService{
  private ARTICLES: Article[] = [];

  constructor(){
    let t1: Article = new Article(1,'article1' , 7987 , 20 );
    let t2: Article = new Article(2,'article2' , 6546 , 45 );
    let t3: Article = new Article(3,'article3' , 4 , 100 );

    this.ARTICLES.push(t1);
    this.ARTICLES.push(t2);
    this.ARTICLES.push(t3);
  }

    getAll(): Observable<any>{
      return of(this.ARTICLES);
    }

    add(article): Observable<any>{
      return of('success');
    }

    update(article): Observable<any>{
      return of('success');
    }

    delete(id): Observable<any>{
      return of('success');
    }

    addAll(list): Observable<any>{
      return of('success');
    }

}
