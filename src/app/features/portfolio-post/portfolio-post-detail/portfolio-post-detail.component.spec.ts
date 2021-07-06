import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PortfolioPostDetailComponent } from './portfolio-post-detail.component';

describe('PortfolioPostDetailComponent', () => {
  let component: PortfolioPostDetailComponent;
  let fixture: ComponentFixture<PortfolioPostDetailComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioPostDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioPostDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
