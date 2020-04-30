<template>
  <v-toolbar dark color="blue" padless>
    <router-link to="/" class="routerLink" color="primary ma-2">
      <v-toolbar-title class="font-bold white--text" color="primary ma-2"
        >TV Shows</v-toolbar-title
      >
    </router-link>
    <v-row align="center" justify="center">
      <v-col cols="12" md="6" sm="6" xs="9">
        <v-autocomplete
          v-model="searchValue"
          :loading="loading"
          :items="items"
          :search-input.sync="search"
          cache-items
          class="mx-4"
          flat
          id="id_search"
          hide-no-data
          hide-selected
          hide-details
          label="Enter a show title"
          solo-inverted
          return-object
          clearable
        ></v-autocomplete>
      </v-col>
    </v-row>
  </v-toolbar>
</template>

<script>
import TvShowApi from "../services/tv-maze-api";

export default {
  name: "app-header",
  components: {},
  data() {
    return {
      loading: false,
      items: [],
      search: null,
      select: null,
      movies: [],
      currentId: "",
      searchValue: "",
      moviesList: ""
    };
  },
  watch: {
    search(val) {
      this.searchshows(val);
    },
    searchValue(val) {
      this.goToDetailPage(val);
    }
  },
  mounted() {
    this.getAllShowDetails();
  },
  methods: {
    searchshows(value) {
      this.isLoading = true;
      clearTimeout(this.debounce);
      this.debounce = setTimeout(async () => {
        TvShowApi.getSearchResult(value)
          .then(response => {
            this.movies = response;
            this.items = this.movies.map(e => e.show.name);
          })
          .catch(() => {})
          .finally(() => (this.isLoading = false));
      }, 400);
    },
    getAllShowDetails() {
      TvShowApi.getAllShows().then(response => {
        this.moviesList = response;
      })
      .catch(() => {})
      .finally(() => {});
    },
    home() {
      this.$router.push("/");
    },
    goToDetailPage(selectedItemName) {
      TvShowApi.showDetailsByName(selectedItemName).then(response => {
        this.currentId = response.id;
        this.$router.push({
          name: "show-details",
          params: { id: this.currentId }
        });
      })
      .catch(() => {})
      .finally(() => {});
    }
  }
};
</script>

<style scoped>
.routerLink {
  text-decoration: none;
}
</style>
