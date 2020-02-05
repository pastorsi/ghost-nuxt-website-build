<template>
  <header>
    <div class="brand-name">
      <nuxt-link to="/">Gather Mid Cotswold</nuxt-link>
    </div>
    <div
      @click="$store.dispatch('nav/toggleSidebar')"
      class="drawer-toggle"
      role="button"
    >
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
    </div>
    <div class="app-links">
      <app-links></app-links>
    </div>
  </header>
</template>

<script>
import AppLinks from '~/components/appLinks'

export default {
  components: { AppLinks }
}
</script>

<style scoped>
@import '~/assets/scss/main.scss';
header {
  display: grid;
  grid-template: 60px / auto 1fr;
  align-items: center;
  background-color: rgb(0, 151, 167);
}
.app-links {
  justify-self: end;
}
.brand-name {
  margin: 0 10px;
  font-size: 1.3rem;
}
.brand-name a {
  text-decoration: none;
  color: white;
}
.drawer-toggle .bar {
  width: 90%;
  height: 2px;
  background-color: white;
}
.drawer-toggle {
  display: flex;
  justify-self: end;
  flex-direction: column;
  justify-content: space-around;
  height: 50%;
  width: 35px;
  padding-right: 16px;
  cursor: pointer;
}
@media (max-width: 767px) {
  header {
    padding: 0 16px;
  }
  header nth-child {
    justify-self: end !important;
  }
  .app-links {
    display: none;
  }
}
@media (min-width: 768px) {
  header {
    padding: 0 64px;
  }
  .app-links {
    display: block;
  }
  .drawer-toggle {
    display: none;
  }
}
</style>
