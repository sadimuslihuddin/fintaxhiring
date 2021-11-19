<template>
  <Main msg="Frontend Development by Sa'di"/>
  <div class="d-flex justify-content-around">
    <div>
      <a class="main-btn btn-primary" v-bind:href='urlcalculator'>Calculator</a><br>
    </div>
    <div>
      <a class="main-btn btn-primary" v-bind:href='urltable'>Table</a> 
    </div>
  </div>
</template>

<script>
import Main from './components/main.vue';

export default {
  name: 'App',
  components: {
    Main
  },
  data() {
    return {
      urltable: "table",
      urlcalculator: "calculator",
    };
  }
}
</script>

<style>
#app {
  font-family: Poppins, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.main-btn {
  padding: 10px 15px; 
  border-radius: 5px;
  -webkit-text-decoration: none;
  text-decoration: none; 
}
</style>
