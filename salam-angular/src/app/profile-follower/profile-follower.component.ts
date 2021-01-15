import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile-follower',
  templateUrl: './profile-follower.component.html',
  styleUrls: ['./profile-follower.component.css']
})
export class ProfileFollowerComponent implements OnInit {
  id : number;
  page;
  type;
  constructor(private roote : ActivatedRoute) { }

  ngOnInit(): void {
    this.roote.paramMap.subscribe(request => {
      this.id = Number(request.get('username'));
    })

    this.roote.queryParamMap.subscribe(request => {
      this.page = Number(request.get('page'));
      this.type = request.get('type');
    })
  }

}
