<template>
  <ul class="nav-list">
    <li class="nav-item"><nuxt-link to="/">Home</nuxt-link></li>
    <li class="nav-item">
      <nuxt-link to="/churches">Churches</nuxt-link>
    </li>
    <li class="nav-item">
      <nuxt-link to="/ministries">Ministries</nuxt-link>
    </li>
  </ul>
</template>

<style scoped>
.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-item {
  margin: 0 10px;
}

.sidenav .nav-item {
  border-top: 1pt solid #ffffff;
  padding-top: 3px;
}

.nav-item a {
  text-decoration: none;
  color: #fefefe;
}

.nav-item a:hover,
.nav-item a:active {
  color: #b4b4b4;
}

@media (max-width: 767px) {
  .nav-list {
    display: block;
  }
  .nav-item {
    margin-top: 16px;
    margin-bottom: 16px;
  }
}

@media (min-width: 768px) {
  .nav-list {
    display: flex;
  }
}
</style>
