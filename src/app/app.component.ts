import { Component, OnInit } from '@angular/core';
import { Article } from './models/article.model';
import { ArticleService } from './services/article.service';
import { finalize, catchError } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  currentPage = 1;
  title = 'fe';
  articleList: Article[] = [];
  firstArticle: Article;
  constructor(private articleService: ArticleService, private spinner: NgxSpinnerService){}

  ngOnInit(): void {
    this.spinner.show();
    this.articleService.getArticles(this.currentPage)
    .pipe(
      finalize(() => this.spinner.hide()),
    )
    .subscribe((articleList: Article[]) => {
      this.articleList = articleList;
      this.firstArticle = this.articleList.shift();
      
    })
  }

  
}
