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
      <div class="navigator-container absolute">
        <div class="navigator" @click="trigger">
          <div class="lines">
            <div class="line" ref="firstLine"></div>
            <div class="line" ref="secondLine" style="top : 10px"></div>
            <div class="line" ref="thirdLine" style="top : 20px"></div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navigator",
  computed: {
    activated() {
      return this.$store.state.navigatorActivated
    }
  },
  watch: {
    '$store.state.navigatorActivated': function (val) {
      if (this.$store.state.navigatorStatus === 'onlyClose') {
        if (val) {
          this.activate()
        } else {
          this.disActivate()
        }
        this.changeStatus('default')
      }
    }
  },
  methods: {
    changeState() {
      this.$store.commit('changeNavigatorState');
    },
    changeStatus(status) {
      this.$store.commit('changeNavigatorStatus', status)
    },
    trigger() {
      if (this.$store.state.navigatorStatus === 'default') {
        if (!this.activated) {
          this.activate()
        } else {
          this.disActivate()
        }
      }
    },
    activate() {
      const firstLine = this.$refs.firstLine
      const secondLine = this.$refs.secondLine
      const thirdLine = this.$refs.thirdLine

      firstLine.style.transform = 'translateY(10px)'
      thirdLine.style.transform = 'translateY(-10px)'

      this.showPoints()

      setTimeout(() => {
        firstLine.style.transform = 'translateY(10px) rotate(-45deg)'
        secondLine.style.transform = 'rotate(45deg)'
        thirdLine.style.transform = 'translateY(-10px) rotate(45deg)'
      }, 500)
    },
    disActivate() {
      const firstLine = this.$refs.firstLine
      const secondLine = this.$refs.secondLine
      const thirdLine = this.$refs.thirdLine

      firstLine.style.transform = 'translateY(10px)'
      secondLine.style.transform = ''
      thirdLine.style.transform = 'translateY(-10px)'

      this.showPoints()

      setTimeout(() => {
        firstLine.style.transform = ''
        thirdLine.style.transform = ''
        this.changeState()
      }, 500)
    },
    showPoints() {
      if (!this.activated) {
        this.changeState()

        setTimeout(() => {
          this.$refs.point1.style.transform = 'translateY(-100px)'
          this.$refs.point2.style.transform = 'translateY(-200px)'
          this.$refs.point3.style.transform = 'translateY(-300px)'
        }, 0)
      } else {
        this.$refs.point1.style.transform = 'translateY(0px)'
        this.$refs.point2.style.transform = 'translateY(0px)'
        this.$refs.point3.style.transform = 'translateY(0px)'

        this.changeStatus('default')
      }
    }
  }
}
</script>

<style scoped>

.line {
  background: white;
  border-radius: 10px;
  height: 5px;
  width: 40px;
  transition: all .5s ease;
  @apply mx-auto my-1 absolute;
}

.lines {
  top: 4px;
  @apply relative;
}

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
  background: #f6f6f6;
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
