import { Component } from '@angular/core';

@Component({
    selector:'courses',
    template: `
    <input [(ngModel)]="email" type="text" (keyup.enter)="onKeyUp()">
    <p> {{email}}</p>
    `
})

export class CoursesComponent{
    
    email: string = "me@gmail.com";
    onKeyUp(){
        console.log(this.email);
    }
}