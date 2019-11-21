<template>
  <nav class="navbar is-light" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <img
          src="https://bulma.io/images/bulma-logo.png"
          alt="Bulma: Free, CSS framework"
          width="112"
          height="28"
        />
      </a>

      <a
        @click="isOpen = !isOpen"
        v-bind:class="{ 'is-active': isOpen }"
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div v-bind:class="{ 'is-active': isOpen }" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item is-tab">
          <nuxt-link to="/">Home</nuxt-link>
        </a>
        <a class="navbar-item is-tab">
          <nuxt-link to="/affiliated-churches">Affiliates</nuxt-link>
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  _data() {
    return {
      isOpen: false
    }
  },
  get data() {
    return this._data
  },
  set data(value) {
    this._data = value
  }
}
</script>
