import { NotFoundError } from './../common/not-found';
import { AppError } from './../common/app-error';
import { PostService } from './../services/posts/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})


export class PostsComponent implements OnInit {

  posts = [];
  post = {
    id : 0,
    userId : '',
    title:'',
    body:''
  }
  
  status = true;

  constructor(private postService : PostService) {}
  
  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(){
    this.postService.getAll()
    .subscribe(response =>{
      this.posts = response;
    },(error:AppError) =>{
      if(error instanceof NotFoundError){
        alert("test1")
      }else{
        alert("test2")
      }
    })
  }

  addPost(){
    this.postService.add(this.post)
      .subscribe(response=>{
        this.post.id = response.id;
        this.post.userId = response.userId;
        this.posts.unshift(this.post);
        this.post = {
          id : 0,
          userId : '',
          title:'',
          body:''
        }
      })
  }
  editPost(post){
    this.post = post;
    this.status = false;
  }
  updatePost(){
    this.postService.update(this.post)
      .subscribe(response=>{
        this.post = {
          id : 0,
          userId : '',
          title:'',
          body:''
        }
        this.status=true;
      })
  }

  deletePost(post){
    this.postService.delete(post)
      .subscribe(response=>{
        let index = this.posts.indexOf(post);
        this.posts.splice(index,1);
      }, (error) =>{
          if(error instanceof NotFoundError){
            alert("test1")
          }else{
            alert("test2")
          }
      })
  }
}
