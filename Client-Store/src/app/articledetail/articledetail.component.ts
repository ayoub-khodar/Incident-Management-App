import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { NgxPaginationModule } from 'ngx-pagination';

import { ArticleService } from '../article/article.service';
import { Article } from '../shared/article.model';
@Component({
  selector: 'app-articledetail',
  templateUrl: './articledetail.component.html',
  styleUrls: ['./articledetail.component.css']
})
export class ArticleDetailComponent implements OnInit {

  articles: Article[];

  articleForm : FormGroup;

  article: Article = new Article();

  operation: string = 'ajouter';

  selectedArticle: Article;


  totalRecords: String;

  page : Number = 1;

  constructor(public articleService: ArticleService, private fb: FormBuilder, private route: ActivatedRoute){
    this.createForm();
  }

  ngOnInit() {
    this.initArticle();
    this.loadArticles();
    // this.articles = this.articleService.getArticles();
    // this.articles = this.route.snapshot.data.articles;
    // this.articleForm = this.fb.group({
    //   ref : ['', Validators.required],
    //   nbc:'',
    //   quantite:'',
    //   categorie:'',
    //   fournisseur:'',
    //   dateLivraison:''
    // });
    //
    // this.articlesModel = [
    //   new DataModel('ref','Référence','string',false,[]),
    //   new DataModel('nbc','N Commande','number',false,[]),
    //   new DataModel('quantite','Quantité','number',false,[]),
    //   new DataModel('categorie','Famille','string',false,[]),
    //   new DataModel('fournisseur','Fournisseur','string',false,[]),
    //   new DataModel('dateLivraison','Date de livraison','date',false,[])
    // ]
  }
  createForm(){
    this.articleForm = this.fb.group({
      id:'',
      ref : ['', Validators.required],
      nbc:'',
      quantite:'',
      categorie:'',
      fournisseur:'',
      dateLivraison:''
    });
  }

  loadArticles(){
    this.articleService.getArticles().subscribe(
      data => {this.articles = data},
      error => {console.log('An error was occured')},
      () => { console.log('loading articles was done ')}
    );
  }

  addArticle(){
    const a = this.articleForm.value;
    this.articleService.addArticle(a).subscribe(
      res => {
        this.initArticle();
        this.loadArticles();
      }
    );
  }

  updateArticle(){
    this.articleService.updateArticle(this.selectedArticle).subscribe(
      res => {
        this.initArticle();
        this.loadArticles();
      }
    );
  }

  initArticle(){
    this.selectedArticle = new Article();
   this.createForm();

  }

  deleteArticle(){
      this.articleService.deleteArticle(this.selectedArticle.id).subscribe(
      res =>{
        this.selectedArticle = new Article();
        this.loadArticles();
      }
    );
  }


}
