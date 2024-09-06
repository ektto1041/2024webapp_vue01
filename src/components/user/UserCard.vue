<template>
  <div class="container">
    <div class="img-box">
      <div class="img-wrapper">
        <img :src="userData.image" alt="" />
      </div>
    </div>

    <div class="content">
      <div class="username">{{ userData.username }}</div>
      <div class="user-id">{{ userData.userId }}</div>
      <div class="user-id">{{ `${userData.lat} ${userData.lng}` }}</div>
    </div>

    <div class="button-box">
      <IconButton :icon="'fa-solid fa-trash'" @onClick="handleDelete" />
      <IconButton :icon="'fa-solid fa-pen'" @onClick="handleUpdate" />
    </div>
  </div>
</template>

<script setup>
import store from '../../store/store';
import IconButton from './IconButton.vue';

const props = defineProps({
  userData: Object,
  idx: Number,
  setUpdateData: Function,
});

const handleDelete = () => {
  store.commit('deleteUser', props.idx);
};

const handleUpdate = () => {
  props.setUpdateData(props.userData);
};
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  display: flex;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  margin-bottom: 16px;
  padding: 8px;
  cursor: pointer;
  z-index: 1;
  transition: 0.3s;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }

  .img-box {
    flex-basis: 100px;
    height: 100px;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;

    .img-wrapper {
      width: 75px;
      height: 75px;
      border-radius: 2rem;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  .content {
    flex-grow: 1;
    padding: 15px 0;

    .username {
      font-size: 1.5rem;
    }
  }

  .button-box {
    position: absolute;
    right: 16px;
    top: 8px;
    display: flex;
  }
}
</style>
