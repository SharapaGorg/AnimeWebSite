<template>
  <div>
    <nuxt/>
    <footer>
        <Navigator/>
    </footer>
  </div>
</template>

<script>
export default {
  name: "default"
}
</script>

<style>

html {
  height: 100vh;
  width: 100vw;
  background: #D44E4E;
  overflow-x: hidden;
}

footer {
  height: 40px;
  margin-top: -40px;
  background : #f6f6f6;
  @apply w-full fixed;
}

</style>
