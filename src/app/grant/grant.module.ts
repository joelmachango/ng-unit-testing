import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GrantRoutingModule } from './grant-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { GrantAddComponent } from './grant-add/grant-add.component';
import { GrantListComponent } from './grant-list/grant-list.component';
import { FooterComponent } from '../common/footer/footer.component';

import { GrantService } from '../grant/grant.service';

@NgModule({
  declarations: [GrantAddComponent, GrantListComponent, FooterComponent],
  imports: [CommonModule, GrantRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [GrantService],
})
export class GrantModule {}
