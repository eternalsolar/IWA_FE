import { Component, OnInit } from '@angular/core';
import { Article } from './models/article.model';
import { ArticleService } from './services/article.service';
import { finalize, catchError } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';
import { of } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  currentPage = 1;
  loading = false;
  title = 'fe';
  articleList: Article[] = [];
  firstArticle: Article;
  constructor(private articleService: ArticleService, private spinner: NgxSpinnerService,
    private router: Router){}

  ngOnInit(): void {
    this.loading = true;
    this.spinner.show();
    this.articleService.getArticles(this.currentPage)
    .pipe(
      finalize(() => {this.spinner.hide(); this.loading = false}),
    )
    .subscribe((articleList: Article[]) => {
      this.articleList = articleList;
      this.firstArticle = this.articleList.shift();
      
    })
  }
  readArticle(ar: Article){
    this.router.navigate(['/article'], { queryParams: {'link': ar.link}});
  }
  onScroll(){
    this.currentPage++
    if(this.currentPage > 7) return;
    else {
      this.spinner.show();
      this.articleService.getArticles(this.currentPage)
      .pipe(
        finalize(() => this.spinner.hide()),
      )
      .subscribe((articleList: Article[]) => {
        this.articleList = this.articleList.concat(articleList);
      })
    }
  }
}
