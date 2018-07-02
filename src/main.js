/* eslint-disable no-unused-vars */
// Import Vue
import Vue from 'vue';

import moment from 'moment'
// Import F7
import Framework7 from 'framework7/dist/framework7.esm.bundle.js';

// Import F7 Vue Plugin
import Framework7Vue from 'framework7-vue/dist/framework7-vue.esm.bundle.js';

// Import F7 Styles
import Framework7Styles from 'framework7/dist/css/framework7.css';
import Framework7IOS from 'framework7/dist/css/framework7.ios.css';
import Framework7MD from 'framework7/dist/css/framework7.md.css';

// Import Icons and App Custom Styles
import IconsStyles from './css/icons.css';
import AppStyles from './css/app.css';

// Import Routes
import Routes from './routes.js';

// Import App Component
import App from './app';
import axios from 'axios'
// *********** Changed by NAMJU 
axios.defaults.baseUrl = 'http://localhost:8000/api'

// Set up some useful globals
window.isMaterial = !Framework7.device.ios;
window.isiOS = Framework7.device.ios;

// Init F7 Vue Plugin
Vue.use(Framework7Vue, Framework7);
// *********** Changed by NAMJU 
Vue.prototype.$http = axios;
// Init App

Vue.filter('formatDate', function(value) {
  if (value) {
    return moment(String(value)).format('YYYY-MM-DDThh:mm:00')
  }
})

const baseApp = new Vue({
  el: '#app',
  template: '<app/>',
  // Init Framework7 by passing parameters here
  framework7: {
    id: 'io.framework7.PSTek', // App bundle ID
    name: 'Framework7', // App name
    theme: 'auto', // Automatic theme detection
    pushStateNoAnimation: true,
    panel: {
      leftBreakpoint: 960
    },
    // App routes
    routes: Routes
  },
  // Register App Component
  components: {
    app: App
  }
});
