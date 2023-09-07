import { FullCalendarModule } from '@fullcalendar/angular';
import { Component, OnInit } from '@angular/core';
import { EventInput } from '@fullcalendar/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

@Component({
  selector: 'app-calendar-view',
  templateUrl: './calendar-view.component.html',
  styleUrls: ['./calendar-view.component.css']
})
export class CalendarViewComponent implements OnInit {
  hol: any = [
    { title: 'Gandi Jayanti', date: '2023-10-02', color: '#0000FF' },
    { title: 'Laxmipujan', date: '2023-11-15', color: '#FF0000' },
    { title: 'Chismas', date: '2023-12-25', color: '#0000FF' }

  ]

  hName: any
  hDate: any
  allHol:Boolean=true

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, interactionPlugin],
    editable: true, // important for activating event interactions!
    selectable: true, // important for activating date selectability!
    dateClick: this.handleDateClick.bind(this),
    events: this.hol,
  };

  eventsPromise: Promise<EventInput> | undefined;

  handleDateClick(arg: any) {
    this.hDate = arg.dateStr
    this.hol.every((e: { [x: string]: string }) => {
      if (e["date"] == arg.dateStr) {
        this.hName = e["title"]
        return false
      }else{
        this.hName = "-"
        return true
      }
    });

  }


  showAllEvents() {
    this.allHol = true
  }

  showLess() {
    this.allHol = false
  }


  constructor() { }
  ngOnInit(): void {
    this.allHol = false
  }
}

