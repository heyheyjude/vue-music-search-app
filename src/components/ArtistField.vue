<template>
  <CardsField :data="songs" />
</template>
<script>
import CardsField from "./CardsField";
export default {
  name: "ArtistField",
  components: { CardsField },
  props: {
    songs: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
<style></style>
