<template>
  <v-row>
    <v-col cols="12">
      <h3 class="mt-10 text-center text-dm-left">
        1. You have the following API endpoint:
        <a href="https://postman-echo.com/get?foo1=bar1&amp;foo2=bar2"
          >https://postman-echo.com/get?foo1=bar1&amp;foo2=bar2</a
        >
        Please set up a quick page using any language. Call the API endpoint and
        display results
      </h3>
    </v-col>
    <v-col cols="12" class="mt-10 px-12">
      <p class="p-5" style="word-wrap: break-word">
        <skeleton-component v-if="!dataApi" :loading="loading" />
        {{ dataApi }}
      </p>
    </v-col>
  </v-row>
</template>
<script>
import SkeletonComponent from "./SkeletonComponent.vue";
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      loading: false,
    };
  },
  components: {
    SkeletonComponent,
  },
  async created() {
    this.loading = true;
    await this.getDataApi();
    this.loading = false;
  },
  methods: {
    ...mapActions(["getDataApi"]),
  },
  computed: {
    ...mapState(["dataApi"]),
  },
};
</script>