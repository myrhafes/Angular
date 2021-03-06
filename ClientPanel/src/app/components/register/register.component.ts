import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { AuthClientService } from './../../services/auth-client.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email : string;
  password : string;

  constructor(private authClient : AuthClientService, private route :Router, private flashMessage : FlashMessagesService) { }

  ngOnInit(): void {
  }
  onRegister(){
    this.authClient.register(this.email, this.password)
      .then(register => {
          this.flashMessage.show('You are logged !',
          {
            cssClass : "aler alert-success",
            timeout: 5000
          })
          this.route.navigate(['/']);
      })
  }
}
