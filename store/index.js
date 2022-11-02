import Vue from "vue";
import Vuex from 'vuex';
import en from "../translations/en.json"
import es from "../translations/es.json"
import fr from "../translations/fr.json"

Vue.use(Vuex);
const langs = [en, es, fr];

export const state = () => ({
  lang: "en",
  messages: en
})

export const getters = {
  getLang(state) {
    return state.lang
  },
  getMessages(state) {
    return state.messages;
  }
}

export const mutations = {
  changeLanguage(state, lang) {
    state.lang = lang
    langs.forEach(l => {
      if (l.Code === state.lang) {
        state.messages = l;
      }
    })
  }
}

export const strict = false

