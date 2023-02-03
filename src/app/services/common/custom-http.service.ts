import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

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

  get<T>(options: Partial<HttpOptions>, id?: number) {
    let url = this.url(options);
    if (id) url = `${url}/${id}`;
    this.client.get<T>(url, {
      headers: options.header
    })
  }
}


export class HttpOptions {
  header?: HttpHeaders;
  fullUrl?: string;
  controller !: string;
  action?: string;
}
