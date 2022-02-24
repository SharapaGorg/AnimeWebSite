<template>
  <div ref="root">
    <div class="container_">

      <div class='point' v-show="activated && statusDefault" ref="point1">
        <div class="navigator" style="margin-top : 6px;">
          <img src='../static/gear.svg' alt=""/>
        </div>
      </div>

      <div class='point' v-show="activated && statusDefault" ref="point2">

        <div class="navigator" style="margin-top : 6px;">
          <img src='../static/geo.svg' alt=""/>
        </div>

        <div v-show="geoActivated">
          <div
            @click="$router.push('search')"
            class="geo-part"
            ref="Search"
          >

            <svg height="30" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg" class="geo-svg">
              <path class="geo-sprite"
                    d="M53.1 47.3L38.165 32.365C40.9282 28.1655 42.0349 23.0902 41.2709 18.1215C40.5069 13.1529 37.9265 8.64448 34.0293 5.46915C30.1321 2.29381 25.1953 0.677452 20.1748 0.933005C15.1542 1.18856 10.4071 3.29785 6.85246 6.85249C3.29782 10.4071 1.18853 15.1543 0.932974 20.1748C0.677421 25.1953 2.29378 30.1321 5.46912 34.0293C8.64445 37.9265 13.1529 40.5069 18.1215 41.2709C23.0901 42.035 28.1655 40.9282 32.365 38.165L47.3 53.1L53.1 47.3ZM8.15 21.2C8.15 18.619 8.91537 16.0959 10.3493 13.9498C11.7833 11.8038 13.8214 10.1311 16.206 9.1434C18.5906 8.15568 21.2145 7.89724 23.7459 8.40078C26.2774 8.90432 28.6027 10.1472 30.4277 11.9723C32.2528 13.7974 33.4957 16.1226 33.9992 18.6541C34.5028 21.1856 34.2444 23.8095 33.2566 26.194C32.2689 28.5786 30.5963 30.6168 28.4502 32.0507C26.3041 33.4847 23.781 34.25 21.2 34.25C17.7389 34.25 14.4196 32.8751 11.9723 30.4278C9.52491 27.9804 8.15 24.6611 8.15 21.2V21.2Z"
              />
            </svg>

            <div class="triangle" ref="triangle"></div>
            <span class="geo-title" style="left : 25px">Search</span>

          </div>
          <div
            class="geo-part"
            style="transform: translateY(-102px) translateX(120px);"
            @click="$router.push('/')"
            ref="Home"
          >

            <svg height="30" viewBox="0 0 48 38" fill="none" xmlns="http://www.w3.org/2000/svg" class="geo-svg">
              <path class='geo-sprite'
                    d="M16 0C15.7431 0.00408442 15.4976 0.106894 15.3145 0.287109C14.5875 0.588079 14 1.17087 14 2C13.9981 2.13251 14.0226 2.26407 14.072 2.38704C14.1214 2.51001 14.1948 2.62193 14.2878 2.7163C14.3809 2.81067 14.4918 2.88561 14.614 2.93676C14.7363 2.9879 14.8675 3.01424 15 3.01424C15.1325 3.01424 15.2637 2.9879 15.386 2.93676C15.5082 2.88561 15.6191 2.81067 15.7122 2.7163C15.8052 2.62193 15.8786 2.51001 15.928 2.38704C15.9774 2.26407 16.0019 2.13251 16 2V6V12C16 12.55 15.55 13 15 13C14.45 13 14 12.55 14 12V8.35547C12.264 9.53747 8.8382 11.0769 4.4082 9.08789C4.0452 8.92389 3.61336 8.99458 3.31836 9.26758C3.02436 9.54058 2.92259 9.96284 3.05859 10.3398C3.07841 10.393 4.64778 14.5358 9 16.2559V20.334C7.84729 20.7946 4.65013 21.7963 1.4668 20.1152C1.0788 19.9112 0.603968 19.982 0.292968 20.293C-0.0180318 20.603 -0.0897662 21.0788 0.115234 21.4668C0.256234 21.7338 3.652 28 11 28H37C44.348 28 47.7438 21.7338 47.8848 21.4668C48.0898 21.0798 48.018 20.603 47.707 20.293C47.396 19.983 46.9202 19.9112 46.5332 20.1152C43.3683 21.7867 40.1557 20.7891 39 20.332V16.2559C43.3522 14.5358 44.9204 10.393 44.9395 10.3398C45.0755 9.96584 44.9775 9.54644 44.6875 9.27344C44.3975 9.00044 43.9734 8.92408 43.6074 9.08008C39.1254 10.9981 35.73 9.5087 34.002 8.3457V12C34.002 12.55 33.552 13 33.002 13C32.452 13 32.002 12.55 32.002 12V3H32V2C31.9981 2.13251 32.0226 2.26407 32.072 2.38704C32.1214 2.51001 32.1948 2.62193 32.2878 2.7163C32.3809 2.81067 32.4918 2.88561 32.614 2.93676C32.7363 2.9879 32.8675 3.01424 33 3.01424C33.1325 3.01424 33.2637 2.9879 33.386 2.93676C33.5082 2.88561 33.6191 2.81067 33.7122 2.7163C33.8052 2.62193 33.8786 2.51001 33.928 2.38704C33.9774 2.26407 34.0019 2.13251 34 2C34 1.17087 33.4125 0.588079 32.6855 0.287109C32.5024 0.106894 32.2569 0.00408442 32 0C31.7431 0.00408442 31.4976 0.106894 31.3145 0.287109C30.5875 0.588079 30 1.17087 30 2V3H18V2C18 1.17087 17.4125 0.588079 16.6855 0.287109C16.5024 0.106894 16.2569 0.00408442 16 0V0ZM11 16.8125C11.6269 16.9231 12.2832 17 13 17H18V20H11V16.8125ZM37 16.8125V20H30V17H35C35.7168 17 36.3731 16.9231 37 16.8125ZM20 17H28V20H20V17ZM7 29.4141V37C7 37.552 7.447 38 8 38H40C40.553 38 41 37.552 41 37V29.4141C39.797 29.7731 38.472 30 37 30H30V36H18V30H11C9.528 30 8.203 29.7731 7 29.4141ZM20 30V32H28V30H20Z"
              />
            </svg>


            <span class="geo-title">Home</span>

          </div>
          <div
            class="geo-part"
            style="transform: translateY(-6px) translateX(120px)"
            ref="Some"
          >

            <svg height="30" viewBox="0 0 48 38" fill="none" xmlns="http://www.w3.org/2000/svg" class="geo-svg">
              <path class='geo-sprite'
                    d="M16 0C15.7431 0.00408442 15.4976 0.106894 15.3145 0.287109C14.5875 0.588079 14 1.17087 14 2C13.9981 2.13251 14.0226 2.26407 14.072 2.38704C14.1214 2.51001 14.1948 2.62193 14.2878 2.7163C14.3809 2.81067 14.4918 2.88561 14.614 2.93676C14.7363 2.9879 14.8675 3.01424 15 3.01424C15.1325 3.01424 15.2637 2.9879 15.386 2.93676C15.5082 2.88561 15.6191 2.81067 15.7122 2.7163C15.8052 2.62193 15.8786 2.51001 15.928 2.38704C15.9774 2.26407 16.0019 2.13251 16 2V6V12C16 12.55 15.55 13 15 13C14.45 13 14 12.55 14 12V8.35547C12.264 9.53747 8.8382 11.0769 4.4082 9.08789C4.0452 8.92389 3.61336 8.99458 3.31836 9.26758C3.02436 9.54058 2.92259 9.96284 3.05859 10.3398C3.07841 10.393 4.64778 14.5358 9 16.2559V20.334C7.84729 20.7946 4.65013 21.7963 1.4668 20.1152C1.0788 19.9112 0.603968 19.982 0.292968 20.293C-0.0180318 20.603 -0.0897662 21.0788 0.115234 21.4668C0.256234 21.7338 3.652 28 11 28H37C44.348 28 47.7438 21.7338 47.8848 21.4668C48.0898 21.0798 48.018 20.603 47.707 20.293C47.396 19.983 46.9202 19.9112 46.5332 20.1152C43.3683 21.7867 40.1557 20.7891 39 20.332V16.2559C43.3522 14.5358 44.9204 10.393 44.9395 10.3398C45.0755 9.96584 44.9775 9.54644 44.6875 9.27344C44.3975 9.00044 43.9734 8.92408 43.6074 9.08008C39.1254 10.9981 35.73 9.5087 34.002 8.3457V12C34.002 12.55 33.552 13 33.002 13C32.452 13 32.002 12.55 32.002 12V3H32V2C31.9981 2.13251 32.0226 2.26407 32.072 2.38704C32.1214 2.51001 32.1948 2.62193 32.2878 2.7163C32.3809 2.81067 32.4918 2.88561 32.614 2.93676C32.7363 2.9879 32.8675 3.01424 33 3.01424C33.1325 3.01424 33.2637 2.9879 33.386 2.93676C33.5082 2.88561 33.6191 2.81067 33.7122 2.7163C33.8052 2.62193 33.8786 2.51001 33.928 2.38704C33.9774 2.26407 34.0019 2.13251 34 2C34 1.17087 33.4125 0.588079 32.6855 0.287109C32.5024 0.106894 32.2569 0.00408442 32 0C31.7431 0.00408442 31.4976 0.106894 31.3145 0.287109C30.5875 0.588079 30 1.17087 30 2V3H18V2C18 1.17087 17.4125 0.588079 16.6855 0.287109C16.5024 0.106894 16.2569 0.00408442 16 0V0ZM11 16.8125C11.6269 16.9231 12.2832 17 13 17H18V20H11V16.8125ZM37 16.8125V20H30V17H35C35.7168 17 36.3731 16.9231 37 16.8125ZM20 17H28V20H20V17ZM7 29.4141V37C7 37.552 7.447 38 8 38H40C40.553 38 41 37.552 41 37V29.4141C39.797 29.7731 38.472 30 37 30H30V36H18V30H11C9.528 30 8.203 29.7731 7 29.4141ZM20 30V32H28V30H20Z"
              />
            </svg>

            <span class="geo-title">Home</span>

          </div>
        </div>
      </div>

      <div class='point' v-show="activated && statusDefault" ref="point3">
        <div class="navigator" style="margin-top : 6px;">
          <img src='../static/account.svg' alt=""/>
        </div>
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
  data() {
    return {
      geoActivated: false,
    }
  },
  computed: {
    activated() {
      return this.$store.state.navigatorActivated
    },
    statusDefault() {
      return this.$store.state.navigatorStatus === 'default'
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
      }
    }
  },
  mounted() {
    this.$refs.point2.addEventListener('mouseover', () => {
      this.geoActivated = true
    })
    this.$refs.point2.addEventListener('mouseout', () => {
      this.geoActivated = false
    })

    const getParts = document.querySelectorAll('.geo-part')

    for (let part of getParts) {
      const sprite = part.getElementsByTagName('path')[0]

      part.addEventListener('mouseover', () => {
        sprite.style.fill = '#f6f6f6'
      })
      part.addEventListener('mouseout', () => {
        sprite.style.fill = '#b2b2b2'
      })
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
          this.$refs.point1.style.transform = 'translateY(-120px)'
          this.$refs.point2.style.transform = 'translateY(-220px)'
          this.$refs.point3.style.transform = 'translateY(-320px)'
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

.geo-svg {
  top: 8px;
  margin-left: 15px;
  @apply inline-block relative;
}

.geo-sprite {
  fill: #b2b2b2;
  @apply inline-block;
}

.geo-sprite:hover {
  fill: white !important;
}

.geo-part {
  height: 48px;
  width: 200px;
  background: #f6f6f6;
  color: #b2b2b2;
  transform: translateY(-54px) translateX(120px);
  @apply absolute;
}

.geo-part:hover {
  fill: white !important;
  background: #eaa500;
  color: white;
}

.geo-title {
  left: 18px;
  top: 10px;
  font-family: 'Exo', sans-serif;
  @apply inline-block relative;
}

.triangle {
  width: 10px;
  border: 15px solid transparent;
  border-right: 30px solid #eaa500;
  top: 9px;
  transform: translateX(-45px);
  @apply absolute;
}

.geo-part img {
  height: 30px;
  left: 15px;
  top: 9px;
  @apply relative inline-block;
}

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
  left: 10px;
  margin-top: 17px !important;
  transition: all .5s ease;
  border-radius: 100%;
  border-style: solid;
  border-color: transparent;
  border-width: 4px;
  bottom: 12px;
  width: 80px;
  height: 80px;
  @apply absolute cursor-pointer;
}

.point:hover {
  border-color: #eaa500;
  transition: all .5s ease;
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
