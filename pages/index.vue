<template>
  <section class="section">
    <div class="content">
      <h1 class="title">{{ page.title }}</h1>
      <div v-html="page.html">{{ page.html }}</div>
    </div>
  </section>
</template>

<script>
import { getPage } from '~/api/posts'

export default {
  async asyncData() {
    const page = await getPage('home-page')
    return { page }
  },
  head() {
    return {
      title: this.page.meta_title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.page.meta_description
        }
      ]
    }
  }
}
</script>

<style></style>
