<template>
  <div>
    <Nuxt />
  </div>
</template>
<script>
import {initFacebookSdk}from '../plugins/facebook';

export default {
  created() {
    initFacebookSdk();
  }  
}
</script>

<style>
 html, body {
    margin: 0;
    height: 100%;
}
html {
    margin: 0;
    height: 100%;
    background-color: #f4f0ec;
}
div#__nuxt, #__layout, #__layout>div, #app { min-height: 100vh; }
</style>
