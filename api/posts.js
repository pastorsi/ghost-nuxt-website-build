import GhostContentAPI from '@tryghost/content-api'

const api = new GhostContentAPI({
  version: 'v3',
  url: 'http://localhost:2368',
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
