import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { ArticleService } from '../article/article.service';
import { Article } from '../shared/article.model';


@Component({
  selector: 'app-exportarticle',
  templateUrl: './exportarticle.component.html',
  styleUrls: ['./exportarticle.component.css']
})
export class ExportarticleComponent implements OnInit {

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
  }

  exportArticlesPdf(){
    this.articleService.exportPdfArticles().subscribe(x => {
      const blob = new Blob([x], {type: 'application/pdf'});

      if(window.navigator && window.navigator.msSaveOrOpenBlob){
        window.navigator.msSaveOrOpenBlob(blob);
        return;
      }
      const data = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = data;
      link.download = 'articles.pdf';
      link.dispatchEvent(new MouseEvent('click', {bubbles: true, cancelable: true, view: window}));

      setTimeout(function() {
        window.URL.revokeObjectURL(data);
        link.remove();
      }, 100);
    });
  }

  // exportReportsPdf(){
  //   this.articleService.exportPdfReports().subscribe(x => {
  //     const blob = new Blob([x], {type: 'application/pdf'});
  //
  //     if(window.navigator && window.navigator.msSaveOrOpenBlob){
  //       window.navigator.msSaveOrOpenBlob(blob);
  //       return;
  //     }
  //     const data = window.URL.createObjectURL(blob);
  //     const link = document.createElement('a');
  //     link.href = data;
  //     link.download = 'articles.pdf';
  //     link.dispatchEvent(new MouseEvent('click', {bubbles: true, cancelable: true, view: window}));
  //
  //     setTimeout(function() {
  //       window.URL.revokeObjectURL(data);
  //       link.remove();
  //     }, 100);
  //   });
  // }

  exportReportsPdf(){
    this.articleService.exportPdfReports().subscribe(x => {
      const blob = new Blob([x], {type: 'application/txt'});

      if(window.navigator && window.navigator.msSaveOrOpenBlob){
        window.navigator.msSaveOrOpenBlob(blob);
        return;
      }
      const data = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = data;
      link.download = 'votre_chemin_ici.txt';
      link.dispatchEvent(new MouseEvent('click', {bubbles: true, cancelable: true, view: window}));

      setTimeout(function() {
        window.URL.revokeObjectURL(data);
        link.remove();
      }, 100);
    });
  }




  exportArticlesExcel(){
    this.articleService.exportExcelArticles().subscribe(x => {
      const blob = new Blob([x], {type: 'application/application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'});

      if(window.navigator && window.navigator.msSaveOrOpenBlob){
        window.navigator.msSaveOrOpenBlob(blob);
        return;
      }
      const data = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = data;
      link.download = 'articles.xlsx';
      link.dispatchEvent(new MouseEvent('click', {bubbles: true, cancelable: true, view: window}));

      setTimeout(function() {
        window.URL.revokeObjectURL(data);
        link.remove();
      }, 100);
    });
  }


}
