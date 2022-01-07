<template>
  <a href="/" class="logo">Company</a>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
</script>

<style scoped>
.logo {
  /* Replace url with logo image */
  color: transparent;
  background-image: url("~static/imaginary-co.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height: 163px;
  width: 300px;
  display: block;
}
/* Using pseudo-elements to render the logo image */
.logo-2 {
  /* Position set to relative just in case the anchor is moved */
  position: relative;
}
.logo-2::after {
  content: url("~static/imaginary-co.png");
  display: block;
  position: absolute;
  height: 163px;
  width: 300px;
  top: 0;
  left: 0;
}
</style>
