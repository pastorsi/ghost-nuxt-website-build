/* eslint-disable no-console */
<template>
  <section class="section">
    <div class="content">
      <div class="columns">
        <div class="column"></div>
        <div class="column is-two-thirds">
          <h1 class="title has-text-info">
            Contact Us
          </h1>
          <p class="subtitle is-5">
            Once you've submitted your message the MCEA secretary will aim to
            get back you within 72 hours.
          </p>
          <form @submit.prevent="sendEmail">
            <div class="field">
              <label class="label">Name</label>
              <div class="control">
                <input
                  class="input"
                  type="text"
                  name="name"
                  placeholder="Your name"
                />
              </div>
            </div>
            <div class="field">
              <label class="label">Email</label>
              <div class="control">
                <input
                  class="input"
                  type="email"
                  name="email"
                  placeholder="e.g. alexsmith@gmail.com"
                />
              </div>
            </div>
            <div class="field">
              <label class="label">Message</label>
              <div class="control">
                <textarea
                  class="textarea"
                  name="message"
                  placeholder="Your message"
                ></textarea>
              </div>
            </div>
            <div class="control">
              <recaptcha />
            </div>
            <div class="control">
              <button class="button is-primary" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div class="column"></div>
      </div>
    </div>
  </section>
</template>
<script>
import emailjs from 'emailjs-com'

export default {
  name: 'ContactUs',
  data() {
    return {
      name: '',
      email: '',
      message: ''
    }
  },
  methods: {
    sendEmail(e) {
      try {
        emailjs.sendForm(
          'Service_bt8lbbb',
          'mcea_contact_form',
          e.target,
          'user_ddB1kBYjUr7bhz87JDRm5',
          {
            name: this.name,
            email: this.email,
            message: this.message
          }
        )
        // eslint-disable-next-line no-console
        console.log('it works!!!')
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log({ error })
      }
      // Reset form field
      this.name = ''
      this.email = ''
      this.message = ''
    }
  },
  head() {
    return {
      title: 'Contact',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Contact form for enquiries to MCEA'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~/assets/scss/main.scss';
</style>
