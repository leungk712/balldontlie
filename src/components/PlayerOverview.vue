<template>
  <div>
    <div v-for="(player, i) in this.playersList" :key="i">
      <div class="card">
        <div>
          <div class="card-header-title is-centered is-size-4">
            <b-skeleton size="is-large" :active="loading" />
            <template v-if="!loading"
              >{{ player.first_name }} {{ player.last_name }}</template
            >
            <div class="is-divider"></div>
          </div>
          <div class="card-content">
            <b-skeleton size="is-large" :active="loading" />
            <div>{{ player.team.full_name }}</div>
            <b-button type="is-info" outlined v-if="!loading"
              >View Profile</b-button
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "PlayerOverview",

  data() {
    return {};
  },

  methods: {},

  computed: {
    ...mapState({
      loading: state => state.loading,
      playersList: state => state.playersList
    })
  }
};
</script>

<style scoped>
.card {
  margin: 20px auto;
  width: 400px;
}
</style>
