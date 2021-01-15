import { ContactService } from './../../services/contact.service';
import { Contact } from './../../models/contacts';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  contact : Contact = {
    name : '',
    phone : null
  }

  statusContact : boolean = false;
  
  constructor(private contactService : ContactService) { }

  ngOnInit(): void {
  }

  newContact(){
    this.contactService.newContact(this.contact);
    this.contact = {
      name : '',
      phone : null
    }
    this.statusContact = false;
  }
}
