import { Component, OnInit } from '@angular/core';
import { finalize, catchError } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';
import { Article } from '../models/article.model';
import { ActivatedRoute } from '@angular/router'
import { ArticleService } from '../services/article.service';

@Component({
    selector: 'app-article',
    templateUrl: './article.component.html',
    styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
    link: string;
    article: Article;
    loading = false;
    constructor(private articleService: ArticleService, private spinner: NgxSpinnerService, private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.route.queryParams.subscribe(params => {
            this.link = params['link'];
        });
        this.loading = true;
        this.spinner.show();
        this.articleService.getArticle(encodeURIComponent(this.link))
            .pipe(
                finalize(() => {this.spinner.hide(); this.loading = false;}),
            )
            .subscribe((article: Article) => {
                this.article = article;

            })
    }


}
