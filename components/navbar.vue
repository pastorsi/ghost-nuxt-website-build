<template>
  <div id="my-app">
    <nav
      class="navbar is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item" href="/">
            <img src="http://bulma.io/images/bulma-logo.png" alt="Logo" />
          </a>
          <span
            role="button"
            class="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
          >
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navMenu" class="navbar-menu">
          <div class="navbar-end">
            <a class="navbar-item">
              <nuxt-link to="/">Home</nuxt-link>
            </a>
            <a class="navbar-item">
              <nuxt-link to="/affiliated-churches">Affiliates</nuxt-link>
            </a>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script></script>

<style scoped>
.navbar-item {
  color: #4a4a4a !important;
}
</style>
