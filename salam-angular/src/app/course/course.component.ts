import { CourseService } from './course.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  title = "title";

  courses : string[];

  constructor(courseService: CourseService) {
      this.courses = courseService.getCourses();
   }

  ngOnInit(): void {
  }

  

}
