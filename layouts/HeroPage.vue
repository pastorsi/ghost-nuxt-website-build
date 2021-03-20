<template>
  <div class="app-container">
    <TheHeader />
    <TheSideNav />
    <nuxt />
    <CookieControl :locale="$store.state.lang" />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from '~/components/TheHeader'
import TheFooter from '~/components/TheFooter'
import TheSideNav from '~/components/TheSideNav'

export default {
  components: {
    TheHeader,
    TheSideNav,
    TheFooter
  }
}
</script>

<style>
html,
body {
  margin: 0;
  height: 100%;
  width: 100%;
}
.app-container {
  height: 100%;
  position: relative;
  display: grid;
  grid-template: auto 1fr auto / 1fr;
}
</style>
