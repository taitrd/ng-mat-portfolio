import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouteService } from '@core';
import { INav, LayoutService, Nav, NavService } from '@core/bootstrap';
import { environment } from '@env';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ng-mat-portfolio';
  constructor(
    private routeService: RouteService,
    private navService: NavService,
    private layoutService: LayoutService,
    private titleService: Title,
  ) {}

  ngOnInit(): void {
    this.routeService.getFinalChildOnNavigationEnd().subscribe(latestRoute => {
      const pageTitle = latestRoute.snapshot.data.pageTitle;
      if (latestRoute && pageTitle) {
        this.titleService.setTitle(`${environment.appTitle} - ${pageTitle}`);
      }
    });
    this.navService.set(['main', 'sidebar'], new Nav()
      .assign<INav>({
        navItems: [],
      }));
    this.layoutService.setup();
  }
}
