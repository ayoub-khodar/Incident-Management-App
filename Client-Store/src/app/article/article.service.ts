import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { API_URLS } from '../config/api.url.config';
import { Article } from '../shared/article.model';
import { CrudService } from '../shared/crud.service';



@Injectable()
export class ArticleService {
    constructor(private http: HttpClient){

    }

    getArticles(): Observable<any>{
      return this.http.get(API_URLS.ARTICLES_URL);
    }

    addArticle(article): Observable<any>{
      return this.http.post(API_URLS.ARTICLES_URL,article);
    }

    updateArticle(article): Observable<any>{
      return this.http.put(API_URLS.ARTICLES_URL,article);
    }

    deleteArticle(id): Observable<any>{
      return this.http.delete(API_URLS.ARTICLES_URL + `/${id}`);
    }
    detail(callback){
    return callback && callback();
  }
    exportPdfArticles(): Observable<Blob>{
      return this.http.get(API_URLS.ARTICLES_URL + '/export/pdf' , {responseType: 'blob'});
    }
    exportPdfReports(): Observable<Blob>{
      return this.http.get(API_URLS.ARTICLES_URL + '/report/pdf' , {responseType: 'blob'});
    }
    exportExcelArticles(): Observable<Blob>{
      return this.http.get(API_URLS.ARTICLES_URL + '/export/excel' , {responseType: 'blob'});
    }

    addFile(list): Observable<any>{
      return this.http.post(API_URLS.ARTICLES_URL+ '/all', list);
 }
}
