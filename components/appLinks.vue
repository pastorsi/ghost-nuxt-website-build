<template>
  <ul class="nav-list">
    <li class="nav-item">
      <nuxt-link to="/">
        <span class="icon is-small has-text-warning menuhovereffect">
          <font-awesome-icon :icon="['fas', 'home']" style="font-size: 1em" />
        </span>
        Home
      </nuxt-link>
    </li>
    <li class="nav-item">
      <nuxt-link to="/about">
        <span class="icon is-small has-text-warning">
          <font-awesome-icon
            :icon="['far', 'address-card']"
            style="font-size: 1em"
          />
        </span>
        About Us
      </nuxt-link>
    </li>
    <li class="nav-item">
      <nuxt-link to="/gatherings">
        <span class="icon is-small has-text-warning">
          <font-awesome-icon :icon="['fab', 'meetup']" style="font-size: 1em" />
        </span>
        Meet Up
      </nuxt-link>
    </li>
    <li class="nav-item">
      <nuxt-link to="/churches">
        <span class="icon is-small has-text-warning">
          <font-awesome-icon :icon="['fas', 'church']" style="font-size: 1em" />
        </span>
        Churches
      </nuxt-link>
    </li>
    <li class="nav-item">
      <nuxt-link to="/ministries">
        <span class="icon is-small has-text-warning">
          <font-awesome-icon
            :icon="['fas', 'hands-helping']"
            style="font-size: 1em"
          />
        </span>
        Ministries
      </nuxt-link>
    </li>
    <li class="nav-item">
      <nuxt-link to="/events">
        <span class="icon is-small has-text-warning">
          <font-awesome-icon
            :icon="['far', 'calendar-alt']"
            style="font-size: 1em"
          />
        </span>
        Events
      </nuxt-link>
    </li>
    <li class="nav-item">
      <nuxt-link to="/news">
        <span class="icon is-small has-text-warning">
          <font-awesome-icon
            :icon="['far', 'newspaper']"
            style="font-size: 1em"
          />
        </span>
        News
      </nuxt-link>
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
  color: #08147c;
  -webkit-transition: color 750ms;
  -moz-transition: color 750ms;
  -ms-transition: color 750ms;
  -o-transition: color 750ms;
  transition: color 750ms;
}

.has-text-warning:hover {
  color: #08147c !important;
  -webkit-transition: color 750ms;
  -moz-transition: color 750ms;
  -ms-transition: color 750ms;
  -o-transition: color 750ms;
  transition: color 750ms;
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
