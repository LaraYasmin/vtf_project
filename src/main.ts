import { createApp } from 'vue'
import './style.css'
import 'vuetify/styles'
import { createRouter, createWebHistory } from 'vue-router';
import App from './pages/App.vue';
import PostsComponent from './components/PostsComponent.vue';
import DetailsComponent from './components/DetailsComponent.vue';

const routes = [
  { path: '/', component: PostsComponent},
  { path: '/posts/:id', name: 'post-details', component: DetailsComponent},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount('#app');