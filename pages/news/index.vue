<template>
  <section class="section">
    <div class="columns">
      <div class="column"></div>
      <div class="column is-two-thirds">
        <h1 class="title has-text-info">
          Local news
        </h1>
        <p class="subtitle is-5">
          This is the local news (when available) contributed by churches and
          ministries who send representatives to our gatherings.
        </p>
        <div class="container">
          <div class="columns is-multiline">
            <div
              v-for="(post, index) in posts"
              :key="index"
              class="column is-one-thirds"
            >
              <nuxt-link :to="{ path: post.slug }">
                <div class="card">
                  <div class="card-content">
                    <div class="media">
                      <div class="media-left">
                        <figure class="image is-96x96">
                          <img :src="post.feature_image" :alt="post.title" />
                        </figure>
                      </div>
                      <div class="media-content">
                        <p class="title is-4">{{ post.title }}</p>
                        <p class="subtitle is-6">
                          Author: {{ post.authors[0].name }}
                        </p>
                      </div>
                    </div>
                    <div class="content">
                      <p class="is-medium">{{ post.custom_excerpt }}</p>
                      <button class="button is-info">Read more</button>
                    </div>
                  </div>
                </div>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
      <div class="column"></div>
    </div>
  </section>
</template>

<script>
import { getPosts } from '@/api/posts'

export default {
  async asyncData() {
    const tag = 'news'
    const posts = await getPosts(tag)
    return { posts }
  },
  head() {
    return {
      title: 'Local news',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'News list'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/main.scss';
</style>
