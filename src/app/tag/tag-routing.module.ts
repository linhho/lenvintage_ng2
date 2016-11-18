import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TagComponent } from './tag.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'tag/:slug', component: TagComponent }
    ])
  ]
})
export class TagRoutingModule { }
