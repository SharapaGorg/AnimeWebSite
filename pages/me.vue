<template>
  <div ref="root" style="height : 100vh">
    <div class="account-container">

      <div class="avatar-container">
        <div class="gradient-border">
          <div class="avatar">
            <img src="../static/avatar.jpg" alt=""/>
          </div>
        </div>
      </div>

      <span class="username">SharapaGorg</span>

    </div>
  </div>
</template>

<script>
export default {
  name: "me"
}
</script>

<style scoped>

.account-container {
  background: #CD97F8;
  width: 500px;
  padding-top: 25px;
  padding-bottom: 25px;
  border-radius: 10px;
  top : 100px;
  @apply mx-auto relative;
}

.username {
  font-size : 23px;
  color : #f6f6f6;
  text-decoration: underline;
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
  top : 10px;
  @apply mx-auto relative;
}

.gradient-border {
  background: #1D1F20;
  position: relative;
  height: 240px;
  width: 240px;
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
