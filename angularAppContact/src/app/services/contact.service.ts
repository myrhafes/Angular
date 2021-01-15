import { Contact } from './../models/contacts';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contactsCollection : AngularFirestoreCollection<Contact>
  contacts : Observable<Contact[]>;
  contactDoc : AngularFirestoreDocument<Contact>;

  constructor(private afs : AngularFirestore) {
    this.contactsCollection = afs.collection('contacts');
    this.contacts = this.contactsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Contact;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
    console.log(this.contacts);
}

  getContacts(){
    return this.contacts;
  } 
  
  newContact(contact : Contact){
    this.contactsCollection.add(contact);
  }

  updateContact(contact : Contact){
    this.contactDoc = this.contactsCollection.doc<Contact>(contact.id);
    this.contactDoc.update(contact);
  }

  deleteContact(contact){
    this.contactDoc = this.contactsCollection.doc<Contact>(contact.id);
    this.contactDoc.delete();
  }
}

