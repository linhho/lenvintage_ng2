import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ModelService } from '../shared/api.service';

@Component({
  selector: 'post',
  templateUrl: 'post.component.html'
})

export class PostComponent{
  sub: any;
  post = {};

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    public model: ModelService) {
      this.universalInit();
    }

  universalInit() {
    this.sub = this._route.params.subscribe(params => {
        this.model.get('http://admin.lenvintage.com/wp-json/wp/v2/posts/'+params['id']).subscribe(data => {
            this.post = data;
            console.log(this.post);
            console.log(params['id']);
        });
    });
  }
}
