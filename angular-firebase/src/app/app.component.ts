import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  itemsRef: AngularFireList<any> ;
  items : Observable<any[]>;

  constructor(db : AngularFireDatabase){
    this.itemsRef = db.list('courses');
    this.items = this.itemsRef.snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
  } 

  add(data){
    this.itemsRef.push(data.value);
    data.value="";
  }
  update(key,data){
    this.itemsRef.update(key, {test : data})
  }
  delete(key){
    this.itemsRef.remove(key);
  }
}