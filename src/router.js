/* eslint-disable import/extensions */
import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import HomeContent from '@/components/HomeInterface/HomeContent.vue';
import auth from './app/auth';
import About from './views/About.vue';
import Help from './components/HomeInterface/Help.vue';
import Courses from './components/HomeInterface/Courses.vue';
import searchBar from './components/HomeInterface/searchBar.vue';
import LogoutSuccess from '@/components/LogoutSuccess.vue';
import UserInfoStore from './app/user-info-store';
import UserInfoApi from './app/user-info-api';
import ErrorComponent from '@/components/Error';

Vue.use(Router);

function requireAuth(to, from, next) {
  if (!auth.auth.isUserSignedIn()) {
    UserInfoStore.setLoggedIn(false);
    next({
      path: '/login',
      query: { redirect: to.fullPath },
    });
  } else {
    UserInfoApi.getUserInfo().then((response) => {
      UserInfoStore.setLoggedIn(false);
      UserInfoStore.setCognitoInfo(response);
      next();
    });
  }
}

export default new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      redirect: { name: 'HomeContent' },

      children: [
        {
          path: '/', name: 'HomeContent', component: HomeContent,
        },
        {
          path: '/courses', name: 'Courses', component: Courses, beforeEnter: requireAuth,
        },
        {
          path: '/searchBar', name: 'searchBar', component: searchBar, beforeEnter: requireAuth,
        },
        {
          path: '/about', name: 'About', component: About, beforeEnter: requireAuth,
        },
        {
          path: '/help', name: 'Help', component: Help, beforeEnter: requireAuth,
        },
      ],
      beforeEnter: requireAuth,
    },
    {
      path: '/login',
      beforeEnter(to, from, next) {
        auth.auth.getSession();
      },
    },
    {
      path: '/login/oauth2/code/cognito',
      beforeEnter(to, from, next) {
        const currUrl = window.location.href;

        // console.log(currUrl);
        auth.auth.parseCognitoWebResponse(currUrl);
        next();
      },
    },
    {
      path: '/logout',
      component: LogoutSuccess,
      beforeEnter(to, from, next) {
        auth.logout();
        next();
      },

    },
    {
      path: '/error',
      component: ErrorComponent,
    },
  ],

});
