import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';
import { Article } from '../models/article.model';

const routes = {
    getArticles: (page: number) => `http://test-be.estars.vn/${page}`,
    getArticle: (link: string) => `http://test-be.estars.vn/article/${link}`
}
@Injectable()
export class ArticleService {
    constructor(private httpClient: HttpClient) { }

    getArticles(page: number): Observable<any> {
        return this.httpClient.get(routes.getArticles(page))
            .pipe(
                map((body: any) => body),
                catchError(() => throwError('Error'))
            );
    }
    getArticle(link: string): Observable<any> {
        return this.httpClient.get(routes.getArticle(link))
            .pipe(
                map((body: any) => body),
                catchError(() => throwError('Error'))
            );
    }
}