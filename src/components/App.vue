<template>
  <md-app
    v-cloak
    md-waterfall
    md-mode="fixed"
  >
    <md-app-toolbar class="md-primary md-dense md-layout md-alignment-center-space-between">
      <router-link to="/">
        <div class="md-layout-item md-title">
          {{ $t('title') }}
        </div>
      </router-link>
    </md-app-toolbar>

    <md-app-content>
      <router-view />
    </md-app-content>
  </md-app>
</template>

<script>
    export default {
        name: 'App',
        components: {
        },
    }
</script>

<style scoped>
</style>
