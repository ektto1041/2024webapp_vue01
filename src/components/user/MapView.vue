<template>
  <div id="kakao-map" class="map-wrapper"></div>
</template>

<script setup>
import { onMounted, useTemplateRef } from 'vue';

const appKey = '2f475c8cf8328e37869d6aab9557382b';

onMounted(() => {
  navigator.geolocation.getCurrentPosition(pos => {
    const { latitude: lat, longitude: lng } = pos.coords;

    const options = {
      center: new kakao.maps.LatLng(lat, lng),
      level: 3,
    };

    var map = new kakao.maps.Map(document.getElementById('kakao-map'), options);
  });
});
</script>

<style lang="scss" scoped>
.map-wrapper {
  width: 500px;
  height: 400px;
}
</style>
