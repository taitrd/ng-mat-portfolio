import { Injectable } from '@angular/core';
import { environment } from '@env';
import { BehaviorSubject, Observable } from 'rxjs';
import { layouts } from './layout.constant';
import { ILayout, LAYOUT, Layout } from './layout.model';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  private layout: BehaviorSubject<ILayout>;
  constructor() {
    this.layout = new BehaviorSubject<ILayout>(new Layout());
  }

  setup(name?: LAYOUT): void {
    let layout = layouts.find(i => i.name === name);
    if (!layout) {
      layout = layouts.find(i => i.name === environment.defaultLayout);
    }
    if (layout) {
      const newInstance = new Layout()
        .assign<Layout>(layout)
        .build();
      this.layout.next(newInstance);
    }
  }

  observable(): Observable<ILayout> {
    return this.layout.asObservable();
  }

  destroy(): void {
    return this.layout.unsubscribe();
  }
}
