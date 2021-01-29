<template>
  <div id="app">
      <router-view/>
  </div>
</template>

<script>

import Data from "./PlacholderData/Data.json"
export default {
  name: 'App',
    created() {
      window.sessionStorage.setItem("TemporaryStorage", JSON.stringify(Data))
    }
}
</script>

<style scoped lang="scss">
@import "src/scss/main";
*{
    font-family: $main-Font;
}
    #app{

    }
</style>
