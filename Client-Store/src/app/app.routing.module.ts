import { NgModule } from '@angular/core';
import { RouterModule , Routes } from '@angular/router';

import { ArticleComponent } from './article/article.component';
import { ArticleDetailComponent } from './articledetail/articledetail.component';
import { UploadFilesComponent } from './upload-files/upload-files.component';
import { ExportarticleComponent} from './exportarticle/exportarticle.component';
import { ArticleResolver } from './article/article.resolver';
import { UserResolver } from './user/user.resolver';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { RequestResetComponent } from './request-reset/request-reset.component';

export const appRoutes: Routes = [
  {
    path: 'login' ,
   component: LoginComponent
  },
  {
    path: 'request-reset' ,
   component: RequestResetComponent
  },

   {
     path: 'home' ,
    component: HomeComponent,
    children:[
      {
        path: 'article' ,
       component: ArticleComponent,
       resolve: {
         articles: ArticleResolver
       },
       outlet: 'contentOutlet'
     },
     {
       path: 'articledetail' ,
      component: ArticleDetailComponent,
      resolve: {
        articles: ArticleResolver
      },
      outlet: 'contentOutlet'
    },
   {path: 'upload-files' ,
    component: UploadFilesComponent ,
  outlet: 'contentOutlet'
},
{path: 'exportarticle',
 component: ExportarticleComponent ,
outlet: 'contentOutlet'
},

   {path: 'user' ,
    component: UserComponent ,
    resolve: {
      users: UserResolver
    },
  outlet: 'contentOutlet'
},
     ]
   },
  {
    path: '' ,
   redirectTo: '/home' ,
   pathMatch: 'full'}
];

@NgModule({
  imports : [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: false}
    )
  ],
  exports:[RouterModule],
  providers: [ArticleResolver,UserResolver]
})
export class AppRoutingModule {

}
