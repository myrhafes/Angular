import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsernameValidator } from './username.validator';

@Component({
  selector: 'reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  form = new FormGroup({
    username : new FormControl('',[
      Validators.required,
      Validators.minLength(5),
      UsernameValidator.cannotContainSpace
    ]),
    password : new FormControl('',Validators.required)
  })
  
  get username(){
    return this.form.get('username');
  }
  get password(){
    return this.form.get('password');
  }
}
