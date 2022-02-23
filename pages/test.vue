<template>
  <div ref="root" style="height : 100vh">
  </div>
</template>

<script>
export default {
  name: "test",
  data() {
    return {
      activated : false
    }
  },
  methods: {
    trigger() {
        this.activated = !this.activated

        if (this.activated) {
          this.activate()
        }
        else {
          this.disActivate()
        }
    },
    activate() {
      const firstLine = this.$refs.firstLine
      const secondLine = this.$refs.secondLine
      const thirdLine = this.$refs.thirdLine

      firstLine.style.transform = 'translateY(10px)'
      thirdLine.style.transform = 'translateY(-10px)'

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

      setTimeout(() => {
        firstLine.style.transform = ''
        thirdLine.style.transform = ''
      }, 500)
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
  left: 10px;
  transition: all .5s ease;
  @apply mx-auto my-1 absolute;
}

.lines {
  top: 15px;
  @apply relative;
}

.menu {
  height: 60px;
  width: 60px;
  background: gray;
  border-radius: 100%;
  @apply mx-auto;
}

</style>
