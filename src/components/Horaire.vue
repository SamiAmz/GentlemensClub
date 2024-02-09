<<<<<<< HEAD
<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="12">
        <v-calendar
          ref="calendar"
          type="week"
          :now="today"
          :value="today"
          :weekday-format="weekdayFormat"
          :interval-format="intervalFormat"
          :interval-height="60"
          :interval-minutes="60"
          :interval-count="24"
          :intervals-per-day="24"
          :events="events"
          :event-color="getEventColor"
          :event-margin-bottom="3"
          :event-more="false"
          :event-overlap-mode="stack"
          :day-format="dayFormat"
          @click:event="onClickEvent"
          @click:more="onClickMore"
          @click:date="onClickDate"
        ></v-calendar>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      today: new Date().toISOString().substr(0, 10),
      events: [
  {
    name: 'Event 1',
    start: new Date('2024-02-05T12:00:00').toISOString(),
    end: new Date('2024-02-05T13:00:00').toISOString(),
    color: 'blue',
  },
  // ... more events
],
    };
  },
  methods: {
   
    dayFormat(day) {
  console.log('Formatting day:', day);
  const formattedDay = typeof day === 'string' ? day : day.toISOString().split('T')[0];
  console.log('Formatted day:', formattedDay);
  return formattedDay;
},
    getEventColor(event) {
      return event.color;
    },
    onClickEvent(event) {
      // Handle event click
      console.log(event);
    },
    onClickMore(events) {
      // Handle click on 'more' button for overflowing events
      console.log(events);
    },
    onClickDate(day) {
      // Handle click on day cell
      console.log(day);
    },
  },
};
</script>


<style scoped>
.v-calendar {
  /* Your existing styles */
}
</style>

<style>
.v-calendar {
  padding-top: 100px;
}
=======
<script>
import { defineComponent } from 'vue'
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { INITIAL_EVENTS, createEventId } from './event-utils'

export default defineComponent({
  components: {
    FullCalendar,
  },
  data() {
    return {
      calendarOptions: {
        plugins: [
          dayGridPlugin,
          timeGridPlugin,
          interactionPlugin // needed for dateClick
        ],
        headerToolbar: {
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        initialView: 'dayGridMonth',
        initialEvents: INITIAL_EVENTS, // alternatively, use the `events` setting to fetch from a feed
        editable: true,
        selectable: true,
        selectMirror: true,
        dayMaxEvents: true,
        weekends: true,
        select: this.handleDateSelect,
        eventClick: this.handleEventClick,
        eventsSet: this.handleEvents
        /* you can update a remote database when these fire:
        eventAdd:
        eventChange:
        eventRemove:
        */
      },
      currentEvents: [],
    }
  },
  methods: {
    handleWeekendsToggle() {
      this.calendarOptions.weekends = !this.calendarOptions.weekends // update a property
    },
    handleDateSelect(selectInfo) {
      let title = prompt('Please enter a new title for your event')
      let calendarApi = selectInfo.view.calendar

      calendarApi.unselect() // clear date selection

      if (title) {
        calendarApi.addEvent({
          id: createEventId(),
          title,
          start: selectInfo.startStr,
          end: selectInfo.endStr,
          allDay: selectInfo.allDay
        })
      }
    },
    handleEventClick(clickInfo) {
      if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
        clickInfo.event.remove()
      }
    },
    handleEvents(events) {
      this.currentEvents = events
    },
  }
})

</script>

<template>
  <div class='demo-app'>
    <div class='demo-app-main'>
      <FullCalendar
        class='demo-app-calendar'
        :options='calendarOptions'
      >
        <template v-slot:eventContent='arg'>
          <b>{{ arg.timeText }}</b>
          <i>{{ arg.event.title }}</i>
        </template>
      </FullCalendar>
    </div>
  </div>
</template>

<style lang='css'>

h2 {
  margin: 0;
  font-size: 16px;
}

ul {
  margin: 0;
  padding: 0 0 0 1.5em;
}

li {
  margin: 1.5em 0;
  padding: 0;
}

b { /* used for event dates/times */
  margin-right: 3px;
}

.demo-app {
  padding-top: 5%;
  display: flex;
  min-height: 100%;
  font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
  font-size: 14px;
}

.demo-app-sidebar {
  width: 300px;
  line-height: 1.5;
  background: #eaf9ff;
  border-right: 1px solid #d3e2e8;
}

.demo-app-sidebar-section {
  padding: 2em;
}

.demo-app-main {
  flex-grow: 1;
  padding: 3em;
}

.fc { /* the calendar root */
  max-width: 1100px;
  margin: 0 auto;
}

>>>>>>> 19c7f12bf5d78e86f5077d2b3975954c856f7458
</style>
