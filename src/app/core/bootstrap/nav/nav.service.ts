import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { INav, NavName } from './nav.model';

export interface INavData {
  name: NavName;
  data: BehaviorSubject<INav>;
  observable: Observable<INav>;
}

@Injectable({
  providedIn: 'root',
})
export class NavService {
  private navigationList: INavData[] = [];
  public currentUrl$ = new BehaviorSubject<string>(undefined);

  /**
   * Get event object
   * @param name event name
   * @returns evemt
   */
  get(name: NavName, defaultInstance: any = null): INavData {
    let item = this.navigationList.find(i => i.name === name);
    if (!item) {
      item = this.add(name, new BehaviorSubject<INav>(defaultInstance));
    }
    return item;
  }

  /**
   * Add more event
   * @param name event name
   * @param event event
   */
  private add(name: NavName, data: BehaviorSubject<INav>): INavData {
    const item: INavData = {
      name, data,
      observable: data
        .asObservable()
        .pipe(
          filter(i => !!i)
        )
    };
    this.navigationList.push(item);
    return item;
  }


  /**
   * Destroy subscription
   * @param name
   */
  destroy(name: NavName): void {
    const item = this.get(name);
    item.data.unsubscribe();
  }

  setOne(name: NavName, data: INav): INavData {
    let item = this.get(name);
    if (!item) {
      item = this.add(name, new BehaviorSubject<INav>(data));
    } else {
      item.data.next(data);
    }
    return item;
  }

  /** Initialize the menu data. */
  set(name: NavName|NavName[], data: INav): INavData|INavData[]|null {
    if (typeof name === 'string') {
      return this.setOne(name, data);
    } else if (Array.isArray(name)) {
      const dataArr: INavData[] = [];
      for (const item of name) {
        const result = this.setOne(item, data);
        dataArr.push(result);
      }
      return dataArr;
    }
    return null;
  }
}
