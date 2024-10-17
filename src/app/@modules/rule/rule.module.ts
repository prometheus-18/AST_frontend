import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RuleRoutingModule } from './rule-routing.module';
import { RuleComponent } from './rule.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    RuleComponent
  ],
  imports: [
    CommonModule,
    RuleRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class RuleModule { }
