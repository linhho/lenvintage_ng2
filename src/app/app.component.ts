import { Component, OnChanges } from '@angular/core';
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
  searchPosts:Post[] = [];
  searchKey:string;
  tags = [];
  constructor(public model: ModelService) {

    // we need the data synchronously for the client to set the server response
    // we create another method so we have more control for testing
    this.universalInit();
  }

  universalInit() {
    //categories
    this.getCategory();
    //tags
    this.getTag();
    //random posts
    this. getPostRandom();
    //
    //search
    this.getSearchData();
  }
  //category data
  getCategory(){
    this.model.get('http://admin.lenvintage.com/wp-json/wp/v2/categories').subscribe(data => {
          this.categories = data;
        });
  }
  //
  //tags data
  getTag(){
    this.model.get('http://admin.lenvintage.com/wp-json/wp/v2/tags').subscribe(data => {
      this.tags = data;
    });
  }
  //
  //random posts data
  getPostRandom(){
    this.model.get('http://admin.lenvintage.com/wp-json/wp/v2/posts/?filter[orderby]=rand&per_page=5').subscribe(data => {
      this.randomPosts = data;
    });
  }
  //
  //search data
  getSearchData(){
    this.model.get('http://admin.lenvintage.com/wp-json/wp/v2/posts?search='+this.searchKey).subscribe(data => {
      this.searchPosts = data;
      console.log(this.searchKey);
    });
  }
  //
  // overLay menu and search
  openOverlay(element: string) {
      document.getElementById(element).style.width = "100%";
  }
  
  closeOverlay(element: string) {
      document.getElementById(element).style.width = "0%";
  }
  //
  // scroll to main
  scrollToUpMain() {
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
    scrollToDownMain() {
        let ele = document.getElementById("main"); 
        setTimeout(function(){
          var scrollStep = ele.offsetTop / (window.scrollY+100 / 15),
          scrollInterval = setInterval(function(){
              if ( window.scrollY < ele.offsetTop ) {
                  window.scrollBy( 0, scrollStep );
              }
              else clearInterval(scrollInterval); 
          },15);
        },200)  
    }
}
