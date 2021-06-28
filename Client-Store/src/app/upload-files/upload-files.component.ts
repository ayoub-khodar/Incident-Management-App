import { Component, OnInit } from '@angular/core';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { UploadFileService } from 'src/app/upload-files/upload-file.service';
import { PrincipalState} from '../shared/principal.state';
import { Principal} from '../shared/principal.model';

@Component({
  selector: 'app-upload-files',
  templateUrl: './upload-files.component.html',
  styleUrls: ['./upload-files.component.css']
})
export class UploadFilesComponent implements OnInit {

 selectedFiles: FileList;
 currentFile: File;
 progress = 0;
 message = '';

 fileInfos: Observable<any>;
 private principal : Principal;

  constructor(private uploadService: UploadFileService, private store : Store<PrincipalState>) { }

  ngOnInit(): void {
    this.fileInfos = this.uploadService.getFiles();
    this.store.select('principal').subscribe(principal => {
      this.principal = principal;
    })
  }

  selectFile(event) {
  this.selectedFiles = event.target.files;
  }

  hasRoleAdmin(){
    let hasRole: boolean = false;
    this.principal.authorities.forEach(item => {
      if (item.authority === "ROLE_ADMIN"){
        hasRole = true;
      }
    });
    return hasRole;
  }

  upload() {
  this.progress = 0;

  this.currentFile = this.selectedFiles.item(0);
  this.uploadService.upload(this.currentFile).subscribe(
    event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        this.message = event.body.message;
        this.fileInfos = this.uploadService.getFiles();
      }
    },
    err => {
      this.progress = 0;
      this.message = 'Could not upload the file!';
      this.currentFile = undefined;
    });

  this.selectedFiles = undefined;
}

}
