import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RestService } from '@core';
import { environment } from '@env';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IPost } from '../../portfolio-post/shared';
import { IRepo, IUser, Repo } from './github.model';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService extends RestService<IPost> {
  protected resourceRepoUrl = environment.apiUrls.github + '/repos/taitrd';
  protected resourceProfileUrl = environment.apiUrls.github + '/users/taitrd';
  constructor(
    protected http: HttpClient,
  ) {
    super();
  }

  githubGetProfile(): Observable<HttpResponse<IUser>> {
    return this.http.get<IUser>(`${this.resourceProfileUrl}`, { observe: 'response' });
  }

  githubGetOneRepo(name?: string): Observable<HttpResponse<IRepo>> {
    return this.http.get<IRepo>(`${this.resourceRepoUrl}/${name}`, { observe: 'response' });
  }

  githubGetManyRepo(): Observable<HttpResponse<IRepo[]>> {
    return this.http.get<IRepo[]>(`${this.resourceProfileUrl}/repos`, { observe: 'response', })
      .pipe(
        map((res: HttpResponse<IRepo[]>) => {
          res.body.map(i => new Repo(i));
          return res;
        }),
      );
  }
}
