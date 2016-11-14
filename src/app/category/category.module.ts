import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { CategoryComponent } from './category.component';
import { CategoryRoutingModule } from './category-routing.module';

@NgModule({
  imports: [
    SharedModule,
    CategoryRoutingModule
  ],
  declarations: [
    CategoryComponent
  ]
})
export class CategoryModule { }
