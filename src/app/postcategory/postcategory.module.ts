import { NgModule }  from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import { PostCategoryComponent } from './postcategory.component';

@NgModule({
    declarations: [ PostCategoryComponent ],
    imports: [ 
        SharedModule,
        CommonModule ],
    exports: [
        CommonModule,
        FormsModule,
        PostCategoryComponent
    ]
})
export class PostCategoryModule { }
