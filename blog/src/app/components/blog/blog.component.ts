import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  items =[
    {
      title: 'Kotek',
      text: 'Koteł',
      image: 'http://www.ulubionykolor.pl/images/normal/14032013/7e0d11cfbc4b4b870ed9e990614032013124851.jpg',
    },
    {
      title: 'Ocean',
      text: 'Tytuł',
      image: 'https://www.sciencedaily.com/images/2017/08/170809142044_1_540x360.jpg',
    },
    ]

  constructor() { }

  ngOnInit() {
  }

}
