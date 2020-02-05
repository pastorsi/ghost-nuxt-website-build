<template>
  <div>
    <section class="hero is-dark is-fullheight">
      <div class="hero-body">
        <div class="container has-text-left">
          <h1 class="title has-text-warning">{{ page.title }}</h1>
          <h1 v-html="page.html" class="subtitle">
            {{ page.html }}
          </h1>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { getPage } from '~/api/posts'

export default {
  layout: 'HeroPage',
  async asyncData() {
    const page = await getPage('introducing-mcea')
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

<style scoped>
.hero {
  background-image: url('https://source.unsplash.com/dGxOgeXAXm8');
  background-repeat: no-repeat;
  background-position: 50% 0%;
  background-size: cover;
}
.subtitle,
.title {
  background-color: rgba(37, 54, 39, 0.3);
}
</style>
