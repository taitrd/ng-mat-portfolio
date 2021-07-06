import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IPost, Post, PROJECTS, SKILLS } from '../../portfolio-post/shared';
import { PortfolioService } from '../shared';

@Component({
  selector: 'app-portfolio-home',
  templateUrl: './portfolio-home.component.html',
  styleUrls: ['./portfolio-home.component.scss']
})
export class PortfolioHomeComponent implements OnInit, OnDestroy {
  projects: IPost[];
  skills: IPost[];
  sources: any[];
  sub: Subscription;
  constructor(
    private service: PortfolioService,
  ) {
    this.sources = [];
  }

  ngOnInit(): void {
    this.projects = [...PROJECTS];
    this.skills = [...SKILLS];
    const repositories = sessionStorage.getItem('repositories');
    if (repositories) {
      this.sources = JSON.parse(repositories);
      return;
    } else {
      this.sub = this.service.githubGetManyRepo().subscribe(response => {
        if (response.body) {
          this.sources = response.body
          .filter(
            i => !['taitrd.github.io'].includes(i.name))
          .map(repo => new Post({
            id: repo.id,
            title: repo.full_name,
            slug: repo.name,
            description: repo.description,
            meta: {
              github_repo: repo,
            }
          }));
          sessionStorage.setItem('repositories', JSON.stringify(this.sources));
        }
      });
    }
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

}
