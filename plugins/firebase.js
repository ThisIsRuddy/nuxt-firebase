import firebase from 'firebase';
import Vue from 'vue';
import VueFire from 'vuefire';

Vue.use(VueFire);

let app;

if (firebase.apps.length == 0)
    app = firebase.initializeApp({
        apiKey: "AIzaSyBRdKK4mC-oYtSZj3g3UraiYjv4h3_E_yc",
        authDomain: "books-2af20.firebaseapp.com",
        databaseURL: "https://books-2af20.firebaseio.com",
        storageBucket: "books-2af20.appspot.com",
        messagingSenderId: "129775003419"
    });
else
    app = firebase.app();

// HOW TO MAKE db is public for all components. ?
Vue.db = app.database();

    //Vue.use(app.database());

