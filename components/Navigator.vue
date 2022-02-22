<template>
  <div ref="root">
    <div class="container_">
        <div class="navigator point" v-show="activated" ref="point1">
          <img src='../static/geo.png' alt=""/>
        </div>
        <div class="navigator point" v-show="activated" ref="point2">
          <img src='../static/geo.png' alt=""/>
        </div>
        <div class="navigator point" v-show="activated" ref="point3">
          <img src='../static/geo.png' alt=""/>
        </div>
        <div class="navigator-container absolute" @click="activate">
          <div class="navigator">
            <img src='../static/menu.svg' alt="" v-show="!activated" style="margin-top : 8px;"/>
            <img src='../static/close.svg' alt="" v-show="activated" />
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "Navigator",
  data() {
    return {
      activated: false
    }
  },
  methods: {
    activate() {
      if (!this.activated) {
        this.activated = !this.activated
        setTimeout(() => {
          this.$refs.point1.style.transform = 'translateY(-100px)'
          this.$refs.point2.style.transform = 'translateY(-200px)'
          this.$refs.point3.style.transform = 'translateY(-300px)'
        }, 0)

      } else {
        this.$refs.point1.style.transform = 'translateY(0px)'
        this.$refs.point2.style.transform = 'translateY(0px)'
        this.$refs.point3.style.transform = 'translateY(0px)'

        setTimeout(() => {
          this.activated = !this.activated
        }, 500)
      }
    }
  }
}
</script>

<style scoped>

.point {
  left: 20px;
  margin-top: 17px !important;
  @apply absolute cursor-pointer;
}

.container_ {
  width: 100px;
  height: 100px;
  border-radius: 100%;
  margin-top: -25px;
  bottom: 30px;
  background : #f6f6f6;
  @apply mx-auto relative;
}

.navigator-container {
  width: 75px;
  height: 75px;
  border-radius: 100%;
  border: 4px solid #eaa500;
  top: 10px;
  @apply mx-auto cursor-pointer relative;
}


.navigator {
  border-radius: 100%;
  height: 60px;
  width: 60px;
  background: #eaa500;
  border: 10px solid transparent;
  margin-top: 3.5px;
  transition: all .5s ease;
  @apply mx-auto;
}


</style>
