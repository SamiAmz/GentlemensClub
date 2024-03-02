<template>
  <div class="demo-app">
    <div class="demo-app-main">
      <div class="control-panel">
        <h1>Control Panel</h1>
        <v-btn @click="dialogNewEventVisible = true">Ajouter un cours</v-btn>
      </div>

      <!-- Dialog nouveau cours -->
      <v-dialog v-model="dialogNewEventVisible" width="80%">
        <v-form
          v-model="form"
          @submit.prevent="onSubmit"
          v-slot:default="{ isActive }"
        >
          <v-card title="Ajouter un nouveau cours">
            <div class="form-class">
              <div class="row">
                <p class="text">Nom du cours:</p>
                <v-text-field
                  v-model="classData.title"
                  :rules="[rules.required]"
                  label="Nom du cours"
                  clearable
                ></v-text-field>
              </div>
              <div class="row">
                <p class="text">Description:</p>
                <v-text-field
                  v-model="classData.description"
                  :rules="[rules.required]"
                  label="Description"
                  clearable
                ></v-text-field>
              </div>
              <div class="row">
                <p class="text">Type de cours:</p>
                <v-select
                  v-model="classData.type"
                  :rules="[rules.required]"
                  label="Type de cours"
                  :items="['Boxe', 'MMA', 'Lutte']"
                ></v-select>
              </div>

              <!-- Date picker -->
              <v-menu v-model="isMenuOpen" :close-on-content-click="false">
                <template v-slot:activator="{ props }">
                  <div class="row">
                    <p class="text">Date du cours:</p>
                    <v-text-field
                      :rules="[rules.required]"
                      label="Date du cours"
                      :model-value="formattedDate"
                      readonly
                      v-bind="props"
                    ></v-text-field>
                  </div>
                </template>
                <v-date-picker
                  v-model="selectedDate"
                  @click="formatDate(selectedDate)"
                >
                </v-date-picker>
              </v-menu>

              <!-- Time picker start -->
              <div class="row">
                <p class="text">Heure de début du cours:</p>
                <v-select
                  class="time-picker"
                  v-model="classData.startHour"
                  :rules="[rules.required]"
                  label="Heure"
                  :items="[
                    '08',
                    '09',
                    '10',
                    '11',
                    '12',
                    '13',
                    '14',
                    '15',
                    '16',
                    '17',
                    '18',
                    '19',
                    '20',
                    '21',
                    '22',
                  ]"
                ></v-select>
                <v-select
                  class="time-picker"
                  v-model="classData.startMinutes"
                  :rules="[rules.required]"
                  label="Minute"
                  :items="['00', '15', '30', '45']"
                ></v-select>
              </div>

              <!-- Time picker end -->
              <div class="row">
                <p class="text-hour">Heure de fin du cours:</p>
                <v-select
                  class="time-picker"
                  v-model="classData.endHour"
                  :rules="[rules.required]"
                  label="Heure"
                  :items="[
                    '08',
                    '09',
                    '10',
                    '11',
                    '12',
                    '13',
                    '14',
                    '15',
                    '16',
                    '17',
                    '18',
                    '19',
                    '20',
                    '21',
                    '22',
                  ]"
                ></v-select>
                <v-select
                  class="time-picker"
                  v-model="classData.endMinutes"
                  :rules="[rules.required]"
                  label="Minute"
                  :items="['00', '15', '30', '45']"
                ></v-select>
              </div>
            </div>
            <v-card-actions>
              <v-btn
                class="button-cancel"
                text="Annuler"
                @click="dialogNewEventVisible = false"
              ></v-btn>
              <v-spacer></v-spacer>
              <!-- Ajouter nouveau cours à la base de donnée -->
              <v-btn
                :disabled="!form"
                :loading="loading"
                text="Ajouter"
                @click="addNewClass()"
              ></v-btn>
            </v-card-actions>
          </v-card>
        </v-form>
      </v-dialog>

      <!-- Dialog afficher information d'un cours -->
      <v-dialog v-model="dialogEventVisible" width="500">
        <template v-slot:default="{ isActive }">
          <v-card :title="dialogTitle">
            <v-card-text>
              Heure: {{ dialogStartHours }}:{{ dialogStartMinutes }} -
              {{ dialogEndHours }}:{{ dialogEndMinutes }} <br />
              {{ dialogDescription }}
            </v-card-text>

            <v-card-actions>
              <v-btn text="S'inscrire" @click="registerToClass()"></v-btn>
              <v-btn text="Modifier" @click="updateClass()"></v-btn>
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
  <Chat />
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

import { collection, addDoc } from "firebase/firestore";
import { db } from "@/firebase/init";

export default defineComponent({
  components: {
    name: "Horaire",
    FullCalendar,
  },
  data() {
    return {
      rules: {
        required: (value) => !!value || "Champ requis", // Required field
      },

      // Firebase document class data
      classData: {
        title: "",
        description: "",
        startHour: "",
        startMinutes: "",
        endHour: "",
        endMinutes: "",
        type: "",
      },

      formattedDate: "",
      form: false,
      loading: false,

      // Dialog
      dialogNewEventVisible: false,
      dialogEventVisible: false,
      dialogTitle: "",
      dialogDescription: "",
      dialogHours: "",
      dialogMinutes: "",

      // Fullcalendar calendar parameters
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

    onSubmit() {
      // Does absolutely nothing
    },

    async addNewClass() {
      this.loading = true;
      setTimeout(() => (this.loading = false), 1000); // Simulate loading time on the button

      try {
        // Add a new document to the "class" collection with auto-generated ID
        const docRef = await addDoc(collection(db, "class"), {
          title: this.classData.title,
          description: this.classData.description,
          startHour:
            this.classData.startHour +
            ":" +
            this.classData.startMinutes +
            ":00",
          endHour:
            this.classData.endHour + ":" + this.classData.endMinutes + ":00",
          date: this.formattedDate,
          type: this.classData.type,
        });

        console.log("Document written with ID: ", docRef.id);
        setTimeout(() => (this.dialogNewEventVisible = false), 1000);
      } catch (error) {
        console.error("Error adding document: ", error);
      }
    },

    // Allows a member to register to a class
    registerToClass() {
      //TODO
      console.log("test");
    },

    // Update class information
    updateClass() {
      //TODO
      console.log("test");
    },

    // Formats date to YYYY-MM-DD
    formatDate(selectedDate) {
      const dateObj = new Date(selectedDate);
      const year = dateObj.getFullYear();
      const month = String(dateObj.getMonth() + 1).padStart(2, "0");
      const day = String(dateObj.getDate()).padStart(2, "0");

      const formattedDate = `${year}-${month}-${day}`;
      this.formattedDate = formattedDate;
      console.log(formattedDate);
    },

    // Display event information
    handleEventClick(clickInfo) {
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
  height: 740px; /* Height of the calendar */
  border-radius: 5px;
  padding: 1%;
}

.control-panel {
  padding: 3%;
  width: 100%;
  border-width: 1px;
  border-style: solid;
  border-color: white;
}

.form-class {
  padding: 2.5%;
}

.row {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.time-picker {
  width: 10%;
  padding-right: 2.5%;
  flex: 1;
}

.text {
  padding-right: 1%;
  align-self: center;
}

.text-hour {
  padding-right: 3.25%;
  align-self: center;
}
</style>
