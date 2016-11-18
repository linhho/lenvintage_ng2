import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { TagComponent } from './tag.component';
import { TagRoutingModule } from './tag-routing.module';
import { PostCategoryModule } from '../postcategory/postcategory.module';

@NgModule({
  imports: [
    SharedModule,
    TagRoutingModule,
    PostCategoryModule
  ],
  declarations: [
    TagComponent
  ]
})
export class TagModule { }
