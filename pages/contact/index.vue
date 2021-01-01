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
            Sorry this form is not yet working. Sorry this form is not yet
            working.
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
                  required="required"
                  pattern="^[a-zA-Z ]+$"
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
                  required="required"
                />
              </div>
            </div>
            <div class="field">
              <label class="label">Message</label>
              <div class="control">
                <textarea
                  class="textarea"
                  type="text"
                  name="message"
                  placeholder="Please write your message here"
                  required="required"
                  minlength="5"
                ></textarea>
              </div>
            </div>
            <div class="control">
              <recaptcha />
            </div>
            <div class="control">
              <input class="button is-primary" type="submit" value="Send" />
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
    sendEmail: (e) => {
      emailjs
        .sendForm(
          'service_bt8lbbb',
          'mcea_contact_form',
          e.target,
          'user_ddB1kBYjUr7bhz87JDRm5'
        )
        .then(
          (result) => {
            // eslint-disable-next-line no-console
            console.log('SUCCESS!', result.status, result.text)
          },
          (error) => {
            // eslint-disable-next-line no-console
            console.log('FAILED...', error)
          }
        )
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
