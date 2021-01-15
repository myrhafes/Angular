import { catchError } from 'rxjs/operators';
import { NotFoundError } from './../../common/not-found';
import { AppError } from './../../common/app-error';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private apiUrl : string, private http : HttpClient) { }
  
  getAll(){
    return this.http.get<any>(this.apiUrl)
                    .pipe(catchError(this.handleError))
  }

  add(resource){
    return  this.http.post<any>(this.apiUrl, resource)
  }

  update(resource){
    return this.http.put<any>(this.apiUrl+"/"+resource.id,resource)
  }

  delete(resource){
    return this.http.delete<any>(this.apiUrl+"/"+resource.id)
                      .pipe(catchError(this.handleError))
  }

  handleError(error){
    if(error.status === 404){
      return throwError(new NotFoundError);
    }
    return throwError(new AppError);
  }
}
