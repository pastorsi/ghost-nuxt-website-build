<template>
  <footer>
    <div class="content">
      <div class="columns">
        <div class="column">
          <div class="foot-links">
            <h6 class="is-size-6">Additional links:</h6>
            <foot-links></foot-links>
          </div>
        </div>
        <div class="column">
          <p>Developed and built by Simon Measures (2020)</p>
          <a href="https://ko-fi.com/Z8Z73RHNI" target="_blank"
            ><img
              src="https://cdn.ko-fi.com/cdn/kofi2.png?v=2"
              alt="Buy Me a Coffee at ko-fi.com"
              class="mybutton"
          /></a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import FootLinks from '~/components/footLinks'

export default {
  components: { FootLinks }
}
</script>

<style scoped>
@import '~/assets/scss/main.scss';
footer {
  text-align: left;
  padding: 2% 4%;
  background-color: rgb(0, 151, 167);
}
.foot-links {
  justify-self: end;
}
.mybutton {
  height: 36px;
}
@media (min-width: 768px) {
  .foot-links {
    display: block;
  }
}
</style>
