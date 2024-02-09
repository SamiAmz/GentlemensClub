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
</style>
