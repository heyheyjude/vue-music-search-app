<template>
  <label for="songSearchBar">Search</label>
  <input id="songSearchBar" type="text" v-model="searchValue" />
  <Button @click="sendRequest" label="Search" />
</template>

<script>
import Button from "./Buttons/Button";
import { getSearchRequest } from "../helpers/server";
export default {
  components: { Button },
  props: {},
  data() {
    return {
      searchValue: "",
    };
  },
  methods: {
    async sendRequest() {
      const response = await getSearchRequest(
        this.searchValue.replace(" ", "%20").trim()
      );
      this.$emit("set-page", {
        page: "search",
        data: response.hits.map(({ result }) => result),
      });
    },
  },
};
</script>

<style></style>
