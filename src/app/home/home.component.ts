import { Component } from '@angular/core';

import { ModelService } from '../shared/api.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'home',
  templateUrl: 'home.component.html'  
})
export class HomeComponent {
  posts = [];
  constructor(private _route: ActivatedRoute,
    private _router: Router,
    public model: ModelService) {
      this.model.get('http://admin.lenvintage.com/wp-json/wp/v2/posts').subscribe(data => {
        this.posts = data;
      });
    }
}
