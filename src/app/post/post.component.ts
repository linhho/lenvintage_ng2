import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ModelService } from '../shared/api.service';
import { Post } from '../model/post.model';

@Component({
  selector: 'post',
  templateUrl: 'post.component.html'
})

export class PostComponent {
  sub: any;
  image: string;
  id: number;
  title: string;
  content: string;
  slug: string;
  date: string;

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
    this.scrollToMain();
    this.sub = this._route.params.subscribe(params => {
        this.model.get('http://admin.lenvintage.com/wp-json/wp/v2/posts/'+params['id']).subscribe(data => {
            this.id = data.id;
            this.image = data.better_featured_image.source_url;
            this.title = data.title.rendered;
            this.slug = data.slug;
            this.date = data.date;
            this.content = data.content.rendered;
            this.scrollToMain();
        });
    });
  }
}
