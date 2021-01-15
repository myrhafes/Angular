import { Contact } from './../../models/contacts';
import { ContactService } from './../../services/contact.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'list-contacts',
  templateUrl: './list-contacts.component.html',
  styleUrls: ['./list-contacts.component.css']
})
export class ListContactsComponent implements OnInit {

  contacts;
  myContact : Contact;
  statusContact : boolean = false;
  constructor(private contactService : ContactService) { }

  ngOnInit(): void {
    this.contactService.getContacts().subscribe(contacts => {
      this.contacts = contacts;
    })
  }

  updateContact(contact : Contact){
    this.contactService.updateContact(contact);
    this.statusContact = false;
  }

  editContact(contact){
    this.statusContact = !this.statusContact;
    this.myContact = contact;
  }

  deleteContact(contact){
    this.contactService.deleteContact(contact);
    this.statusContact = false;
  }

}
