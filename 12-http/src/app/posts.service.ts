import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { map } from 'rxjs/operators';

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
    );
  }

  fetchPosts() {
    return this.http
      .get<{ [key: string]: Post }>(
        'https://carbide-kite-374923-default-rtdb.europe-west1.firebasedatabase.app/posts.json'
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
    return this.http.delete<null>(
      'https://carbide-kite-374923-default-rtdb.europe-west1.firebasedatabase.app/posts.json'
    );
  }
}
