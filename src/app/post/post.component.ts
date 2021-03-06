import { Component, OnInit, ElementRef, AfterViewInit, OnDestroy, Renderer, ChangeDetectionStrategy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ModelService } from '../shared/api.service';
import { Post } from '../model/post.model';
import { Title } from '@angular/platform-browser';

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
  link: string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    public model: ModelService,
    private el: ElementRef, 
    private renderer: Renderer,
    public titlePage: Title) {
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
            this.link = data.link;
            this.titlePage.setTitle(this.title + ' | LEN vintage');
            this.scrollToMain();
            this.resetDisqus();
        });
    });
  }

  ngAfterViewInit() {
    if ((<any>window).DISQUS === undefined) {
      this.addDisqusScriptTag();
    }
    else {
      this.resetDisqus();
    }
  }

  /**
   * Get disqus config
   */
  getConfig() {
    let _self = this;
    return function () {
      this.page.url = this.link || window.location.href;
      this.page.identifier = this.link || window.location.href;
    };
  }

  /**
   * Reset disqus with new inputs.
   */
  resetDisqus() {
    (<any>window).DISQUS.reset({
      reload: true,
      config: this.getConfig()
    });
  }

  /**
   * Add disqus script to the document.
   */
  addDisqusScriptTag() {
    (<any>window).disqus_config = this.getConfig();

    let script = this.renderer.createElement(this.el.nativeElement, 'script');
    script.src = `//lenvintage.disqus.com/embed.js`;
    script.async = true;
    script.type = 'text/javascript';
    script.setAttribute('data-timestamp', new Date().getTime().toString());
  }
}
