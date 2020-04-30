<template>
  <v-container>
    <h1>All Shows</h1>
    <v-row>
      <v-col xs12 sm6 md4 lg3 v-for="movie in movies" :key="movie.id">
        <v-card max-height="450" max-width="200px">
          <router-link
            class="routerLink"
            :to="{ name: 'show-details', params: { id: `${movie.id}` } }"
          >
            <v-img hover :src="movie.image.medium"></v-img>
          </router-link>
          <v-card-title class="d-block">{{ movie.name }}</v-card-title>
          <v-card-actions>
            <v-btn icon>
              <v-icon>mdi-heart</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn color="red" dark right>
              <v-icon dark left>mdi-star</v-icon>
              {{ movie.rating.average }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import TvShowApi from "../services/tv-maze-api";

export default {
  name: "all-shows",
  data() {
    return {
      movies: [],
      pageTitle: "All Shows",
      imageURL: "https://image.tmdb.org/t/p/w1280",
      page: 1,
      showPagination: false
    };
  },
  mounted() {
    this.getAllShowDetails();
  },
  methods: {
    getAllShowDetails() {
      TvShowApi.getAllShows()
        .then(response => {
          this.movies = response.sort(this.sortTvShow);
        })
        .catch(() => {})
        .finally(() => {});
    },
     sortTvShow(a, b) {
      // Use toUpperCase() to ignore character casing
      const ratingA = a.rating.average;
      const ratingB = b.rating.average;

      let comparison = 0;
      if (ratingA < ratingB) {
        comparison = 1;
      } else if (ratingA > ratingB) {
        comparison = -1;
      }
      return comparison;
    }
  }
};
</script>

<style scoped>
.v-img:hover {
  background: #536dfe;
}
.routerLink {
  text-decoration: none;
}
</style>
