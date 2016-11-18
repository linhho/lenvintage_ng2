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
  postSlug:string;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    public model: ModelService) {
    this.universalInit();
  }
  scrollToMain() {
    let ele = document.getElementById("main"); 
    setTimeout(function(){
      var scrollStep = -window.scrollY / (ele.offsetTop / 15),
      scrollInterval = setInterval(function(){
          if ( window.scrollY > ele.offsetTop ) {
              window.scrollBy( 0, scrollStep );
          }
          else clearInterval(scrollInterval); 
      },15);
    },200)  
  }
  universalInit() {
    this.sub = this._route.params.subscribe(params => {
      this.postSlug = params['slug'];
      this.getData(this.postSlug);
      this.scrollToMain()
    });
  }
  getData(postSlug:string) {
    let num = this.postNum + 5;
      this.model.get('http://admin.lenvintage.com/wp-json/wp/v2/posts/?filter[category_name]=' + postSlug + '&per_page=' + num).subscribe(data => {
        this.posts = data;
        this.postsLength = data.length;
      });
  }
  postLoadMore() {
    this.postNum += 5;
    this.getData(this.postSlug);
  }
}
