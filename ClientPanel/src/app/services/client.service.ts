import { Client } from './../components/models/client';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  clientsCollection : AngularFirestoreCollection<Client>;
  clientDoc : AngularFirestoreDocument<Client>;
  clients : Observable<Client[]>;

  constructor(private afs : AngularFirestore) {
    this.clientsCollection = this.afs.collection('clients');
    this.clients = this.clientsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Client;
        const id = a.payload.doc.id;
        return { id, ...data };
       }))  
      );
  }
  

  getClients(){
    return this.clients;
  }

  newClient(client : Client){
    this.clientsCollection.add(client);
  }

  getClient(id : string){
    return this.clientsCollection.doc(id).valueChanges();
  }

  updateClient(client : Client){
    this.clientDoc =  this.clientsCollection.doc(client.id);
    this.clientDoc.update(client);
  }

  deleteClient(id :string) {
    this.clientDoc = this.clientsCollection.doc(id);
    this.clientDoc.delete();
  }
}
