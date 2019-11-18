<template>
  <div class="container">
    <div>
      <h1 class="title">
        Affiliated Churches and Ministries
      </h1>
      <h2 class="subtitle">
        These are mostly in the Cheltenham area
      </h2>
      <ul>
        <li v-for="post in posts" v-bind:key="post">
          <nuxt-link :to="{ path: post.slug }">{{ post.title }}</nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getPosts } from '../api/posts'

export default {
  async asyncData() {
    const posts = await getPosts()
    return { posts }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
