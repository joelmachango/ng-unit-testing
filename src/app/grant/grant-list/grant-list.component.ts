import { Component, OnInit } from '@angular/core';
import { GrantService } from '../grant.service';

@Component({
  selector: 'app-grant-list',
  templateUrl: './grant-list.component.html',
  styleUrls: ['./grant-list.component.scss'],
})
export class GrantListComponent implements OnInit {
  text = 'grants list page';
  grants: any;

  constructor(private grantService: GrantService) {
    this.grants = this.grantService.getGrants();
  }

  ngOnInit(): void {}
}
