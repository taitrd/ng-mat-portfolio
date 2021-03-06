import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PortfolioAboutComponent } from './portfolio-about.component';

describe('PortfolioAboutComponent', () => {
  let component: PortfolioAboutComponent;
  let fixture: ComponentFixture<PortfolioAboutComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
