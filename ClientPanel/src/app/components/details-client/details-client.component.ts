import { Client } from './../models/client';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ClientService } from './../../services/client.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-details-client',
  templateUrl: './details-client.component.html',
  styleUrls: ['./details-client.component.css']
})
export class DetailsClientComponent implements OnInit {

  id : string;
  client : Client = {
    firstName : "",
    lastName : "",
    email : "",
    phone : null,
    balance : null
  }
  showBalance: boolean = false;

  constructor(private clientService : ClientService, private route : ActivatedRoute, private router : Router, private flashMessage : FlashMessagesService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.clientService.getClient(this.id).subscribe(client => {
      this.client = client;
    })
  }

  onSubmit(){
    this.client.id = this.id;
    this.clientService.updateClient(this.client);
    this.flashMessage.show('balance updated', {cssClass : 'alert alert-warning', timeout : 4000})
    this.showBalance = false;
  }

  deleteClient(id:string){
    swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        );
        this.clientService.deleteClient(id);
        this.router.navigate(['/']);
      }
    })
    
  }

}
