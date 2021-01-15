import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'salam-angular';
  currentItem='simo';
  courses;
  trackCourses(index, course){
    return course ? course.id : undefined;
  }
  load(){
    this.courses = [
      {id:1,title:"angular"},
      {id:2,title:"spring boot"},
      {id:3,title:"ionic"}
    ]
  }
  deleteCourse(course){
    let index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }
  personne = {
    nom: "yassine",
    adresse : {
      ville: "oujda",
      paye: "maroc"
    },
    isActive:true
  }
  myfunction(arg){
    console.log("changed :",arg.newState);
  }
}
