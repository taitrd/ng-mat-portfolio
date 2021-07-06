import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {
  ActivatedRoute, NavigationEnd,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RouteService {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  /**
   * Catch navigation end to smallest child route.
   */
  getFinalChildOnNavigationEnd(): Observable<ActivatedRoute> {
    return this.router.events
    .pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map(route => {
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      })
    );
  }

  getFinalChild(route?: ActivatedRoute): ActivatedRoute {
    const child = !route ? this.activatedRoute : route.firstChild;
    if (child) {
      return this.getFinalChild(child);
    } else {
      return route;
    }
  }
}
