<template>
  <section class="section">
    <div class="columns">
      <div class="column"></div>
      <div class="column is-two-thirds">
        <h1 class="title has-text-info">
          Affiliated Churches
        </h1>
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
                        <figure class="image is-128x128">
                          <img :src="post.feature_image" class="is-rounded" />
                        </figure>
                      </div>
                    </div>
                    <div class="content">
                      <p class="title is-4">{{ post.title }}</p>
                      <p class="is-medium">{{ post.excerpt }}</p>
                      <button class="button is-info">More info</button>
                      <br />
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
    return { posts }
  },
  head() {
    return {
      title: 'Affiliated churches',
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

<style></style>
