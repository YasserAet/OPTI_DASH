import { createRouter, createWebHistory } from 'vue-router'

import SigninView from '@/views/Authentication/SigninView.vue'
import SignupView from '@/views/Authentication/SignupView.vue'
import CalendarView from '@/views/CalendarView.vue'
import BasicChartView from '@/views/Charts/BasicChartView.vue'
import OptiDash from '@/views/Dashboard/OptiDash.vue'
import FormElementsView from '@/views/Forms/FormElementsView.vue'
import FormLayoutView from '@/views/Forms/FormLayoutView.vue'
import SettingsView from '@/views/Pages/SettingsView.vue'
import ProfileView from '@/views/ProfileView.vue'
import TablesView from '@/views/TablesView.vue'
import AlertsView from '@/views/UiElements/AlertsView.vue'
import ButtonsView from '@/views/UiElements/ButtonsView.vue'
import parkingForm from '@/views/Parking/parkingForm.vue'
import * as jwt_decode from 'jwt-decode';

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: OptiDash,
    meta: {
      title: 'eCommerce Dashboard'
    }
  },
  {
    path: '/calendar',
    name: 'calendar',
    component: CalendarView,
    meta: {
      title: 'Calendar'
    }
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileView,
    meta: {
      title: 'Profile'
    }
  },
  {
    path: '/forms/form-elements',
    name: 'formElements',
    component: FormElementsView,
    meta: {
      title: 'Form Elements'
    }
  },
  {
    path: '/forms/form-layout',
    name: 'formLayout',
    component: FormLayoutView,
    meta: {
      title: 'Form Layout'
    }
  },
  {
    path: '/history',
    name: 'history',
    component: TablesView,
    meta: {
      title: 'History'
    }
  },
  {
    path: '/pages/settings',
    name: 'settings',
    component: SettingsView,
    meta: {
      title: 'Settings'
    }
  },
  {
    path: '/charts/basic-chart',
    name: 'basicChart',
    component: BasicChartView,
    meta: {
      title: 'Basic Chart'
    }
  },
  {
    path: '/ui-elements/alerts',
    name: 'alerts',
    component: AlertsView,
    meta: {
      title: 'Alerts'
    }
  },
  {
    path: '/ui-elements/buttons',
    name: 'buttons',
    component: ButtonsView,
    meta: {
      title: 'Buttons'
    }
  },
  {
    path: '/auth/signin',
    name: 'signin',
    component: SigninView,
    meta: {
      title: 'Signin',
      public: true,
    }
  },
  {
    path: '/auth/signup',
    name: 'signup',
    component: SignupView,
    meta: {
      title: 'Signup',
      public: true,
    }
  },
  {
    path:'/parking',
    name: 'parking',
    component: parkingForm,
    meta: {
      title: 'Parking'
    }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { left: 0, top: 0 }
  }
})

router.beforeEach(async (to, from, next) => {
  const isPublic = to.matched.some(record => record.meta.public);
  const token = localStorage.getItem('token');

  if (!isPublic && token) {
    try {
      const { exp } = jwt_decode.jwtDecode(token); 
      console.log(exp);
      if (exp ?? 0 < new Date().getTime() / 1000) {
        // Token has expired, refresh it
        const response = await fetch('http://127.0.0.1:3000/refresh_token', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (response.ok) {
          const { token: newToken } = await response.json();
          localStorage.setItem('token', newToken);
        } else {
          // Refreshing the token failed, redirect to login
          return next({ path:'/auth/signin', query: {redirect: to.fullPath} });
        }
      }
    } catch (e) {
      // Decoding the token failed, redirect to login
      return next({ path:'/auth/signin', query: {redirect: to.fullPath} });
    }
  } else if (!isPublic && !token) {
    // No token, redirect to login
    return next({ path:'/auth/signin', query: {redirect: to.fullPath} });
  }

  document.title = `Vue.js ${to.meta.title} | Opti-Park`
  next();
});

export default router
