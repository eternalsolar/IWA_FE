import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ArticleComponent } from './article.component';
import { ArticleService } from '../services/article.service';
import { ArticleRoutingModule } from './article-rounting.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    ArticleComponent
  ],
  imports: [
    CommonModule,
    ArticleRoutingModule,
    NgxSpinnerModule
  ],
  providers: [ArticleService]
})
export class ArticleModule { }
