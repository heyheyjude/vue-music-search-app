<template>
  <Header title="Music App" />
  <SongSearch @set-page="setPage" />
  <CardsField
    v-show="currentPage === 'search'"
    @set-page="setPage"
    :data="searchCards"
  />
  <ArtistField v-show="currentPage === 'artist'" :songs="artistCards" />
</template>

<script>
import Header from "./components/Header.vue";
import SongSearch from "./components/SongSearch";
import CardsField from "./components/CardsField";
import ArtistField from "./components/ArtistField";

export default {
  name: "App",
  components: {
    Header,
    SongSearch,
    CardsField,
    ArtistField,
  },
  data() {
    return {
      searchCards: [],
      artistCards: [],
      currentPage: "search",
    };
  },
  methods: {
    setData(data) {
      this.searchCards = data;
    },
    setPage({ page, data }) {
      if (page === "artist") {
        this.artistCards = data.songs;
      }
      if (page === "search") {
        this.searchCards = data;
      }
      this.currentPage = page;
    },
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
