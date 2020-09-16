
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SearchComponent } from './search/search.component';
import { CategoriesComponent } from './categories/categories.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { BlogLayoutComponent } from './blog-layout/blog-layout.component';
import { BlogRoutingModule } from './blog-routing.module';
import { PostCommentsComponent } from './post-comments/post-comments.component';
import { PostAddCommentComponent } from './post-add-comment/post-add-comment.component';


@NgModule({
  declarations: [
    SearchComponent,
    CategoriesComponent,
    PostDetailsComponent,
    BlogPostComponent,
    BlogLayoutComponent,
    PostCommentsComponent,
    PostAddCommentComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BlogRoutingModule
  ]
})
export class BlogModule { }
