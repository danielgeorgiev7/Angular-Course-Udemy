import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post.model';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  loadedPosts = [];
  isFetching = false;
  error = null;

  constructor(private http: HttpClient, private postsService: PostsService) {}

  ngOnInit() {
    this.onFetchPosts();
  }

  onCreatePost(postData: Post) {
    this.postsService
      .createAndStorePost(postData.title, postData.content)
      .subscribe(
        (responseData) => {
          this.loadedPosts.push({ ...postData, id: responseData.name });
        },
        (error) => {
          this.error = error;
        }
      );
  }

  onFetchPosts() {
    this.isFetching = true;
    this.postsService.fetchPosts().subscribe(
      (posts) => {
        this.isFetching = false;
        this.loadedPosts = posts;
      },
      (error) => {
        this.isFetching = false;
        this.error = error;
      }
    );
  }

  onClearPosts() {
    this.isFetching = true;
    this.postsService.deletePosts().subscribe(
      () => {
        this.isFetching = false;
        this.loadedPosts = [];
      },
      (error) => {
        this.error = error;
      }
    );
  }

  onErrorOkay() {
    this.error = null;
  }
}
