import { Component } from '@angular/core';
import { ModelService } from './shared/api.service';
import { Category } from './model/category.model';
import { Post } from './model/post.model';

@Component({
  selector: 'len-app',
  templateUrl: '/app.component.html'
})
export class AppComponent {
  categories:Category[] = [];
   randomPosts:Post[] = [];
  tags = [];
  constructor(public model: ModelService) {

    // we need the data synchronously for the client to set the server response
    // we create another method so we have more control for testing
    this.universalInit();
  }

  universalInit() {
    //categories
    this.model.get('http://admin.lenvintage.com/wp-json/wp/v2/categories').subscribe(data => {
      this.categories = data;
    });
    //tags
    this.model.get('http://admin.lenvintage.com/wp-json/wp/v2/tags').subscribe(data => {
      this.tags = data;
    });
    //random posts
    this.model.get('http://admin.lenvintage.com/wp-json/wp/v2/posts/?filter[orderby]=rand&per_page=5').subscribe(data => {
      this.randomPosts = data;
    });
  }
  openOverlay(element: string) {
      document.getElementById(element).style.width = "100%";
  }
  
  closeOverlay(element: string) {
      document.getElementById(element).style.width = "0%";
  }
}
