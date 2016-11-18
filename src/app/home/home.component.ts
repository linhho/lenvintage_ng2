import { Component, OnInit } from '@angular/core';

import { ModelService } from '../shared/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../model/post.model';


@Component({
  selector: 'home',
  templateUrl: 'home.component.html'  
})
export class HomeComponent {
  posts:[Post];
  postsLength: number;
  postNum:number = 5;
  constructor(private _route: ActivatedRoute,
    private _router: Router,
    public model: ModelService) {
      this.scrollToMain();
      this.universalInit();
    }
  scrollToMain() {
    let ele = document.getElementById("main"); 
    setTimeout(function(){
      var scrollStep = -window.scrollY / (ele.offsetTop / 15),
      scrollInterval = setInterval(function(){
          if ( window.scrollY > 0 ) {
              window.scrollBy( 0, scrollStep );
          }
          else clearInterval(scrollInterval); 
      },15);
    },200)  
  }
  universalInit() {
    let num = this.postNum + 5;
    this.model.get('http://admin.lenvintage.com/wp-json/wp/v2/posts/?per_page='+num).subscribe(data => {
        this.posts = data;
        this.postsLength = data.length;
    });
  }
  postLoadMore() {
    this.postNum += 5;
    this.universalInit();
  }
}
