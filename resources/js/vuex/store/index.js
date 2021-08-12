import Vue from 'vue'
import Vuex from 'vuex'
import profile from "./modules/profile"
import admin from "./modules/admin/admin"
Vue.use(Vuex)
export const store = new Vuex.Store({
    modules: {
        profile,
        admin
    },
    state: () => ({ 
        
    }),
    getters: {
    },
    mutations: {
        
    },
})
