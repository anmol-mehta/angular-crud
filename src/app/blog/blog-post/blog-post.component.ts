// IMPORTING ANGULAR MODULES
import { Component, OnInit } from '@angular/core';

// IMPORTING USER DEFINED MODULES
import { Post } from '../../models/post';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {

  Posts: Post[];
  constructor(private postService: PostsService) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe((data: Post[]) => { console.log(data); this.Posts = data; });
  }
}
