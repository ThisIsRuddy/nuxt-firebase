import Vue from 'vue';
import Vuex from 'vuex';
import firebase from 'firebase';
import VueFire from 'vuefire';

 
Vue.use(VueFire);
Vue.use(Vuex);

let app;

if (firebase.apps.length > 0)
  app = firebase.app();
else
  app = firebase.initializeApp({
    apiKey: "AIzaSyBRdKK4mC-oYtSZj3g3UraiYjv4h3_E_yc",
    authDomain: "books-2af20.firebaseapp.com",
    databaseURL: "https://books-2af20.firebaseio.com",
    storageBucket: "books-2af20.appspot.com",
    messagingSenderId: "129775003419"
  });


const store = new Vuex.Store({
  state: {
    counter: 0,
    db: app.database(),
  },

  mutations: {
    increment (state) {
      state.counter++
    }
  }

});

export default store;