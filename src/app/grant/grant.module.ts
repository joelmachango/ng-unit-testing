import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GrantRoutingModule } from './grant-routing.module';

import { GrantAddComponent } from './grant-add/grant-add.component';
import { GrantListComponent } from './grant-list/grant-list.component';
import { FooterComponent } from '../common/footer/footer.component';

@NgModule({
  declarations: [GrantAddComponent, GrantListComponent, FooterComponent],
  imports: [CommonModule, GrantRoutingModule],
})
export class GrantModule {}
