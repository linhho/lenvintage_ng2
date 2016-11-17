import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ModelService } from '../shared/api.service';
import { Post } from '../model/post.model';

@Component({
  selector: 'category',
  templateUrl: 'category.component.html'
})
export class CategoryComponent {
  sub: any;
  posts: [Post];
  postsLength:number;
  postNum: number = 5;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    public model: ModelService) {
    this.universalInit();
  }
  universalInit() {
    this.sub = this._route.params.subscribe(params => {
      let num = this.postNum + 5;
      this.model.get('http://admin.lenvintage.com/wp-json/wp/v2/posts/?filter[category_name]=' + params['slug'] + '&per_page=' + num).subscribe(data => {
        this.posts = data;
        this.postsLength = data.length;
      });
    });
  }
  postLoadMore() {
    this.postNum += 5;
    this.universalInit();
  }
}
