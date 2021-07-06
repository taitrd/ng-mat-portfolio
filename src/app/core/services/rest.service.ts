import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {HttpClient, HttpResponse} from '@angular/common/http';
import { environment } from '@env';

class RestEntity {
  id?: string|number;
}

interface IRestService {
  getOne(id: string): any;
  getMany(req: any): any;
  post(entity: any): any;
  put(entity: any): any;
  delete(id: string): any;
}

@Injectable({
  providedIn: 'root'
})
export class RestService<T extends RestEntity> implements IRestService {
  protected resourceUrl = environment.apiUrl + '/rest';
  constructor(
    protected http?: HttpClient,
  ) { }

  /**
   * POST request
   * @param entity
   * @returns
   */
  post(entity: T): Observable<HttpResponse<T>> {
    const copy = this.toResourceEntity(entity);
    return this.http.post<T>(this.resourceUrl, copy, {observe: 'response'})
      .pipe(
        map((res: HttpResponse<T>) => this.toEntity(res))
      );
  }

  /**
   * PUT request
   * @param entity
   * @returns
   */
  put(entity: T): Observable<HttpResponse<T>> {
    const copy = this.toResourceEntity(entity);
    return this.http.put<T>(this.resourceUrl + '/' + entity.id, copy, {observe: 'response'})
      .pipe(map((res: HttpResponse<T>) => this.toEntity(res)));
  }

  /**
   * GET request with response have many entities
   * @param req
   * @returns
   */
  getMany(req?: any): Observable<HttpResponse<T[]>> {
    return this.http.get<T[]>(this.resourceUrl, {params: req, observe: 'response'})
      .pipe(map((res: HttpResponse<T[]>) => this.toEntities(res)));
  }

  /**
   * DEL request
   * @param id
   * @returns
   */
  delete(id: string): Observable<HttpResponse<T>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, {observe: 'response'})
      .pipe(
        map((res: HttpResponse<T>) => this.toEntity(res))
      );
  }

  /**
   * GET request with single response
   * @param id
   * @returns
   */
  getOne(id: string): Observable<HttpResponse<T>> {
    return this.http.get<T>(`${this.resourceUrl}/${id}`, {observe: 'response'})
      .pipe(
        map((res: HttpResponse<T>) => this.toEntity(res))
      );
  }

  /**
   * Parse entity from client to server
   * @param entity
   * @returns
   */
  protected toResourceEntity(entity: T): T {
    return entity;
  }

  /**
   * Parse entity from server to client
   * @param res
   * @returns
   */
  protected toEntity(res: HttpResponse<T>): HttpResponse<T> {
    return res;
  }

  /**
   * Parse entities from server to client
   * @param res
   * @returns
   */
  protected toEntities(res: HttpResponse<T[]>): HttpResponse<T[]> {
    if (res.body.length > 0) {
    }
    return res;
  }
}
