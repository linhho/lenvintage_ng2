import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { PostComponent } from './post.component';
import { PostRoutingModule } from './post-routing.module';

@NgModule({
  imports: [
    SharedModule,
    PostRoutingModule
  ],
  declarations: [
    PostComponent
  ]
})
export class PostModule { }
