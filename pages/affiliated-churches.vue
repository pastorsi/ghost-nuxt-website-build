<template>
  <div class="container">
    <div>
      <h1 class="title">
        Affiliated Churches and Ministries
      </h1>
      <h2 class="subtitle">
        These are mostly in the Cheltenham area
      </h2>
      <div v-for="(post, index) in posts" :key="index" class="card">
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-4">{{ post.title }}</p>
              <p class="subtitle is-6">Author: {{ post.authors[0].name }}</p>
            </div>
          </div>
          <div class="content">
            {{ post.excerpt }}
            <br />
            <time>Date posted: {{ post.updated_at }}</time>
            <br />
            <nuxt-link :to="{ path: post.slug }">View this post!</nuxt-link>
          </div>
        </div>
      </div>
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

<style></style>
