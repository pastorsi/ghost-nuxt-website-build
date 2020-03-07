<template>
  <section class="section">
    <div class="columns">
      <div class="column"></div>
      <div class="column is-two-thirds">
        <h1 class="title has-text-info">
          Contributors to MCEA website
        </h1>
        <div class="container">
          <div class="columns is-multiline">
            <div class="card">
              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <p class="title is-4">Simon Measures</p>
                    <p class="subtitle is-6">
                      Author's biography
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="column"></div>
    </div>
  </section>
</template>

<script>
export default {
  head() {
    return {
      title: 'MCEA website contributors',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'A list of MCEA contributors to the website'
        }
      ]
    }
  }
}
</script>

<style></style>
