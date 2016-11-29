import  { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { ModelService } from '../shared/api.service';

@Component({
    selector: 'post-category',
    template: `<a routerLink="/category/{{slug}}"><i class="fa {{desc}}" aria-hidden="true"></i></a>`
})
export class PostCategoryComponent implements OnChanges {
    @Input() postId: number;
    slug: string;
    desc: string;

    constructor( public model: ModelService) {}

    ngOnChanges(): void {
            this.model.get('http://admin.lenvintage.com/wp-json/wp/v2/categories?post='+this.postId).subscribe(data => {
                this.slug = data[0].slug;
                this.desc = data[0].description; 
            });
    }  
}
