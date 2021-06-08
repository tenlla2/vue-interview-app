<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row justify="center">
          <v-col cols="6" lg="4" class="text-right">
            <router-link to="/"
              ><v-btn
                block
                color="teal lighten-3 white--text"
                depressed
                elevation="2"
                large
              >
                Home
              </v-btn></router-link
            >
          </v-col>
          <v-col cols="6" lg="4" class="text-center">
            <router-link to="/first-exercise"
              ><v-btn
                block
                color="teal lighten-3 white--text"
                depressed
                elevation="2"
                large
              >
                First exercise
              </v-btn></router-link
            > </v-col
          ><v-col cols="6" lg="4" class="text-left">
            <router-link to="/second-exercise"
              ><v-btn
                block
                color="teal lighten-3 white--text"
                depressed
                elevation="2"
                large
              >
                Second exercise</v-btn
              ></router-link
            >
          </v-col> </v-row
        ><keep-alive>
          <router-view />
        </keep-alive>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
