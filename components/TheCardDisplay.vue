<template>
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
                {{ post.excerpt }}
                <br />
                <time>Date posted: {{ post.updated_at }}</time>
                <br />
              </div>
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['theCardDisplay']
}
</script>
