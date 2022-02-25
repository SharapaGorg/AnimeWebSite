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
  @apply h-screen w-screen overflow-x-hidden;
  @apply bg-gradient-to-br from-amber-300 via-yellow-200 to-amber-300;
}

footer {
  @apply w-full fixed;
  @apply h-[40px] -mt-[40px] z-20;
  @apply bg-white/80 backdrop-blur;
}

</style>
