import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ModelService } from '../shared/api.service';

@Component({
  selector: 'category',
  templateUrl: 'category.component.html'
})
export class CategoryComponent {
  categorySlug: string;
  sub: any;
  posts = [];
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    public model: ModelService) {
      this.universalInit();
    }

  // ngOnInit() {
  //     this.sub = this._route.params.subscribe(params => {
  //           this.universalInit(params['slug']); 
  //       });
  //   }
  // ngOnDestroy() {
  //       this.sub.unsubscribe();
  //   }

  universalInit() {
    this.sub = this._route.params.subscribe(params => {
            this.model.get('http://admin.lenvintage.com/wp-json/wp/v2/posts/?filter[category_name]='+params['slug']).subscribe(data => {
              this.posts = data;
            });
        });
  }
}
