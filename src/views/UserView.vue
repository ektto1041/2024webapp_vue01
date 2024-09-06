<template>
  <div class="container">
    <div class="col">
      <h3>User List</h3>
      <UserList :setUpdateData="setUpdateData" />
    </div>
    <div class="col">
      <h3>Sign Up</h3>
      <UserSignUp :inputData="inputData" @resetInputData="resetInputData" @setImage="setImage" @setPos="setPos" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import UserList from '../components/user/UserList.vue';
import UserSignUp from '../components/user/UserSignUp.vue';

const inputData = ref({
  userId: '',
  password: '',
  username: '',
  addr: '',
  lat: 0,
  lng: 0,
  image: 'https://picsum.photos/200',
});

const setUpdateData = updateData => {
  inputData.value = { ...updateData };
};

const resetInputData = () => {
  inputData.value = {
    userId: '',
    password: '',
    username: '',
    addr: '',
    lat: 0,
    lng: 0,
    image: 'https://picsum.photos/200',
  };
};

const setImage = image => {
  inputData.value.image = image;
};

const setPos = (lat, lng) => {
  inputData.value.lat = lat;
  inputData.value.lng = lng;
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  padding: 1rem;

  .col {
    flex-basis: 50%;
  }
}
</style>
