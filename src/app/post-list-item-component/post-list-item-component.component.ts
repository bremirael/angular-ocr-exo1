import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLoveIts: number;
  @Input() postCreatedAt: Date;
  

  constructor() { }

  ngOnInit() {
  }

  giveLoveIts() {
    this.postLoveIts = this.postLoveIts + 1;
  }

  removeLoveIts() {
    this.postLoveIts = this.postLoveIts - 1;
  }

  getColor() {
    if (this.postLoveIts < 0) {
      return 'red';
    } else if (this.postLoveIts > 0) {
      return 'green';
    } else if (this.postLoveIts == 0) {
      return 'white';
    }
  }
}
