import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { ArticleComponent } from './article.component';
import { ArticleService } from '../services/article.service';
import { ArticleRoutingModule } from './article-rounting.module';

@NgModule({
  declarations: [
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    ArticleRoutingModule,
    HttpClientModule,
  ],
  providers: [ArticleService],
  bootstrap: [ArticleRoutingModule]
})
export class ArticleModule { }
