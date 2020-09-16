import { Component, OnInit, Input } from '@angular/core';

import { Comments } from '../../models/post';

@Component({
  selector: 'app-post-comments',
  templateUrl: './post-comments.component.html',
  styleUrls: ['./post-comments.component.css']
})
export class PostCommentsComponent implements OnInit {

  @Input() comments: Comments[];
  constructor() { }

  ngOnInit(): void {
  }

}
