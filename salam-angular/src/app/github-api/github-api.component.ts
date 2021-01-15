import { GithubAPIService } from './../services/github/github-api.service';
import { Component, OnInit } from '@angular/core';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found';

@Component({
  selector: 'github-api',
  templateUrl: './github-api.component.html',
  styleUrls: ['./github-api.component.css']
})
export class GithubComponent implements OnInit {
  users = [];
  constructor(private github : GithubAPIService) { }
  
  ngOnInit(): void {
    this.getusers();
  }
  getusers(){
    this.github.getAll()
        .subscribe(request => {
          this.users = request;
          console.log(this.users);
        },(error:AppError) =>{
          if(error instanceof NotFoundError){
            alert("test1")
          }else{
            alert("test2")
          }
        })
  }
}
