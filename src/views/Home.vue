<template>
  <div class="home">
    <div class="search-player">
      <b-field>
        <b-input v-model="playerName" placeholder="Player's Name..." />
      </b-field>
      <b-button @click.native="retrievePlayers" type="is-info" outlined
        >Find Player</b-button
      >
    </div>

    <PlayerOverview />
  </div>
</template>

<script>
import PlayerOverview from "@/components/PlayerOverview.vue";

export default {
  name: "Home",
  components: {
    PlayerOverview
  },

  data() {
    return {
      playerName: ""
    };
  },

  methods: {
    retrievePlayers() {
      let payload = {
        name: this.playerName.split(" ").join("_")
      };
      this.$store.dispatch("retrieveAllPlayers", payload);
    }
  }
};
</script>

<style scoped>
.search-player {
  width: 500px;
  margin: 40px auto;
}
</style>
