<template>
  <v-row>
    <v-col cols="12">
      <h3 class="mt-10">
        2. Given the attached CSV data file - rest_open_hours.csv a. Write a
        function that parses the data into a table b. Write a function that
        receives a date object native to your language of choice and uses a sql
        query to return a list of restaurant names which are open on that date
        and time.
      </h3>
    </v-col>
    <v-col cols="12" class="text-center">
      <v-row>
        <v-col cols="6" class="text-md-right">
          <v-btn class="white--text" @click="createTable()" color="green">Create table</v-btn>
        </v-col>
        <v-col cols="6" class="text-md-left">
          <v-btn class="white--text" @click="dropTable()" color="red">Delete table</v-btn>
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12">
      <v-row justify="center">
        <v-col cols="6" md="3">
          <v-text-field
            type="date"
            color="cyan darken-1"
            @change="getData()"
            v-model="selectedDate"
            :min="minDate"
            required
          >
          </v-text-field>
        </v-col>
        <v-col cols="6" md="3">
          <v-text-field
            required
            @change="getData()"
            color="cyan darken-1"
            type="time"
            v-model="selectedHour"
          >
          </v-text-field>
        </v-col>
        {{ weekDay }}
        {{ selectedHour }}
      </v-row>
    </v-col>
    <v-col cols="12">
      <v-data-table
        :headers="headers"
        :items="restaurants"
        :items-per-page="5"
        class="elevation-1"
      ></v-data-table>
    </v-col>
  </v-row>
</template>
<script>
import moment from "moment";
import { mapActions, mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      weekDay: null,
      selectedDate: null,
      selectedHour: null,
      minDate: moment().format("yyyy-MM-DD"),
      days: [
        { day: "Monday", value: 0 },
        { day: "Tuesday", value: 1 },
        { day: "Wednesday", value: 2 },
        { day: "Thursday", value: 3 },
        { day: "Friday", value: 4 },
        { day: "Saturday", value: 5 },
        { day: "Sunday", value: 6 },
      ],
      headers: [
        {
          text: "Name",
          align: "start",
          value: "name",
        },
        { text: "OpenTo", value: "hourFrom" },
        { text: "CloseTo", value: "hourTo" },
      ],
    };
  },
  computed: {
    ...mapState(["restaurants"]),
  },
  methods: {
    ...mapActions(["createTable", "dropTable", "getDataRestaurants"]),
    ...mapMutations(["SET_RESTAURANTS"]),
    getWeekDay() {
      let day = moment(this.selectedDate);
      day = day.day();
      if (day === 0) {
        this.weekDay = 6;
      } else {
        this.weekDay = day - 1;
      }
    },
    async getData() {
      if (this.selectedHour && this.selectedDate) {
        this.getWeekDay();
        let obj = {
          day: this.weekDay,
          hour: this.selectedHour + ":00",
        };
        await this.getDataRestaurants(obj);
      } else {
        this.SET_RESTAURANTS([]);
      }
    },
  },
};
</script>