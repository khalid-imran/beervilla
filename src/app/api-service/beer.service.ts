import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {
  HttpClient, HttpHeaders, HttpParams,
  HttpResponse, HttpEvent
} from '@angular/common/http';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class BeerService {
  protected basePath = environment.ApplicationAPI;
  public defaultHeaders = new HttpHeaders();

  constructor(protected httpClient: HttpClient) { }

  /**
   * api for ger beer
   * return array
   */
  public apiGetBeer(version: any): Observable<any> {
    const headers = this.defaultHeaders;
    return this.httpClient.get(`${this.basePath}/${encodeURIComponent(String(version))}/beers`, { headers });
  }
}
