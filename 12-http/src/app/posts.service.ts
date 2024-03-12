import {
  HttpClient,
  HttpEventType,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  loadedPosts = [];

  constructor(private http: HttpClient) {}

  createAndStorePost(title: string, content: string) {
    const postData: Post = { title, content };
    return this.http.post<{ name: string }>(
      'https://carbide-kite-374923-default-rtdb.europe-west1.firebasedatabase.app/posts.json',
      postData
      // {
      //   observe: 'response',  // to get full response
      // }
    );
  }

  fetchPosts() {
    let searchParams = new HttpParams();
    searchParams.append('print', 'pretty');
    searchParams.append('custom', 'key');
    return this.http
      .get<{ [key: string]: Post }>(
        'https://carbide-kite-374923-default-rtdb.europe-west1.firebasedatabase.app/posts.json',
        {
          headers: new HttpHeaders({ 'Custom-Header': 'Hello' }),
          // params: new HttpParams().set('print', 'pretty'),
          params: searchParams,
        }
      )
      .pipe(
        map((responseData) => {
          const postsArray: Post[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({ ...responseData[key], id: key });
            }
          }
          return postsArray;
        })
      );
  }

  deletePosts() {
    return this.http
      .delete<null>(
        'https://carbide-kite-374923-default-rtdb.europe-west1.firebasedatabase.app/posts.json',
        {
          observe: 'events',
        }
      )
      .pipe(
        tap((event) => {
          console.log(event);
          // if (event.type === HttpEventType.Response) {
          //   // etc
          // }
          if (event.type === HttpEventType.Response) {
            console.log(event.body);
          }
        })
      );
  }
}
