import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CategoryComponent } from './category.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'category/:slug', component: CategoryComponent }
    ])
  ]
})
export class CategoryRoutingModule { }
