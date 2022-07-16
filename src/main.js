import { createApp } from 'vue'
import App from './App.vue'
import SinglePost from './components/SinglePost.vue';
import BaseButton from './layout/base/BaseButton';
import BaseModal from './layout/base/BaseModal';
import ListGroup from './layout/base/ListGroup'

const app = createApp(App);
app.component('SinglePost',SinglePost);
app.component('base-button',BaseButton);
app.component('base-modal',BaseModal);
app.component('list-group',ListGroup);
app.mount('#app');
