<template>
  <v-row class="py-12">
    <v-col cols="12">
      <v-card class="mx-auto my-12" max-width="374">
        <v-row justify="center" class="py-5">
          <v-menu bottom min-width="150px" rounded offset-y>
            <template v-slot:activator="{ on }">
              <v-btn icon x-large v-on="on">
                <v-avatar
                  color="white"
                  size="150"
                  style="width: 150px; min-width: 160px"
                >
                  <img
                    :src="require('@/assets/profile.jpeg')"
                    alt="Antonio Tenllado picture"
                  />
                </v-avatar>
              </v-btn>
            </template>
            <v-card>
              <v-list-item-content class="justify-center">
                <div class="mx-auto text-center">
                  <h3 class="px-5 teal--text text--lighten-3">Antonio Tenllado Humanes</h3>
                  <p class="text-caption mt-1">tenlla2@gmail.com</p>
                  <v-divider class="my-3"></v-divider>
                  <p><a href="https://www.linkedin.com/in/antonio-tenllado-humanes-924a33208">Linkedin</a></p>
                  <v-divider class="my-3"></v-divider>
                  <p><a href="https://github.com/tenlla2">Github</a></p>
                </div>
              </v-list-item-content>
            </v-card>
          </v-menu>
        </v-row>
        <v-card-title class="mt-12 teal lighten-3 white--text"
          >Technologies</v-card-title
        >

        <v-card-text class="mt-3">
          <h4 class="teal--text text--lighten-3">FrontEnd</h4>
          <p>Vue.js (v2) and Vuex with Axios for requests</p>
        </v-card-text>
        <v-card-text>
          <h4 class="teal--text text--lighten-3">BackEnd</h4>
          <p>Node.js with Express and body-parser and csv-parser</p>
        </v-card-text>
        <v-card-text>
          <h4 class="teal--text text--lighten-3">Database</h4>
          <p>
            MySQL database from
            <a href="www.freesqldatabase.com">www.freesqldatabase.com</a>
          </p>
        </v-card-text>
        <v-divider class="mx-4"></v-divider>
        <v-card-text>
          <p>This is a litle project for a Engineer Technical Interview</p>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>