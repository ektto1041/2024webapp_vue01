<template>
  <div style="margin-top: 32px">
    <div class="mb-3">
      <input type="text" class="form-control" placeholder="UserId" v-model="inputData.userId" />
    </div>
    <div class="mb-3">
      <input type="text" class="form-control" placeholder="Password" v-model="inputData.password" />
    </div>
    <div class="mb-3">
      <input type="text" class="form-control" placeholder="Username" v-model="inputData.username" />
    </div>
    <div class="mb-3">
      <input
        type="text"
        class="form-control"
        placeholder="Address"
        :value="`${inputData.lat} ${inputData.lng}`"
        @click="isModalOn = true"
      />
    </div>
    <div class="input-group mb-3">
      <input type="file" class="form-control" id="inputGroupFile02" @change="handleChangeFile" accept="image/*" />
      <label for="inputGroupFile02" class="input-group-text">Upload</label>
    </div>

    <div class="sign-up-button" @click="handleSignUp">저장</div>
  </div>
  <Modal v-if="isModalOn" @closeModal="isModalOn = false" @savePos="savePos" />
</template>

<script setup>
import { ref } from 'vue';
import store from '../../store/store';
import Modal from '../Modal.vue';

const isModalOn = ref(false);

const emits = defineEmits();

const props = defineProps({
  inputData: Object,
});

const handleChangeFile = event => {
  const file = event.target.files[0];

  emits('setImage', URL.createObjectURL(file));
};

const handleSignUp = () => {
  store.commit('addUser', { ...props.inputData });

  emits('resetInputData');
};

const savePos = (lat, lng) => {
  emits('setPos', lat, lng);
};
</script>

<style lang="scss" scoped>
.mb-3 {
  margin-bottom: 32px;
  padding: 0 32px;

  input[type='text'] {
    width: 100%;
    height: 32px;
    border: none;
    border-bottom: 1px solid black;
    padding: 0 16px;
    outline: none;
    font-size: 1.25rem;
  }
}

.sign-up-button {
  width: 100px;
  padding: 16px 0;
  margin: auto;
  text-align: center;
  background-color: blue;
  color: white;
  font-size: 1rem;
  border-radius: 16px;
  cursor: pointer;
}
</style>
