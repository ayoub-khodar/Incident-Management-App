import { Component, OnInit, ViewChild, Input, EventEmitter, Output } from '@angular/core';

import { ArticleService } from 'src/app/article/article.service';
import { Article } from 'src/app/shared/article.model';
import { DataModel } from 'src/app/shared/data.model';
import { CrudService } from 'src/app/shared/crud.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})

export class UploadComponent implements OnInit {

  @ViewChild("fileUploadInput")
  fileUploadInput: any;

  // @Input()
  // articleService: ArticleService;

  @Input()
  articles: Article[];

  @Input()
  articlesModel: DataModel[];

  // @Output()
  // updateData: EventEmitter<any> = new EventEmitter<any>();

  articleArray: any;

  logObject: any;

  articlesModelFiltred:any;

  currentStep = 1;

  // selectedStep = 1;

  dataFromServer: any = null;

  dataSentToServer: boolean = false;

  fileName: string = '';

  constructor(public articleService: ArticleService) { }

  ngOnInit() {
    // this.articlesModelFiltred = this.articlesModel.filter(articleModel => !articleModel.readonly);
  }

  getBindHeaderArticleModelListArray(headers){
      let bindArray=[];
      let index =0;

      headers.forEach(header => {
        const bindItem ={
          name: header,
          index: index
        }
        index++;
        bindArray.push(bindItem);
      });
      return bindArray;
  }

  buildArticleArray(bindArray, csvRecordsArray){
    let articleArray = [];
    if(csvRecordsArray && csvRecordsArray.length>2){
      for(let i = 1; i<csvRecordsArray.length; i++){
        const dataCsv = csvRecordsArray[i].split(";");
        const articleCrud = {};
        bindArray.forEach(bindItem => {
          articleCrud[bindItem.name] =  bindItem.name == 'nbc' || bindItem.name == 'quantite' ? Number(dataCsv[bindItem.index]) :  dataCsv[bindItem.index];;
        });

        articleArray.push(articleCrud);
      }

    }
    return articleArray;
  }

  selectFile($event){
    let fileList = $event.srcElement.files;
    let file = fileList[0];
    if(file && file.name.endsWith(".csv")){
      this.fileName = file.name;
      let input = $event.target;
      let reader = new FileReader();
      reader.readAsText(input.files[0]);

      reader.onload = (articles) => {
        let csvData = reader.result;
        let csvRecordsArray = (<string>csvData).split(/\r\n|\n/)
        let headers = csvRecordsArray && csvRecordsArray.length>0 ? csvRecordsArray[0].split(";") : [];
        //bing headers with articlesModel
        let bindArray = this.getBindHeaderArticleModelListArray(headers);

        //create article bindArray
        this.articleArray = this.buildArticleArray(bindArray, csvRecordsArray);

        this.currentStep++;
      };
    }
  }

  sendDataToServer(){
      this.articleService.addFile(this.articleArray).subscribe((data)=>{
      this.dataFromServer = data;
      this.dataSentToServer=true;
      // this.updateData.emit(data);
      this.currentStep = 3;
    });
  }




}
