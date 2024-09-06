<template>
  <div class="icon-container" @click="handleClick">
    <i :class="icon"></i>
  </div>
</template>

<script setup>
const props = defineProps({
  icon: String,
});

const emits = defineEmits();

const handleClick = () => {
  emits('onClick');
};
</script>

<style lang="scss" scoped>
.icon-container {
  width: 32px;
  height: 32px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    color: #ee0000;
  }
}
</style>
