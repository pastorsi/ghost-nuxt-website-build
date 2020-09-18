import GhostContentAPI from '@tryghost/content-api'

const api = new GhostContentAPI({
  version: 'v3',
<<<<<<< HEAD:api/posts.js
  url: 'https://www.easy-publish.online',
=======
  url: 'http://mcea.herokuapp.com',
>>>>>>> parent of ab2e8e9... Followed KiritchouC’s tutorial to ready project using the Firebase CLI for deployment to Firebase.:src/api/posts.js
  key: process.env.VUE_APP_GHOST_KEY
})

export async function getPosts(tagName) {
  // eslint-disable-next-line no-return-await
  return await api.posts
    .browse({
      include: 'tags,authors',
      limit: 15,
      filter: 'tag:' + tagName
    })
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.error(err)
    })
}
export async function getSinglePost(postSlug) {
  // eslint-disable-next-line no-return-await
  return await api.posts
    .read({
      slug: postSlug
    })
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.error(err)
    })
}
export async function getPage(pageSlug) {
  // eslint-disable-next-line no-return-await
  return await api.pages
    .read({
      slug: pageSlug
    })
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.error(err)
    })
}
