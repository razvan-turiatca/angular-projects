import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currentPage: number = 0;
  images = [
    {
      title: 'At the beach',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'At the mountains',
      url: 'https://plus.unsplash.com/premium_photo-1676573884291-bac996cdf740?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW91bnRhaW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'At the lake',
      url: 'https://images.unsplash.com/photo-1485591926658-da9e25c13893?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF0JTIwdGhlJTIwbGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'At the south pole',
      url: 'https://images.unsplash.com/photo-1496497243327-9dccd845c35f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXQlMjB0aGUlMjBzb3V0aCUyMHBvbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'At the beach',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'At the mountains',
      url: 'https://plus.unsplash.com/premium_photo-1676573884291-bac996cdf740?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW91bnRhaW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'At the lake',
      url: 'https://images.unsplash.com/photo-1485591926658-da9e25c13893?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF0JTIwdGhlJTIwbGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'At the south pole',
      url: 'https://images.unsplash.com/photo-1496497243327-9dccd845c35f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXQlMjB0aGUlMjBzb3V0aCUyMHBvbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'At the beach',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'At the mountains',
      url: 'https://plus.unsplash.com/premium_photo-1676573884291-bac996cdf740?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW91bnRhaW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'At the lake',
      url: 'https://images.unsplash.com/photo-1485591926658-da9e25c13893?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF0JTIwdGhlJTIwbGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'At the south pole',
      url: 'https://images.unsplash.com/photo-1496497243327-9dccd845c35f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXQlMjB0aGUlMjBzb3V0aCUyMHBvbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'At the beach',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'At the mountains',
      url: 'https://plus.unsplash.com/premium_photo-1676573884291-bac996cdf740?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW91bnRhaW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'At the lake',
      url: 'https://images.unsplash.com/photo-1485591926658-da9e25c13893?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF0JTIwdGhlJTIwbGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'At the south pole',
      url: 'https://images.unsplash.com/photo-1496497243327-9dccd845c35f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXQlMjB0aGUlMjBzb3V0aCUyMHBvbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'At the beach',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'At the mountains',
      url: 'https://plus.unsplash.com/premium_photo-1676573884291-bac996cdf740?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW91bnRhaW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'At the lake',
      url: 'https://images.unsplash.com/photo-1485591926658-da9e25c13893?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF0JTIwdGhlJTIwbGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'At the south pole',
      url: 'https://images.unsplash.com/photo-1496497243327-9dccd845c35f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXQlMjB0aGUlMjBzb3V0aCUyMHBvbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'At the beach',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'At the mountains',
      url: 'https://plus.unsplash.com/premium_photo-1676573884291-bac996cdf740?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW91bnRhaW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'At the lake',
      url: 'https://images.unsplash.com/photo-1485591926658-da9e25c13893?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF0JTIwdGhlJTIwbGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'At the south pole',
      url: 'https://images.unsplash.com/photo-1496497243327-9dccd845c35f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXQlMjB0aGUlMjBzb3V0aCUyMHBvbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    },
  ];
  handleClick(value: any) {
    this.currentPage = value;
  }
  checkWindowIndex(index: number) {
    return Math.abs(this.currentPage - index) < 5;
  }
}
