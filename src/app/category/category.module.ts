import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { CategoryComponent } from './category.component';
import { CategoryRoutingModule } from './category-routing.module';
import { PostCategoryModule } from '../postcategory/postcategory.module';

@NgModule({
  imports: [
    SharedModule,
    CategoryRoutingModule,
    PostCategoryModule
  ],
  declarations: [
    CategoryComponent
  ]
})
export class CategoryModule { }
