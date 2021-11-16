<template>
  <md-app
    v-cloak
    md-waterfall
    md-mode="fixed"
  >
    <md-app-toolbar class="md-primary md-dense">
      <div class="md-toolbar-section-start">
        {{ $t('title') }}
      </div>
    </md-app-toolbar>

    <md-app-content>
      <router-view />
    </md-app-content>
  </md-app>
</template>

<script>
export default {
    name: 'TestComponent',

    components: {
    },

    methods: {
        answer() {
            return 42
        },
    },
}
</script>

<style scoped>
</style>
