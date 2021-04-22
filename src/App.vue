<template>
  <Header title="Music App" />
  <SongSearch />
</template>

<script>
import Header from "./components/Header.vue";
import SongSearch from "./components/SongSearch";

export default {
  name: "App",
  components: {
    Header, SongSearch
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
