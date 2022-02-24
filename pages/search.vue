<template>
  <div ref="root" style="height : 100vh">
    <div class="large-poster grid md:grid-cols-3 justify-items-center"
         v-show="posterShow" ref="largePoster"
         style="padding-top: 20px">

      <div style="width : 90%">
        <LazyYoutube
          v-show="posterTrailer"
          ref="animeTrailer"
          :src="'https://www.youtube.com/watch?v=' + posterTrailer"
          aspect-ratio="16:9"
          thumbnail-quality="standard"
          :autoplay=true
          style="height : 50%; margin-top : 60px"
          class="w-full"
        >
        </LazyYoutube>

      </div>

      <div>
<!--        <span style="font-size: 27px;color: white; margin-top : 50px" class="block mx-auto text-center">{{ posterTitle }}</span>-->
        <img :src="posterSrc" alt="" class="md:col-start-2">
      </div>
      <span class="poster-description" v-show="posterDescription">{{ posterDescription }}</span>
    </div>

    <Search :hints="[]" placeholder="e.x. Naruto" class="mx-auto" style="margin-bottom : 45px"/>
    <div class="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1 all-posters">
      <div v-for="movie in movies" :key="movie.id" class="movie">
        <img alt="" :src="movie['posterImage']['large']" class="poster"
             @click="selectPoster(movie)"/>
      </div>
    </div>
  </div>
</template>

<script>

import {LazyYoutube} from 'vue-lazytube'

export default {
  name: "search-page",
  components: {
    LazyYoutube
  },
  data() {
    return {
      movies: [],
      popular: [],
      lastMovies: [],
      freshEpisodes: [],
      posterShow: false,
      posterSrc: '',
      posterTitle: '',
      posterDescription: '',
      posterTrailer: ''
    }
  },
  watch: {
    '$store.state.navigatorActivated': function (activated) {
      if (!activated) {
        // close large poster
        this.posterSrc = ''
        this.posterShow = false
      }
    }
  },
  methods: {
    selectPoster(movie) {
      this.posterSrc = movie['posterImage']['large']
      this.posterTitle = movie['canonicalTitle']
      this.posterDescription = movie['description']
      this.posterTrailer = movie['youtubeVideoId']
      this.posterShow = true

      this.$store.commit('setSearchInput', this.posterTitle)
      this.$store.commit('changeNavigatorState')
      this.$store.commit('changeNavigatorStatus', 'onlyClose')
    }
  },
  async mounted() {
    for (let i = 0; i < 10; i++) {
      const movies = await this.$axios.$post('/api/popular/', {
        limit: 15,
        offset: i * 15
      })

      for (let movie of movies) {
        this.movies.push(movie);
      }
    }

  }
}
</script>

<style scoped>

.all-posters {
  height: calc(100vh - 95px);
  overflow-y: auto;
}

</style>
