<template>
  <div class="demo-app">
    <div class="demo-app-main">
      <!-- Dialog afficher information d'un cours -->
      <v-dialog v-model="dialogEventVisible" width="500">
        <template v-slot:default="{  }">
          <v-card :title="dialogTitle">
            <v-card-text>
              Heure: {{ dialogStartHours }}:{{ dialogStartMinutes }} -
              {{ dialogEndHours }}:{{ dialogEndMinutes }} <br />
              {{ dialogDescription }}
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn text="Fermer" @click="dialogEventVisible = false"></v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
      <FullCalendar class="demo-app-calendar" :options="calendarOptions">
        <template v-slot:eventContent="arg">
          <b>{{ arg.timeText }}</b>
          <i>{{ arg.event.title }}</i>
        </template>
      </FullCalendar>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isMenuOpen = ref(false);
const selectedDate = ref();
</script>

<script>
import { defineComponent } from "vue";
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { INITIAL_EVENTS } from "./event-utils";
import frLocale from "@fullcalendar/core/locales/fr";

export default defineComponent({
  components: {
    name: "HoraireUtilisateur",
    FullCalendar,
  },
  data() {
    return {
      dialogNewEventVisible: false,
      dialogEventVisible: false,
      dialogTitle: "",
      dialogDescription: "",
      dialogHours: "",
      dialogMinutes: "",
      calendarOptions: {
        locale: frLocale,
        plugins: [
          dayGridPlugin,
          timeGridPlugin,
          interactionPlugin, // needed for dateClick
        ],
        headerToolbar: {
          start: "",
          center: "title",
          end: "prev,next",
        },
        initialView: "timeGridWeek",
        initialEvents: INITIAL_EVENTS, // alternatively, use the `events` setting to fetch from a feed
        allDaySlot: false,
        //editable: true, // Allows the user to move events
        selectMirror: true,
        dayMaxEvents: true,
        weekends: true,
        eventClick: this.handleEventClick,
        eventsSet: this.handleEvents,
        slotMinTime: "08:00:00", // Calendar will display starting at 8 AM
        slotMaxTime: "22:00:00", // Calendar will display up until 10 PM
        /* you can update a remote database when these fire:
        eventAdd:
        eventChange:
        eventRemove:
        */
      },
      currentEvents: [],
    };
  },
  methods: {
    /*
        calendarApi.addEvent({
          id: createEventId(),
          title,
          start: selectInfo.startStr,
          end: selectInfo.endStr,
          allDay: selectInfo.allDay
        })
        */

    handleEventClick(clickInfo) {
      console.log("test");
      this.dialogEventVisible = true;
      this.dialogTitle = clickInfo.event.title;
      this.dialogStartHours = clickInfo.event.start.getHours();
      this.dialogEndHours = clickInfo.event.end.getHours();
      this.dialogDescription = clickInfo.event.extendedProps.description;
      // getMinutes() returns 0 if there are no minute, this code will convert to 00
      if (clickInfo.event.start.getMinutes() == "0") {
        this.dialogStartMinutes = "00";
      } else {
        this.dialogStartMinutes = clickInfo.event.start.getMinutes();
      }
      if (clickInfo.event.end.getMinutes() == "0") {
        this.dialogEndMinutes = "00";
      } else {
        this.dialogEndMinutes = clickInfo.event.end.getMinutes();
      }
    },
    handleEvents(events) {
      this.currentEvents = events;
    },
  },
});
</script>

<style lang="css">
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

b {
  /* used for event dates/times */
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

.fc {
  /* the calendar root */
  max-width: 1100px;
  margin: 0 auto;
}

.demo-app-calendar {
  background-color: rgb(29, 29, 31);
  height: 500px; /* Height of the calendar */
  border-radius: 5px;
  padding: 1%;
}

</style>
