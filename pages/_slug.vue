<template>
  <section class="section">
    <div class="content">
      <div class="columns">
        <div class="column"></div>
        <div class="column is-two-thirds">
          <h1 class="title is-2 is-spaced has-text-info has-text-centered">
            {{ post.title }}
          </h1>
          <div v-html="post.html" />
        </div>
        <div class="column"></div>
      </div>
    </div>
  </section>
</template>

<script>
import { getSinglePost } from '../api/posts'

export default {
  async asyncData({ params }) {
    // eslint-disable-next-line no-return-await
    const post = await getSinglePost(params.slug)
    return { post }
  },
  head() {
    return {
      title: this.post.meta_title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.post.meta_description
        }
      ]
    }
  }
}
</script>
