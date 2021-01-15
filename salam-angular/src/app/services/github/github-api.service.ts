import { DataService } from './../data/data.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubAPIService extends DataService  {
  
  constructor(http : HttpClient) {
    super('http://api.github.com/users/IDBRAHIMDEV/followers', http);
   }
}
