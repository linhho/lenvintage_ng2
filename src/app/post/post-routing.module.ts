import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PostComponent } from './post.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'post/:id/:slug', component: PostComponent }
    ])
  ]
})
export class PostRoutingModule { }
