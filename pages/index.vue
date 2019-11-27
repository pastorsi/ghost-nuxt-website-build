<template>
  <section class="section">
    <div class="content">
      <div class="columns">
        <div class="column"></div>
        <div class="column is-two-thirds">
          <h1 class="title has-text-info">{{ page.title }}</h1>
          <div v-html="page.html">{{ page.html }}</div>
        </div>
        <div class="column"></div>
      </div>
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
