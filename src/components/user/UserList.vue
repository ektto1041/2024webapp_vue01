<template>
  <div class="list-container">
    <UserCard
      v-for="(userData, i) of $store.state.userDatas"
      :key="i"
      :userData="userData"
      :idx="i"
      :setUpdateData="setUpdateData"
    />
  </div>
</template>

<script setup>
import UserCard from './UserCard.vue';

const props = defineProps({
  setUpdateData: Function,
});
</script>

<style lang="scss" scoped>
.list-container {
  padding: 0 16px;
}

.img-wrapper {
  width: 100px;
  height: 100px;
  overflow: hidden;
  border-radius: 50px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
  transition: all 0.5s;
  cursor: pointer;

  img {
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 5px rgba(0, 0, 0, 0.5);
  }
}
</style>
