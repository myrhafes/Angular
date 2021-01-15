import { Component, OnInit } from '@angular/core';
import { Client } from './../models/client';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ClientService } from './../../services/client.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {

  id : string;
  client : Client = {
    firstName : "",
    lastName : "",
    email : "",
    phone : null,
    balance : null
  }

  constructor(private clientService : ClientService, private route : ActivatedRoute, private router : Router, private flashMessage : FlashMessagesService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.clientService.getClient(this.id).subscribe(client => {
      this.client = client;
    });
  }

  onSubmit(){
    this.client.id = this.id;
    this.clientService.updateClient(this.client);
    this.flashMessage.show('Client updated', {cssClass : 'alert alert-primary', timeout : 4000});
    return this.router.navigate(['/clients/'+this.id]);
  }

}
