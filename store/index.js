import Vuex from 'vuex'

const createStore = () => {
    return new Vuex.Store({
        state:{
            storage_url: process.env.STORAGE_URL,
        }
    })
}

export default createStore