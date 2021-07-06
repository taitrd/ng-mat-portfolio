import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PortfolioProfileComponent } from './portfolio-profile.component';

describe('PortfolioProfileComponent', () => {
  let component: PortfolioProfileComponent;
  let fixture: ComponentFixture<PortfolioProfileComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
