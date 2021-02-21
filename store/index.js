import Vue from 'vue'
import Vuex from 'vuex'
import {fetchCatImageApi} from '../api/api';
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    image: []
  },
  getters: {
      image: state => {
          return state.image
      }
  },
  mutations: {
    loadImage(state, image) {
        state.image = image.data[0];
    }  
  },
  actions: {
    async loadCatImage({commit}) {
        commit('loadImage', await fetchCatImageApi())
    }  
    }
});

export function useStore() {
    return store;
}
  