import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostDetailsComponent } from './post-details/post-details.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { BlogLayoutComponent } from './blog-layout/blog-layout.component';

const routes: Routes = [
    {
        path: "blog",
        component: BlogLayoutComponent,
        children: [
            {
                path: "posts",
                component: BlogPostComponent
            },
            {
                path: "posts/:id",
                component: PostDetailsComponent
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
