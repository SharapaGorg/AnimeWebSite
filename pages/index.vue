<template>
  <div ref="root" class="root">
    <div class="grid fixed grid-cols-3 justify-items-center backdrop-filter backdrop-blur-lg navbar">
      <span v-show="!posterShow">Popular Anime</span>
      <span v-show="!posterShow">Old Anime</span>
      <span v-show="!posterShow">Fresh Episodes</span>
      <span v-show="posterShow && posterTrailer" class="poster-title">Trailer</span>
      <span v-show="posterShow" class="col-start-2 poster-title">{{ posterTitle }}</span>
      <span v-show="posterShow && posterDescription" class="poster-title">Description</span>
    </div>

    <div class="grid justify-items-center large-poster md:grid-cols-3" v-show="posterShow" ref="largePoster">
      <LazyYoutube
        v-show="posterTrailer"
        ref="animeTrailer"
        :src="'https://www.youtube.com/watch?v=' + posterTrailer"
        aspect-ratio="16:9"
        thumbnail-quality="standard"
        :autoplay=true
        style="height : 50%; width : 90%; margin-top : 60px"
      >
      </LazyYoutube>
      <img :src="posterSrc" alt="" class="md:col-start-2">
      <span class="poster-description" v-show="posterDescription">{{ posterDescription }}</span>
    </div>

    <div class="grid grid-cols-3 justify-items-center">
      <div class="pt-20 movies-column">

        <div v-for="movie in popular" :key="movie.id" class="movie">
          <img alt="" :src="movie['posterImage']['large']" class="poster" @load="posterIsLoad(movie.id)"
               @click="selectPoster(movie)"/>
        </div>

      </div>
      <div class="pt-20 movies-column">
        <div v-for="lastMovie in lastMovies" :key="lastMovie.id" class="movie">
          <img alt="" :src="lastMovie['posterImage']['large']" class="poster" @click="selectPoster(lastMovie)"/>
        </div>
      </div>
      <div class="pt-16 movies-column">
        <div v-for="episode in freshEpisodes" :key="episode.id" class="episode">
          {{ episode['canonicalTitle'] }}
        </div>
      </div>
    </div>

  </div>
</template>

<script>

import {LazyYoutube} from 'vue-lazytube'

export default {
  name: 'IndexPage',
  components: {
    LazyYoutube
  },
  data() {
    return {
      empties: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
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
  methods: {
    posterIsLoad(movieId) {
      // delete empty poster
    },
    selectPoster(movie) {
      this.posterSrc = movie['posterImage']['large']
      this.posterTitle = movie['canonicalTitle']
      this.posterDescription = movie['description']
      this.posterTrailer = movie['youtubeVideoId']
      this.posterShow = true

      this.$store.commit('changeNavigatorState')
      this.$store.commit('changeNavigatorStatus', 'onlyClose')
    }
  },
  async mounted() {
    this.popular = await this.$axios.$post('/api/popular/', {
      limit: 10,
      offset : 0
    });
    this.lastMovies = await this.$axios.$get('/api/oldMovies/');
    this.freshEpisodes = await this.$axios.$get('/api/lastEpisodes/');
  },
  watch: {
    '$store.state.navigatorActivated': function (activated) {
      if (!activated) {
        // close large poster
        this.posterSrc = ''
        this.posterShow = false
      }
    }
  }
}
</script>

