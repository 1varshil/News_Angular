// data.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  addPost(postData: { title: string, body: string }): Observable<any> {
    return this.http.post(this.apiUrl, postData);
  }

  getPost(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getNews() : Observable<any> {
    return this.http.get<any>('https://api.currentsapi.services/v1/latest-news?apiKey=t8CR03QbcsdNKdoCP4uI2jTKDs77mvzV2Iy5tecdvkU0-EK_')
  }
}
