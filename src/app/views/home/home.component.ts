import { Component, OnInit } from '@angular/core';
import { article } from './article';
import { ArticleService } from '../../services/article.service';
import { createOfflineCompileUrlResolver } from '@angular/compiler';

@Component({
  selector: 'home-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  stories: Array<article>;

  constructor(private aserve: ArticleService) { }

  async ngOnInit() {
    this.stories = await this.aserve.getArticles();
  }
  
}
