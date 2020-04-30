<template>
  <v-container>
    <h1>Show Details</h1>
    <v-row align="center" justify="center">
      <v-col cols="12" md="12" xs="12">
        <v-card class="mx-auto">
          <v-card-text class="display-1 text-capitalize font-weight-dark">{{
            movie.name
          }}</v-card-text>
          <v-row cols="12">
            <v-col cols="12" md="4" sm="12" xs="12">
              <v-card style="margin:12px">
                <v-img
                  width="25rem"
                  height="25rem"
                  :src="
                    movie.image && (movie.image.original || movie.image.medium)
                  "
                ></v-img>
              </v-card>
              <v-chip color="primary ma-2"
                >Like
                <v-icon dark right>mdi-heart</v-icon>
              </v-chip>
              <v-chip class="ma-2" color="orange" text-color="white"
                >Vote
                <v-icon right>mdi-star</v-icon>
              </v-chip>
            </v-col>
            <v-col cols="4" md="8" sm="6" xs="6">
              <ul>
                <li>
                  <p><strong>Language</strong> : {{ movie.language }}</p>
                </li>
                <li>
                  <p><strong>Premiered</strong> : {{ movie.premiered }}</p>
                </li>
                <li>
                  <p><strong>Runtime</strong> : {{ movie.runtime }}</p>
                </li>
                <li>
                  <p><strong>Status</strong> : {{ movie.status }}</p>
                </li>
                <li>
                  <p><strong>Type</strong> : {{ movie.type }}</p>
                </li>
                <li>
                  <p>
                    <strong>Genre</strong> :
                    <span
                      v-for="genre in movie.genres"
                      :key="genre"
                      class="genre"
                    >
                      {{ genre }}
                      <span>| </span>
                    </span>
                  </p>
                </li>
              </ul>
            </v-col>
            <!-- <v-col cols="4" md="4" sm="6" xs="12">
              <div class="title text-capitalize font-weight-light pb-4">
                Details
              </div>
              <ul style="list-style-type:none;">
                <li class="text--secondary">{{ movie.language }}</li>
                <li class="text--secondary">{{ movie.premiered }}</li>
                <li class="text--secondary">{{ movie.runtime }}</li>
                <li class="text--secondary">{{ movie.status }}</li>
                <li class="text--secondary">{{ movie.type }}</li>
                <li class="text--secondary">
                  <span
                    v-for="genre in movie.genres"
                    :key="genre"
                    class="genre"
                  >
                    {{ genre }}
                    <span>| </span>
                  </span>
                </li>
              </ul>
            </v-col> -->
          </v-row>
          <div
            class="title align-center justify-center text-capitalize font-weight-light"
          >
            Summary
          </div>
          <v-card-actions>
            <v-card-text
              class="text-justify text-center text--secondary font-weight-light"
              v-html="movie.summary"
            ></v-card-text>
          </v-card-actions>
          <div
            class="title align-center justify-center text-capitalize font-weight-light"
          >
            Cast
          </div>
          <v-row>
            <div :class="$style.showCast">
              <div
                :class="$style.cast"
                v-for="(cast, index) in movieCast"
                :key="index"
              >
                <a>
                  <img
                    :src="
                      cast.person.image &&
                        (cast.person.image.original || cast.person.medium)
                    "
                    alt="show-cast"
                  />
                  <span>{{ cast.person.name }}</span>
                </a>
              </div>
            </div>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import TvShowApi from "../services/tv-maze-api";

export default {
  name: "show-details",
  data: function() {
    return {
      movie: {},
      currentId: this.$route.params.id,
      movieCast: ""
    };
  },
  mounted() {
    this.getShowDetail(this.currentId);
  },
  watch: {
    currentId(val){
      this.getShowDetail(val);
}
  },
  methods: {
    async getShowDetail(id) {
      TvShowApi.getShowDetailsById(id).then(response => {
        this.movie = response;
        this.movieCast = response._embedded.cast;
      });
    }
  }
};
</script>

<style lang="scss" module scoped>
.genre:last-child span {
  display: none;
}
.showCast {
  display: flex;
  flex-wrap: wrap;
  margin-top: 2rem;
  .cast {
    text-align: center;
    width: 9rem;
    a {
      color: inherit;
      text-decoration: none;
      text-align: center;
      img {
        width: 4rem;
        display: block;
        margin: 0 auto;
        border-radius: 50%;
        height: 4rem;
      }
      span {
        font-size: 0.8rem;
      }
    }
  }
}
.v-card {
  width: 1000px;
}
</style>
