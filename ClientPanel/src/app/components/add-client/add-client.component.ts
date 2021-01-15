import { ClientService } from './../../services/client.service';
import { Client } from './../models/client';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {

  client : Client = {
    firstName : "",
    lastName : "",
    email : "",
    phone : null,
    balance : null
  }

  constructor(private clientService:ClientService, private route : Router, private flashMessages : FlashMessagesService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.clientService.newClient(this.client);
    this.flashMessages.show('Client added successfuly.', {cssClass: 'alert alert-primary',timeout: 7000});
    return this.route.navigate(['/']);
  }
}
