<template>
  <div ref="root" style="height : 100vh">
    <div class="account-container">

      <div class="avatar-container">
        <div class="gradient-border" style="height : 240px; width: 240px;">
          <div class="avatar">
            <img src="../static/avatar.jpg" alt=""/>
          </div>
        </div>
      </div>

      <span class="username">SharapaGorg</span>

      <div class="account-description">
        <div class="font-bold text-center header">
          I am the developer of this anime site
        </div>

        <div class="content">
          If you find any problems on the site or come up with an original idea that could suit this site, write to me
          :)
        </div>

      </div>

      <div class="account-stat">
        <span class="pr-4 text-right">Viewed anime:</span>
        <span class="pl-4">{{ viewed }}</span>
        <span class="pr-4 text-right">Favourite anime:</span>
        <span class="pl-4">{{ favouriteAnime }}</span>
        <span class="pr-4 text-right">Favourite character</span>
        <span class="pl-4">{{ favouriteCharacter }}</span>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "me",
  data() {
    return {
      viewed: 100,
      favouriteAnime: 'Lelouch\'s rebellion',
      favouriteCharacter: 'Yato'
    }
  }
}
</script>

<style scoped>

.fit-content {
  width: fit-content;
}

.account-description {
  margin: 0 15px;
  border-radius: 5px;

}

.account-description .header {
  color: #f6f6f6;
  font-family: 'Exo', sans-serif;
}

.account-description .content {
  color: #f6f6f6;
  border-radius: 5px;
  font-family: 'Exo', sans-serif;
  width: 90%;
  background: #CD97F8;
  box-shadow:  15px 15px 22px #b686dd,
  -15px -15px 22px #e4a8ff;
  @apply px-3 py-1 mx-auto mt-3 text-justify;
}

.account-stat {
  border-radius: 15px;
  font-size: 18px;
  color: #f6f6f6;
  padding: 5px 10px;
  font-family: 'Exo', sans-serif;
  border: 2px dashed #f6f6f6;
  @apply grid grid-cols-2 mx-4 mt-6;
}

.account-container {
  background: #CD97F8;
  width: 500px;
  padding-top: 25px;
  padding-bottom: 25px;
  border-radius: 10px;
  top: 100px;
  @apply relative mx-auto;
}

.username {
  font-size: 23px;
  color: #f6f6f6;
  /*text-decoration: underline;*/
  font-family: 'Exo', sans-serif;
  @apply block text-center;
}

.avatar-container {
  width: fit-content;
  @apply mx-auto;
}

.avatar {
  width: 220px;
  height: 220px;
  overflow: hidden;
  border-radius: 100%;
  top: 10px;
  @apply relative mx-auto;
}

.gradient-border {
  background: #1D1F20;
  position: relative;
  /*height: 240px;*/
  /*width: 240px;*/
  background: linear-gradient(60deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82);
  border-radius: 100%;
  animation: animatedgradient 3s ease alternate infinite;
  background-size: 300% 300%;
}


@keyframes animatedgradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

</style>
