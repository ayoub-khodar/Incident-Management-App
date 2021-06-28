import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { StoreModule } from '@ngrx/store';
import { NgxPaginationModule } from 'ngx-pagination';


import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { ArticleMockService } from './article/article.mock.service';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { AppRoutingModule } from './app.routing.module';
import { ArticleService } from './article/article.service';
import { UploadFileService } from './upload-files/upload-file.service';
import { UserService } from './user/user.service';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AppService } from './app.service';
import { XhrInterceptor } from './xhr.interceptor';
import { UserComponent } from './user/user.component';
import { RequestResetComponent } from './request-reset/request-reset.component';
import { principalReducer } from './shared/principal.reducer';
import { CrudComponent } from './shared/crud/crud.component';
import { ArticleDetailComponent } from './articledetail/articledetail.component';
import { UploadFilesComponent } from './upload-files/upload-files.component';
import { ExportarticleComponent } from './exportarticle/exportarticle.component';
import { SampleComponent } from './article/sample/sample.component';
import { UploadComponent } from './article/upload/upload.component';
import { ResetpasswordComponent } from './password/resetpassword/resetpassword.component';
import { RequestpasswordComponent } from './password/requestpassword/requestpassword.component';




@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    NavbarComponent,
    SidebarComponent,
    ContentComponent,
    LoginComponent,
    HomeComponent,
    UserComponent,
    RequestResetComponent,
    CrudComponent,
    ArticleDetailComponent,
    UploadFilesComponent,
    ExportarticleComponent,
    SampleComponent,
    UploadComponent,
    ResetpasswordComponent,
    RequestpasswordComponent
    ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    StoreModule.forRoot({principal:principalReducer})
  ],
  providers: [
    ArticleMockService,
     ArticleService,
     UploadFileService,
     AppService,
     { provide: HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi: true },
     CookieService,
     UserService
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
