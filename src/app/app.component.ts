import { Component } from '@angular/core';
import { ModelService } from './shared/api.service';

@Component({
  selector: 'len-app',
  templateUrl: '/app.component.html'
})
export class AppComponent {
  categories = [];
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
    
  }
}
