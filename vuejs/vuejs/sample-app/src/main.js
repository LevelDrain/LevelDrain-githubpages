import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import firebase from 'firebase'

Vue.config.productionTip = false

// Your web app's Firebase configuration
const config = {
  apiKey: "AIzaSyCTI6AgZ2Ym2-UErF7zVy68uMEU01HdE9c",
  authDomain: "my-address-pj-9faef.firebaseapp.com",
  databaseURL: "https://my-address-pj-9faef.firebaseio.com",
  projectId: "my-address-pj-9faef",
  storageBucket: "my-address-pj-9faef.appspot.com",
  messagingSenderId: "210458423874",
  appId: "1:210458423874:web:c116faf90fb791c2bb33db",
  measurementId: "G-33E5NYSY4F"
};
// Initialize Firebase
firebase.initializeApp(config);
firebase.analytics();

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
