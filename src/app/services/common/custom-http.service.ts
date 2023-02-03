import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomHttpService {

  constructor(private client: HttpClient, @Inject('BASE_API_URL') private baseUrl: string) {

  }

  private url(options: Partial<HttpOptions>): string {
    if (options.fullUrl) return options.fullUrl;
    else
      return `${this.baseUrl}/${options.controller}${options.action ? '' : `/${options.action}`}`;
  }

  get<T>(options: Partial<HttpOptions>, id?: number): Observable<T> {
    let url = this.url(options);
    if (id) url = `${url}/${id}`;
    return this.client.get<T>(url, {
      headers: options.header
    }).pipe(
      shareReplay(1)
    )
  }
}


export class HttpOptions {
  header?: HttpHeaders;
  fullUrl?: string;
  controller !: string;
  action?: string;
}
