<template>
  <div @click="getArtistSongs" :style="background" class="songCard">
    <h3>{{ title }}</h3>
  </div>
</template>
<script>
import { getArtistSongs as getArtistSongsFromServer } from "../../helpers/server";

export default {
  name: "SongCard",
  props: {
    image: String,
    title: String,
    artistID: Number,
  },
  data() {
    return {
      background: `background-image: url(${this.image})`,
    };
  },
  methods: {
    async getArtistSongs() {
      const artistSongs = await getArtistSongsFromServer(this.artistID);
			this.$emit("set-page", {page: "artist", data: artistSongs});
    },
  },
};
</script>
<style scoped>
.songCard {
  min-width: 300px;
  min-height: 300px;
  width: 300px;
  background-size: cover;
  border-radius: 20px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.11), 0 2px 2px rgba(0, 0, 0, 0.4),
    0 4px 4px rgba(0, 0, 0, 0.4), 0 6px 8px rgba(0, 0, 0, 0.4);
  color: white;
  box-sizing: border-box;
  padding: 15px;
  margin: 15px;
  cursor: pointer;
}
h3 {
  font-size: 30px;
}
</style>
