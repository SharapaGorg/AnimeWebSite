<template>
  <div ref="root">
    <div class="navbar grid grid-cols-3 justify-items-center fixed backdrop-blur-lg backdrop-filter">
      <span v-show="!posterShow">Popular Anime</span>
      <span v-show="!posterShow">Old Anime</span>
      <span v-show="!posterShow">Fresh Episodes</span>
      <span v-show="posterShow" class="poster-title">Trailer</span>
      <span v-show="posterShow" class="poster-title">{{ posterTitle }}</span>
      <span v-show="posterShow" class="poster-title">Description</span>
    </div>

    <div class="large-poster grid md:grid-cols-3 justify-items-center" v-show="posterShow" ref="largePoster">
      <LazyYoutube
        v-show="posterTrailer"
        ref="animeTrailer"
        :src="'https://www.youtube.com/watch?v=' + posterTrailer"
        aspect-ratio="16:9"
        thumbnail-quality="standard"
        :autoplay = true
        style="height : 50%; width : 90%; margin-top : 60px"
      >
      </LazyYoutube>
      <img :src="posterSrc" alt="" class="md:col-start-2">
      <span class="poster-description">{{ posterDescription }}</span>
    </div>

    <div class="grid grid-cols-3 justify-items-center">
      <div class="movies-column pt-20">
        <div v-for="movie in popular" :key="movie.id" class="movie" @click="selectPoster(movie)">
          <img alt="" :src="movie['posterImage']['large']" class="poster"/>
        </div>
      </div>
      <div class="movies-column pt-20">
        <div v-for="lastMovie in lastMovies" :key="lastMovie.id" class="movie" @click="selectPoster(lastMovie)">
          <img alt="" :src="lastMovie['posterImage']['large']" class="poster"/>
        </div>
      </div>
      <div class="movies-column pt-16">
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
      popular: [],
      lastMovies: [],
      freshEpisodes: [],
      posterShow: false,
      posterSrc: '',
      posterTitle: '',
      posterDescription: '',
      posterTrailer : ''
    }
  },
  methods: {
    selectPoster(movie) {
      this.posterSrc = movie['posterImage']['large']
      this.posterTitle = movie['canonicalTitle']
      this.posterDescription = movie['description']
      this.posterTrailer = movie['youtubeVideoId']
      this.posterShow = true

      console.log('https://www.youtube.com/watch?v=' + this.posterTrailer)

      this.$store.commit('changeNavigatorState')
      this.$store.commit('changeNavigatorStatus', 'onlyClose')
    }
  },
  async mounted() {
    this.popular = await this.$axios.$get('/api/popular/');
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

<style>

.large-poster {
  overflow-y: auto;
  font-family: 'Exo', sans-serif;
  @apply absolute w-full backdrop-blur-lg backdrop-filter h-full;
}

.large-poster img {
  margin-top: 60px;
  @apply mx-auto;
}

.poster-title {
  font-size: 25px !important;
  color: white;
  font-weight: bold;
  font-family: 'Exo', sans-serif;
  margin-top: 25px;
  @apply mx-auto text-center;
}

.poster-description {
  width: 90%;
  text-align: justify;
  margin-top: 60px;
  font-size: 20px;
  color: white;
  max-height: 50%;
  overflow-y: auto;
  padding : 10px 15px;
  background : rgba(0, 0, 0, 0.5);
}

.episode {
  width: 80%;
  background: white;
  font-weight: bold;
  border-radius: 10px;
  @apply mx-auto px-4 py-2 my-3 cursor-pointer;
}

.navbar span {
  font-size: 20px;
  color: white;
  margin-top: 5px;
}

.movie {
  height: 270px;
  transition: all .25s ease;
}

.movie:hover {
  transform: perspective(500px) rotateY(22deg);
  transition: all .25s ease;
}

.poster {
  width: 150px;
  border-radius: 15px;
  transition: all 2s ease;
  @apply mx-auto cursor-pointer;
}

.navbar {
  width: 100vw;
  height: 50px;
  z-index: 10;
}

.movies-column {
  background: #CD97F8;
  width: 300px;
  height: 100vh;
  overflow: auto;
}

</style>
