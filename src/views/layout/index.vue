<script setup>
import Header from "./Header/index.vue";
import Main from "./Main/index.vue";
</script>
<template>
  <div class="layout">
    <Header></Header>
    <Main class="main"></Main>
  </div>
</template>

<style lang="scss" scoped>
.layout{
  width: 100%;
  height: 100%;
}
.main{
  position: absolute;
  top: var(--header-height);
  min-height: calc(100% - var(--header-height));
  width: 100%;
  bottom: 0;
}
</style>
