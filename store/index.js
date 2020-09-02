// import Vuex from 'vuex'

// const createStore = () => {
//     return new Vuex.Store({
//         state:{
//             storage_url: process.env.STORAGE_URL,
//         }
//     })
// }

// export default createStore
export const state = () => ({
    storage_url: process.env.STORAGE_URL,
    counter: 0,
    blogs: [],
    blog_bekasi: [],
})

export const mutations = {
    increment(state) {
        state.counter++
    },
    addBlogs (state, data) {
        state.blogs = data;
    },
    addBlogBekasi (state, data) {
        state.blog_bekasi = data
    }
}

export const actions = {
    addBlogs ({ commit }, data) {
        commit(data)
    }
}

export const getters = {
    getBlogBySlug: (state) => (slug) => {
        return state.blogs.find (blog =>
            blog.heading.toLowerCase().replace(/\s/g, '-').replace(/[,]/g, '') === slug
        )
    }
}
