import { createClient } from '~/plugins/contentful.js'
const client = createClient()

const getContentfulItems = (commit) => {
  return Promise.all([
    client.getEntries({
      content_type: 'pages',
      order: '-sys.createdAt'
    }),
    client.getEntries({
      content_type: 'link',
      order: '-sys.createdAt'
    })
  ]).then(([pages, links]) => {
    commit('setPages', pages.items)
    commit('setLinks', links.items)
  })
}

export const state = () => ({
  pages: [],
  links: []
})

// const sortByTitle = (a, b) => {
//   const textA = a.fields.title.toUpperCase()
//   const textB = b.fields.title.toUpperCase()
//   return (textA < textB) ? -1 : (textA > textB) ? 1 : 0
// }

export const mutations = {
  setPages (state, list) {
    state.pages = list
  },
  setLinks (state, list) {
    state.links = list
  }
}

export const actions = {
  async nuxtServerInit ({ commit }) {
    await getContentfulItems(commit)
  }
}

export const getters = {
  getPageBySlug: state => (slug) => {
    const page = state.pages.find(page => page.fields.pageSlug === slug)
    if (typeof page !== 'undefined') {
      return {
        title: page.fields.pageTitle,
        slug: page.fields.pageSlug,
        body: page.fields.body.content
      }
    } else {
      return false
    }
  },
  isPageBySlug: state => (slug) => {
    const page = state.pages.find(page => page.fields.pageSlug === slug)
    if (typeof page !== 'undefined') {
      return true
    } else {
      return false
    }
  }
}
