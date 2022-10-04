import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent implements OnInit {
  @Input() article: Article;
  @HostBinding('attr.class') cssClass = 'row';

  // votes: number;
  // title: string;
  // link: string;
  constructor() {
    this.article = new Article('Angular', 'http://angular.io', 7);
    // this.title = 'Angular';
    // this.link = 'http://angular.io';
    // this.votes = 7;
  }
  voteUp(): boolean {
    // page84
    this.article.voteUp();
    return false;
  }

  voteDown(): boolean {
    this.article.voteDown();
    return false;
  }
  ngOnInit() {}
}
