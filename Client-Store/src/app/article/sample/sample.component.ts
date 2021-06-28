import { Component, OnInit, Input, ViewChild, HostListener, AfterViewInit, ChangeDetectorRef  } from '@angular/core';
import { FormGroup , FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatPaginatorModule } from '@angular/material';
// import { MdbTablePaginationComponent, MdbTableDirective } from 'angular-bootstrap-md';

import { ArticleService } from 'src/app/article/article.service';
import { Article } from 'src/app/shared/article.model';
import { DataModel } from 'src/app/shared/data.model';
import { CrudService } from 'src/app/shared/crud.service';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit{ //AfterViewInit{
  // @ViewChild(MdbTablePaginationComponent, { static: true }) mdbTablePagination: MdbTablePaginationComponent;
  // @ViewChild(MdbTableDirective, { static: true }) mdbTable: MdbTableDirective
  // elements: any = [];
  // previous: any = [];

  // @Input()
  // data: any;

  @Input()
  service: CrudService;

  @Input()
  initItem: any;

  @Input()
  initForm: FormGroup;

  @Input()
  dataModelList: DataModel[];

  @Input()
  data: any;

  articles: Article[];

  articleForm : FormGroup;

  crudForm: FormGroup;

  article: Article = new Article();

  articlesModel: DataModel[];

  operation: string = 'ajouter';

  selectedArticle: Article;

  selectedItem: any;

  totalRecords: String;

  page : Number = 1;

  constructor(public articleService: ArticleService, private fb: FormBuilder, private route: ActivatedRoute,private router:Router){//private cdRef: ChangeDetectorRef){
    this.createForm();
  }

  ngOnInit() {
    // for (let i = 1; i <= 15; i++) {
    //   this.elements.push({id: i.toString(), first: 'User ' + i, last: 'Name ' + i, handle: 'Handle ' + i});
    // }
    // this.mdbTable.setDataSource(this.elements);
    // this.elements = this.mdbTable.getDataSource();
    // this.previous = this.mdbTable.getDataSource();
    this.initArticle();
    this.articles = this.route.snapshot.data.articles;
    // this.loadArticles();
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

  // ngAfterViewInit() {
  //   this.mdbTablePagination.setMaxVisibleItemsNumberTo(5);
  //
  //   this.mdbTablePagination.calculateFirstItemIndex();
  //   this.mdbTablePagination.calculateLastItemIndex();
  //   this.cdRef.detectChanges();
  // }

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

  detail(){
    this.articleService.detail(()=>{
      this.router.navigateByUrl('/home/(contentOutlet:articledetail)');
    });}

}
