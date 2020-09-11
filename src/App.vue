<template>
  <div id="app">
      <Landing-page></Landing-page>
  </div>
</template>

<script>

import LandingPage from "@/views/LandingPage";
export default {
  name: 'App',
    components: {LandingPage},
}
</script>

<style scoped lang="scss">
@import "src/scss/main";
*{
    font-family: $main-Font;
}
</style>
