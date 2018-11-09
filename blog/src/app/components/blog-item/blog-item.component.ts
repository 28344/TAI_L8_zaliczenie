import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.css']
})
export class BlogItemComponent implements OnInit {
  @Input('image') image : string;
  @Input('text') text : string;
  @Input('title') title: string;

  constructor() { }

  ngOnInit() {
  }

}
