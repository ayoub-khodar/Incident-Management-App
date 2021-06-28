import { Component, OnInit, Input } from '@angular/core';
import { FormGroup , FormBuilder, Validators } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination'

import { CrudService } from '../crud.service';
import { DataModel } from '../data.model';
@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  @Input()
  title:string;

  @Input()
  data:any;

  @Input()
  service:CrudService;

  @Input()
  initItem:any;

  @Input()
  initForm:FormGroup;

  @Input()
  dataModelList : DataModel[];

  crudForm : FormGroup;

  operation: string = 'ajouter';

  selectedItem: any;

  totalRecords: String;

  page : Number = 1;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
    this.init();
  }
  createForm(){
    this.initForm ? this.crudForm = this.initForm : this.crudForm = this.fb.group({});
  }
  loadData(){
    this.service.getAll().subscribe(
      data => {this.data = data},
      error => {console.log('An error was occured')},
      () => {console.log('Loading data was done')}
    );
  }

  add(){
    const a = this.crudForm.value;
    this.service.add(a).subscribe(
      res => {
        this.init();
        this.loadData();
      }
    );
  }

  update(){
    this.service.update(this.selectedItem).subscribe(
      res => {
        this.init();
        this.loadData();
      }
    );
  }

  init(){
    this.selectedItem = this.initItem;
    this.createForm();

  }

  delete(){
      this.service.delete(this.selectedItem.id).subscribe(
      res =>{
        this.selectedItem = this.initItem;
        this.loadData();
      }
    );
  }
}
