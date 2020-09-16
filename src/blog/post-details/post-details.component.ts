import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, mergeMap} from "rxjs/operators";

import { PostsService } from './../posts.service';
import { PostWithUserInfo, Comments } from './../../models/post';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  postInfo: any = new PostWithUserInfo();
  
  constructor(private postsService: PostsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(param => {
      this.getPostDetails(parseInt(param["params"]["id"]));
    })
  }

  getPostDetails(id: number) {
    this.postsService.getPostDetails(id)
    .pipe(
      map(item => {
        return item;
      }),
      mergeMap((post) => {
        this.postInfo["postInfo"] = post;
        return this.postsService.getUserDetails(post["userId"]);
      }),
      mergeMap((user) => {
        this.postInfo["userInfo"] = user;
        return this.postsService.getPostComments(this.postInfo["postInfo"]["id"])
      })
      )
    .subscribe((comments) => {
      this.postInfo["comments"] = comments;
    });
  }

  //
  addCommentInPostInfo(comment: Comments) {
    this.postInfo.comments.push(comment);
  }

}
