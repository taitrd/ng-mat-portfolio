import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { SafeStyle } from '@angular/platform-browser';
import { Layout, LayoutService } from '@core/bootstrap';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-split-layout',
  templateUrl: './split-layout.component.html',
  styleUrls: ['./split-layout.component.scss']
})
export class SplitLayoutComponent implements OnInit, OnDestroy, AfterViewInit {
  ngNavStyle: SafeStyle;
  ngSidebarStyle: SafeStyle;
  ngLayoutStyle: SafeStyle;
  ngMainStyle: SafeStyle;
  layoutSub: Subscription;
  breakpointSub: Subscription;
  left = 30;
  right = 70;
  isXsm$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.XSmall])
    .pipe(
      map(result => result.matches)
    );
  @ViewChild('sidebar') sidebar: any;
  constructor(
    private breakpointObserver: BreakpointObserver,
    private layoutService: LayoutService,
  ) { }

  ngOnInit(): void {
    this.layoutSub = this.layoutService.observable().subscribe((layout: Layout) => {
      this.ngLayoutStyle = layout.ngLayoutOptions.ngStyle;
      this.ngNavStyle = layout.ngNavOptions.ngStyle || {};
      this.ngSidebarStyle = layout.ngSidebarOptions.ngStyle || {};
      this.ngMainStyle = layout.ngMainOptions.ngStyle || {};
    });
  }

  ngOnDestroy(): void {
    if (this.layoutSub) {
      this.layoutSub.unsubscribe();
    }
    if (this.breakpointSub) {
      this.breakpointSub.unsubscribe();
    }
  }

  ngAfterViewInit(): void {
    // tslint:disable-next-line:no-string-literal
    if (this.ngSidebarStyle && this.ngSidebarStyle['position'] === 'fixed') {
      this.breakpointSub = this.isXsm$.subscribe(res => {
        console.log(res);
        if (res) {
          const heightNav = this.sidebar.nativeElement.offsetHeight;
          this.ngMainStyle = {
            'margin-top.px': heightNav,
          };
          // tslint:disable-next-line:no-string-literal
          this.ngSidebarStyle = {
            ...this.ngSidebarStyle,
            right: '0px',
          };
        } else {
          this.ngMainStyle = {
            'margin-left': this.left + '%',
          };
          // tslint:disable-next-line:no-string-literal
          this.ngSidebarStyle = {
            ...this.ngSidebarStyle,
            right: this.right + '%',
          };
        }
      });
    }
  }
}
