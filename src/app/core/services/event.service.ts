import {filter} from 'rxjs/operators';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { EventName } from './event';
import { Injectable } from '@angular/core';

interface IEvent {
  name: EventName|any;
  event: BehaviorSubject<any>;
  observable: Observable<any>;
}

/**
 * Handle events for components
 */
@Injectable({
  providedIn: 'root'
})
export class EventService<T = EventName> {
  private events: IEvent[] = [];
  constructor() { }

  /**
   * Get event object
   * @param name event name
   * @returns event
   */
  private get(name: T|EventName, defaultInstance: any = null): IEvent {
    let item = this.events.find(i => i.name === name);
    if (!item) {
      item = this.add(name, new BehaviorSubject<any>(defaultInstance));
    }
    return item;
  }

  /**
   * Add more event
   * @param name event name
   * @param event event
   */
  private add(name: T|EventName, event: BehaviorSubject<any>): IEvent {
    const item: IEvent = {
      name, event,
      observable: event
        .asObservable()
        .pipe(
          filter(i => !!i)
        )
    };
    this.events.push(item);
    return item;
  }

  /**
   * Next value of event item
   * @param context IEventContext
   */
  broadcast(context: {name: T|EventName, content: any}): void {
    const item = this.get(context.name, context.content);
    item.event.next(context.content);
  }

  /**
   * Get observable
   * @param name event name
   * @returns Observable of event
   */
  observable(name: T|EventName): Observable<any> {
    const item = this.get(name);
    return item.observable;
  }

  /**
   * Get subscription
   * @param name event name
   * @param callback callback function
   * @returns Subscription
   */
  subscribe(name: T|EventName, callback: any): Subscription {
    const item = this.get(name);
    return item.observable.subscribe(callback);
  }

  /**
   * Destroy subscription
   * @param name
   */
  destroy(name: T|EventName): void {
    const item = this.get(name);
    item.event.unsubscribe();
  }
}
