// IMPORTING ANGULAR MODULES
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// IMPORTING USER DEFINED CLASSES
import { Comments } from '../models/post';

@Injectable({
  providedIn: 'root'
})

export class PostsService {
  
  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get("https://jsonplaceholder.typicode.com/posts");
  }

  getPostDetails(id: number) {
    return this.http.get("https://jsonplaceholder.typicode.com/posts/" + id);
  }

  getUserDetails(id: number) {
    return this.http.get("https://jsonplaceholder.typicode.com/users/" + id);
  }

  getPostComments(id: number) {
    return this.http.get("https://jsonplaceholder.typicode.com/posts/" + id + "/comments");
  }

  saveComment(comment: Comments) {
    return this.http.post("https://jsonplaceholder.typicode.com/posts/" + comment.postId + "/comments", comment, {
      headers: {
        'ContentType': 'application/json; charset=utf-8',
      }
    })
  }
}
