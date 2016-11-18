import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { PostCategoryModule } from '../postcategory/postcategory.module';

@NgModule({
  imports: [
    SharedModule,
    HomeRoutingModule,
    PostCategoryModule
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule { }
