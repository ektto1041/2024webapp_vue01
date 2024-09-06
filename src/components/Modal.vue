<template>
  <div class="modal-wrapper" @mousedown="handleClose">
    <div class="modal-container" @mousedown="$event.stopPropagation()">
      <div class="map-wrapper">
        <div v-if="!isMapLoading" class="loading">지도 로딩 중...</div>
        <div v-if="isMapLoading" class="pos"></div>
        <button v-if="isMapLoading" class="save" @click="handleSavePos">확인</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import store from '../store/store';

onMounted(() => {
  document.getElementsByTagName('html')[0].classList.add('on-modal');
});

onUnmounted(() => {
  document.getElementsByTagName('html')[0].classList.remove('on-modal');
});

const emits = defineEmits();

const handleClose = () => {
  emits('closeModal');
};

const isMapLoading = ref(false);

const tLat = ref(0);
const tLng = ref(0);

onMounted(() => {
  navigator.geolocation.getCurrentPosition(pos => {
    const { latitude: lat, longitude: lng } = pos.coords;

    tLat.value = lat;
    tLng.value = lng;

    const options = {
      center: new kakao.maps.LatLng(lat, lng),
      level: 3,
    };

    var map = new kakao.maps.Map(document.getElementsByClassName('map-wrapper')[0], options);
    isMapLoading.value = true;

    kakao.maps.event.addListener(map, 'center_changed', function () {
      const latlng = map.getCenter();

      tLat.value = latlng.getLat();
      tLng.value = latlng.getLng();
    });
  });
});

const handleSavePos = () => {
  emits('savePos', tLat.value, tLng.value);
  emits('closeModal');
};
</script>

<style lang="scss" scoped>
.modal-wrapper {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 20;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);

  .modal-container {
    width: 80vw;
    height: 80vh;
    background-color: white;
    border-radius: 16px;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.8);
    overflow: hidden;

    .map-wrapper {
      position: relative;
      width: 100%;
      height: 100%;

      .loading {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .pos {
        position: absolute;
        top: calc(50% - 8px);
        right: calc(50% - 8px);
        width: 8px;
        height: 8px;
        background-color: red;
        border-radius: 50%;
        z-index: 99;
        outline: 2px solid red;
        box-shadow: inset 0 0 2px 2px white;
      }

      .save {
        position: absolute;
        width: 100px;
        height: 50px;
        background-color: blue;
        color: white;
        line-height: 50px;
        z-index: 99;
        bottom: 32px;
        left: calc(50% - 50px);
        font-size: 1.25rem;
        border-radius: 16px;
        border: none;
        box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
        cursor: pointer;
      }

      .hide {
        opacity: 0;
      }
    }
  }
}
</style>
