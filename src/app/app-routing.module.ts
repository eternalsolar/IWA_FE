import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ArticleModule } from './article/article.module';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: 'article',
    loadChildren: () => ArticleModule,
    
  },
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
