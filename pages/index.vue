<template>
  <div ref="root">
    <div class="navbar grid grid-cols-3 justify-items-center fixed backdrop-blur-lg backdrop-filter">
    <span>Popular Anime</span>
    <span>Old Anime</span>
    <span>Fresh Episodes</span>
  </div>

    <div class="large-poster" v-show="posterShow" ref="largePoster">
      <img :src="posterSrc" alt=""/>
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
      freshEpisodes : [],
      posterShow : false,
      posterSrc : ''
    }
  },
  async mounted() {
    this.popular = await this.$axios.$get('/api/popular/');
    this.lastMovies = await this.$axios.$get('/api/oldMovies/');
    this.freshEpisodes = await this.$axios.$get('/api/lastEpisodes/');

    const posters = document.querySelectorAll('.poster');

    for (let element of posters) {
        element.onclick = () => {
          this.posterSrc = element.src
          this.posterShow = true
        }
    }

    this.$refs.largePoster.onclick = (e) => {
      this.posterSrc = ''
      this.posterShow = false
    }
  }
}
</script>

<style>

.large-poster {
  top : 50px;
  @apply absolute w-full backdrop-blur-lg backdrop-filter h-full;
}

.large-poster img {
  @apply mx-auto;
}

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
  transition: all .25s ease;
}

.movie:hover {
  transform : perspective(500px) rotateY(22deg);
  transition: all .25s ease;
}

.poster {
  width: 150px;
  border-radius: 15px;
  transition : all 2s ease;
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
