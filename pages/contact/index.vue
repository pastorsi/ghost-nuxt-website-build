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
            Your enquiry is welcome.<br /><br />First, refresh this page so the
            security check appears! (Hint: for smartphone swipe down, for laptop
            click browser's refresh or reload icon.)
          </p>
          <form
            id="contact_form"
            ref="form"
            @submit.prevent="sendEmail"
            method="post"
          >
            <div class="field">
              <label class="label">Name</label>
              <div class="control">
                <input
                  v-model="name"
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
                  v-model="email"
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
                  v-model="message"
                  class="textarea"
                  type="text"
                  name="message"
                  placeholder="Please write your message here"
                  required="required"
                  minlength="5"
                ></textarea>
              </div>
            </div>
            <div class="field">
              <input
                type="hidden"
                name="derive_fields"
                value="imgverify=g-recaptcha-response"
              />
            </div>
            <div :data-sitekey="site_key" class="g-recaptcha"></div>
            <button class="button is-primary" type="submit">
              Send
            </button>
          </form>
        </div>
        <div class="column"></div>
      </div>
    </div>
  </section>
</template>
<script>
import emailjs from 'emailjs-com'
const token = ''
export default {
  name: 'ContactUs',
  data() {
    return {
      site_key: process.env.VUE_APP_CAPTCHA_SITE_KEY,
      name: '',
      email: '',
      message: '',
      token
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
            alert('Successfully sent!')
            e.target.reset()
          },
          (error) => {
            // eslint-disable-next-line no-console
            console.log('FAILED...', error)
            alert('Sending failed or rejected')
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
