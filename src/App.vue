<template>
  <div id="app">
    <b-navbar>
      <template slot="brand">
        <b-navbar-item>
          <div class="is-size-3">BBall Player Search</div>
        </b-navbar-item>
      </template>
      <template slot="start"></template>

      <template slot="end">
        <div class="buttons">
          <a href="https://www.balldontlie.io/#introduction" target="_blank">
            <b-button class="is-primary">balldontlie API</b-button>
          </a>
        </div>
      </template>
    </b-navbar>
    <router-view />
  </div>
</template>

<style></style>
