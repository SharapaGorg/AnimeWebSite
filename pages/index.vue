<template>
  <div ref="root">
    <div class="navbar grid grid-cols-3 justify-items-center fixed backdrop-blur-lg backdrop-filter">
      <span v-show="!posterShow">Popular Anime</span>
      <span v-show="!posterShow">Old Anime</span>
      <span v-show="!posterShow">Fresh Episodes</span>
      <span v-show="posterShow" class="col-start-2 poster-title">{{ posterTitle }}</span>
      <span v-show="posterShow" class="poster-title w-full" style="text-align : left">Description</span>
    </div>

    <div class="large-poster grid md:grid-cols-3" v-show="posterShow" ref="largePoster">
      <span></span>
      <img :src="posterSrc" alt=""/>
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
export default {
  name: 'IndexPage',
  data() {
    return {
      popular: [],
      lastMovies: [],
      freshEpisodes: [],
      posterShow: false,
      posterSrc: '',
      posterTitle: '',
      posterDescription: ''
    }
  },
  methods: {
    selectPoster(movie) {
      this.posterSrc = movie['posterImage']['large']
      this.posterTitle = movie['canonicalTitle']
      this.posterDescription = movie['description']
      this.posterShow = true
    }
  },
  async mounted() {
    this.popular = await this.$axios.$get('/api/popular/');
    this.lastMovies = await this.$axios.$get('/api/oldMovies/');
    this.freshEpisodes = await this.$axios.$get('/api/lastEpisodes/');

    this.$refs.largePoster.onclick = () => {
      this.posterSrc = ''
      this.posterShow = false
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
  margin-top: 50px;
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
  width: 80%;
  text-align: justify;
  margin-top: 50px;
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
