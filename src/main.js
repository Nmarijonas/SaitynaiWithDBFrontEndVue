import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'bootstrap';
import VeeValidate from 'vee-validate';
import VueSweetalert2 from "vue-sweetalert2";
import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
import {
    faHome,
    faUser,
    faUserPlus,
    faSignInAlt,
    faSignOutAlt
} from '@fortawesome/free-solid-svg-icons';

library.add(faHome, faUser, faUserPlus, faSignInAlt, faSignOutAlt);

Vue.config.productionTip = false;
Vue.config.ignoredElements = [/^ion-/]

Vue.use(VeeValidate);
Vue.use(VueSweetalert2);
Vue.component('font-awesome-icon', FontAwesomeIcon);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');

