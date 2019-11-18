import GhostContentAPI from '@tryghost/content-api'

const api = new GhostContentAPI({
  url: 'http://localhost:2368',
  key: '986fbe8bc3d3709620622038ad',
  version: 'v3'
})

export async function getPosts() {
  // eslint-disable-next-line no-return-await
  return await api.posts
    .browse({
      limit: 'all'
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
