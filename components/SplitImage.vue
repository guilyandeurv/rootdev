<template>
  <div class="image-container">
    <div class="image-part" :style="leftStyle"></div>
    <div class="image-part" :style="rightStyle"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      leftStyle: {
        backgroundImage: 'url(./internet-hacker-banners.png)',
        backgroundPosition: 'left',
        animation: 'moveLeft 5s infinite alternate'
      },
      rightStyle: {
        backgroundImage: 'url(./internet-hacker-banners.png)',
        backgroundPosition: 'right',
        animation: 'moveRight 5s infinite alternate'
      }
    };
  }
}
</script>

<style scoped>
.image-container {
  display: flex;
  width: 100%;
  height: 300px; /* Ajustez la hauteur selon vos besoins */
  overflow: hidden;
}

.image-part {
  width: 50%;
  height: 100%;
  background-size: 200%; /* Double la taille pour permettre le déplacement */
}

@keyframes moveLeft {
  from { transform: translateX(0); }
  to { transform: translateX(-10px); } /* Ajustez la distance de déplacement */
}

@keyframes moveRight {
  from { transform: translateX(0); }
  to { transform: translateX(10px); } /* Ajustez la distance de déplacement */
}
</style>
