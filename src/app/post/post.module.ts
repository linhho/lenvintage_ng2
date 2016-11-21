import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { PostComponent } from './post.component';
import { PostRoutingModule } from './post-routing.module';
import { PostCategoryModule } from '../postcategory/postcategory.module';

@NgModule({
  imports: [
    SharedModule,
    PostRoutingModule,
    PostCategoryModule
  ],
  declarations: [
    PostComponent
  ]
})
export class PostModule { }
