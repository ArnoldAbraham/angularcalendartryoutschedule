import { addDays, addHours, startOfDay } from 'date-fns';

import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Subject } from 'rxjs';
import {
  CalendarEvent,
  CalendarEventTimesChangedEvent
} from 'angular-calendar';
import { colors } from '../demo-utils/colors';

@Component({
  selector: 'mwl-demo-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'template.html'
})
export class DemoComponent {
  viewDate: Date = new Date();

  events: CalendarEvent[] = [
    {
      start: addHours(startOfDay(new Date()), 5),
      end: addHours(startOfDay(new Date()), 17),
      title: 'Event 1',
      color: colors.yellow,
      allDay: true,
      draggable: true
    },
    {
      start: addHours(startOfDay(addDays(new Date(), 1)), 2),
      end: addHours(startOfDay(addDays(new Date(), 1)), 18),
      title: 'Event 2',
      color: colors.red,
      allDay: true,
      draggable: true
    },
    {
      start: addHours(startOfDay(new Date()), 8),
      title: 'Event 3',
      color: colors.blue,
      allDay: true,
      draggable: true
    },
     {
      start: addHours(startOfDay(new Date()), 8),
      title: 'Event 4',
      color: colors.magenta,
      allDay: true,
      draggable: true
    },
     {
      start: addHours(startOfDay(new Date()), 8),
      title: 'Event 5',
      color: colors.pink,
      allDay: true,
      draggable: true
    },
     {
      start: addHours(startOfDay(new Date()), 8),
      title: 'Event 6',
      color: colors.green,
      allDay: true,
      draggable: true
    }
  ];

  refresh: Subject<any> = new Subject();

  eventTimesChanged({
    event,
    newStart,
    newEnd
  }: CalendarEventTimesChangedEvent): void {
    event.start = newStart;
    event.end = newEnd;
    this.refresh.next();
  }
}
