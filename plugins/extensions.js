import Vue from 'vue';

Vue.isServer = process.SERVER_BUILD;
Vue.isClient = process.BROWSER_BUILD;