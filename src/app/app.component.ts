import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    {
      title: 'Snowy Mountain',
      imageUrl: '/assets/mountain.jpeg',
      username: 'mounttainlover',
      mycontent: 'Here is a picture of a mountain.'
    },
    {
      title: 'Neat Tree',
      imageUrl: '/assets/tree.jpeg',
      username: 'naturedude621',
      mycontent: 'Here is a picture of a neat tree'
    },
    {
      title: 'Mountain Biking',
      imageUrl: '/assets/biking.jpeg',
      username: 'biking1222',
      mycontent: 'I did some biking today'
    }
  ]
}
