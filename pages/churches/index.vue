<template>
  <section class="section">
    <div class="columns">
      <div class="column"></div>
      <div class="column is-two-thirds">
        <h1 class="title has-text-info">
          Participating Churches
        </h1>
        <p class="subtitle is-5">
          The churches in the list below all send representatives to our
          bi-monthly meetings.
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
                        <!--<p class="subtitle is-6">
                          Author: {{ post.authors[0].name }}
                        </p>-->
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
    const tag = 'church'
    const posts = await getPosts(tag)
    let i, j, k
    for (i = posts.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * i)
      k = posts[i]
      posts[i] = posts[j]
      posts[j] = k
    }
    return { posts }
  },
  head() {
    return {
      title: 'Churches',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'A list of MCEA churches'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/main.scss';
</style>
