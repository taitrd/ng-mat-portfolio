import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PROJECTS } from '../shared';
import { IPost, Post } from '../shared/portfolio-post.model';

@Component({
  selector: 'app-portfolio-post-detail',
  templateUrl: './portfolio-post-detail.component.html',
  styleUrls: ['./portfolio-post-detail.component.scss']
})
export class PortfolioPostDetailComponent implements OnInit {
  post: IPost;
  constructor(
    private activatedRoute: ActivatedRoute,
  ) {
    this.post = new Post();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(observer => {
      const item = PROJECTS.find(i => i.slug === observer.slug);
      this.post = new Post(item);
    });
  }
}
