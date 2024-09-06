<template>
  <nav>
    <div class="inner">
      <div class="logo">
        <router-link to="/">LOGO</router-link>
      </div>
      <div class="menus">
        <router-link to="/">Home</router-link>
        <router-link to="/user">User</router-link>
      </div>
    </div>
  </nav>
</template>

<script setup></script>

<style lang="scss" scoped>
nav {
  width: 100%;
  background-color: white;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;

  .inner {
    max-width: 1200px;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;

    .logo {
      width: 100px;
      text-align: center;
      font-size: 2rem;
      height: 100%;
    }

    .menus {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
  }

  a {
    display: block;
    height: 100%;
    line-height: 50px;
  }
}
</style>
