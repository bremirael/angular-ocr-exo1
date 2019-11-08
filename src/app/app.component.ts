import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts = [
    {
      title: 'Mon premier post',
      content: 'Création d\'une application sur openclassroom avec Angular 8',
      loveIts: 0,
      created_at: new Date("1/1/2015 14:38")
    },
    {
      title: 'Mon deuxième post',
      content: 'Les légumes c\'est bon pour la santé, il faudrait manger 5 fruits et légumes par jour et faire du sport',
      loveIts: 0,
      created_at: new Date("1/1/2016 6:22")
    },
    {
      title: 'Mon troisième post',
      content: 'Encore du travail ? Travail terminéééé',
      loveIts: 0,
      created_at: new Date("1/1/2018 11:38")
    }
  ]

  constructor() { }

  ngOnInit() {
  }
}
