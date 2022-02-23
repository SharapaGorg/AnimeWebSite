<template>
  <div ref="root" style="width :fit-content">
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
  }
}
</script>

<style scoped>

input {
  padding : 5px;
  border-radius: 5px;
  width : 300px;
  height : 40px;
  text-indent: 10px;
  outline: none;
}

</style>
