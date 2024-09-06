<template>
  <div class="container">
    <h3>User positions</h3>
    <div class="map-wrapper">
      <div v-if="!isMapLoading" class="loading">지도 로딩 중...</div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import store from '../store/store';

const isMapLoading = ref(false);

onMounted(() => {
  navigator.geolocation.getCurrentPosition(pos => {
    const { latitude: lat, longitude: lng } = pos.coords;

    const options = {
      center: new kakao.maps.LatLng(lat, lng),
      level: 3,
    };

    var map = new kakao.maps.Map(document.getElementsByClassName('map-wrapper')[0], options);
    isMapLoading.value = true;

    store.state.userDatas.forEach(userData => {
      const markerPos = new kakao.maps.LatLng(userData.lat, userData.lng);

      const marker = new kakao.maps.Marker({ position: markerPos });

      marker.setMap(map);
    });
  });
});
</script>

<style lang="scss" scoped>
.container {
  .map-wrapper {
    width: 100%;
    height: 500px;

    .loading {
      position: relative;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 10;
      background-color: white;
    }
  }
}
</style>
