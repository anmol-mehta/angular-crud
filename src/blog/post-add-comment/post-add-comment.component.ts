import { Comments } from './../../models/post';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PostsService } from '../posts.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-post-add-comment',
  templateUrl: './post-add-comment.component.html',
  styleUrls: ['./post-add-comment.component.css']
})
export class PostAddCommentComponent implements OnInit {

  @Input() postId: number;
  @Output() addedComment: EventEmitter<Comments> = new EventEmitter<Comments>();
  validationMessages = {
    comment: {
      required: 'Comment is required',
      minlength: 'Comment cannot be less than 1 character',
      maxlength: 'Comment cannot be more than 250 characters'
    },
    name: {
      required: 'Name is required'
    },
    email: {
      required: 'Email is required',
      pattern: 'Incorrect email format'
    }
  }

  formErrors = {
    comment: '',
    name: '',
    email: ''
  }

  comment: Comments = {
    postId: 0,
    id: 0,
    email: '',
    name: '',
    body: ''
  }

  commentForm: FormGroup;
  constructor(private fb: FormBuilder, private postsService: PostsService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.commentForm = this.fb.group({
      comment: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(250)]],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]]
    });

    this.commentForm.valueChanges.subscribe(() => this.validateControls(this.commentForm));
  }

  validateControls(formGroup: FormGroup = this.commentForm): void {
    Object.keys(formGroup.controls).forEach((key: string) => {
      const abstractControl = formGroup.get(key);
      if (abstractControl instanceof FormGroup) {
        this.validateControls(abstractControl);
      } else {
        this.formErrors[key] = '';
        if (abstractControl && !abstractControl.valid && (abstractControl.touched || abstractControl.dirty)) {
          const messages = this.validationMessages[key];
          for (const errorKey in abstractControl.errors) {
            if(errorKey) {
              this.formErrors[key] += messages[errorKey];
            }
          }
        }
      }
    })
  }

  submitComment(): void {
    debugger;
    this.comment.name = this.commentForm.get('name').value;
    this.comment.email = this.commentForm.get('email').value;
    this.comment.body = this.commentForm.get('comment').value;
    this.comment.id = Math.floor(Math.random() * 100);
    this.comment.postId = this.postId;
    this.postsService.saveComment(this.comment).subscribe((res: Comments) => {
      this.addedComment.emit(res);
      this.toastr.success("Comment added!");
      this.clearFormControls();
    });
  }

  clearFormControls(): void {
    this.commentForm.reset();
  }
}
