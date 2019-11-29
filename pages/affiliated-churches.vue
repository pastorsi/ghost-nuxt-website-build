<template>
  <section class="section">
    <div class="columns">
      <div class="column"></div>
      <div class="column is-two-thirds">
        <h1 class="title has-text-info">
          Affiliated Churches and Ministries
        </h1>
        <div class="container">
          <div v-for="(post, index) in posts" :key="index" class="card">
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="title is-4">{{ post.title }}</p>
                  <p class="subtitle is-6">
                    Author: {{ post.authors[0].name }}
                  </p>
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
      <div class="column"></div>
    </div>
  </section>
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
