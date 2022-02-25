<template>
  <div ref="root" class="w-full">
    <input :placeholder="placeholder" v-model="inputData"/>
  </div>
</template>

<script>
export default {
  name: "Search",
  props: {
    hints : Array,
    placeholder : String
  },
  data() {
    return {
      inputData : ''
    }
  },
  watch: {
    '$store.state.searchInput' : function (value) {
      this.inputData = value
    }
  }
}
</script>

<style scoped>

input {
  background : #f6f6f6;
  padding : 5px;
  border-radius: 5px;
  height : 40px;
  text-indent: 10px;
  outline: none;
  top : 20px;
  @apply block relative mx-auto md:w-1/2 lg:w-1/3;
}

</style>
