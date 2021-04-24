<template>
  <div class="songs-container">
    <SongCard
      v-for="{
        full_title,
        id,
        primary_artist: { image_url, id: artistID },
      } in data"
      :key="id"
      :title="full_title"
      :image="image_url"
      :artistID="artistID"
      @set-page="$emit('set-page', $event)"
    />
  </div>
</template>

<script>
import SongCard from "./Cards/SongCard";
export default {
  name: "CardsField",
  components: { SongCard },
  props: {
    data: [],
  },
  emits: ["set-page"]
};
</script>

<style scoped>
.songs-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-top: 30px;
}
</style>
