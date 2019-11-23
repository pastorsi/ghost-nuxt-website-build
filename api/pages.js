import GhostContentAPI from '@tryghost/content-api'

const api = new GhostContentAPI({
  url: 'http://localhost:2368',
  key: '986fbe8bc3d3709620622038ad',
  version: 'v3'
})

export async function getPages() {
  // eslint-disable-next-line no-return-await
  return await api.pages
    .browse({
      include: 'tags.authors',
      limit: 'all'
    })
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.error(err)
    })
}
export async function getAuthor(authorSlug) {
  // eslint-disable-next-line no-return-await
  return await api.authors
    .read({
      slug: authorSlug
    })
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.error(err)
    })
}
