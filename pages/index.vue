<template>
  <div ref="root">
    <div class="navbar grid grid-cols-3 justify-items-center fixed backdrop-blur-lg backdrop-filter">
    <span>Popular Anime</span>
    <span>Old Anime</span>
    <span>Fresh Episodes</span>
  </div>

  <div class="grid grid-cols-3 justify-items-center">
    <div class="movies-column pt-20">
      <div v-for="movie in popular" :key="movie.id" class="movie">
        <img alt="" :src="movie['posterImage']['large']" class="poster"/>
      </div>
    </div>
    <div class="movies-column pt-20">
      <div v-for="lastMovie in lastMovies" :key="lastMovie.id" class="movie">
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
      lastMovies : [],
      freshEpisodes : []
    }
  },
  async mounted() {
    this.popular = await this.$axios.$get('/api/popular/');
    this.lastMovies = await this.$axios.$get('/api/oldMovies/');
    this.freshEpisodes = await this.$axios.$get('/api/lastEpisodes/');
  }
}
</script>

<style>

.episode {
  width : 80%;
  background : white;
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
}

.poster {
  width: 150px;
  border-radius: 15px;
  @apply mx-auto;
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
