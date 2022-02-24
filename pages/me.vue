<template>
    <div ref="root" style="height : 100vh">

      <div class="avatar-container">
        <div class="gradient-border" id="box">
          <div class="avatar">
            <img src="../static/avatar.jpg" alt=""/>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "me"
}
</script>

<style scoped>

.avatar-container  {
  top : 25px;
  width : fit-content;
  @apply mx-auto relative;
}

.avatar {
  width : 220px;
  height : 220px;
  overflow : hidden;
  border-radius: 100%;
  @apply mx-auto;
}

#box {
  display: flex;
  align-items: center;
  justify-content: center;
  width :220px;
  height : 220px;
  color: white;
  font-size: 2.5rem;
}
.gradient-border {
  background: #1D1F20;
  position: relative;
  border-radius: 100%;
}
.gradient-border:after {
  content: '';
  position: absolute;
  top: calc(-1 * 10px);
  left: calc(-1 * 10px);
  height: calc(100% + 10px * 2);
  width: calc(100% + 10px * 2);
  background: linear-gradient(60deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82);
  border-radius: 100%;
  z-index: -1;
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
