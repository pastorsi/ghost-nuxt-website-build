<template>
  <section class="hero is-dark is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title has-text-warning">{{ page.title }}</h1>
        <div v-html="page.html" class="subtitle">
          {{ page.html }}
        </div>
      </div>
    </div>
  </section>
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
@import url(https://fonts.googleapis.com/css?family=Montserrat|Montserrat+Alternates&display=swap);
.hero-body {
  font-family: 'Montserrat', Verdana, Tahoma, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.hero {
  background-image: url('https://source.unsplash.com/dGxOgeXAXm8');
  background-repeat: no-repeat;
  background-position: 50% 0%;
  background-size: cover;
}
</style>
