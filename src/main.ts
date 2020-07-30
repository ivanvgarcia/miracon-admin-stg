import Vue from 'vue';
import {
  Layout,
  Menu,
  Button,
  Carousel,
  Icon,
  Row,
  Col,
  Card,
  // Input,
  // Radio,
  // Avatar,
  // Table,
  // Tag,
  // Drawer,
  // notification,
  // Progress,
  message,
} from 'ant-design-vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

Vue.use(Button);
Vue.use(Layout);
Vue.use(Menu);
Vue.use(Carousel);
Vue.use(Icon);
Vue.use(Row);
Vue.use(Col);
Vue.use(Card);

Vue.prototype.$message = message;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
