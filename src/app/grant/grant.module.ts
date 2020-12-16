import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GrantRoutingModule } from './grant-routing.module';

import { GrantAddComponent } from './grant-add/grant-add.component';
import { GrantListComponent } from './grant-list/grant-list.component';

@NgModule({
  declarations: [GrantAddComponent, GrantListComponent],
  imports: [CommonModule, GrantRoutingModule],
})
export class GrantModule {}
