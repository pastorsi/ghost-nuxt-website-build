<template>
  <div>
    <h1 class="title is-2 is-spaced has-text-info has-text-centered">
      {{ post.title }}
    </h1>
    <div v-html="post.html" />
  </div>
</template>

<script>
import { getSinglePost } from '../api/posts'

export default {
  async asyncData({ params }) {
    // eslint-disable-next-line no-return-await
    const post = await getSinglePost(params.slug)
    return { post }
  }
}
</script>
