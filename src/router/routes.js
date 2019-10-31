import Navigation from '../layouts/Navigation'
import Login from '../pages/Login'
import Create from '../pages/Create'
import Manage from '../pages/Manage'
import Reports from '../pages/Reports'

const routes = [
  {
    path: '',
    component: Navigation,
    children: [
      {
        path: '/',
        component: Login
      },
      {
        path: 'create',
        component: Create
      },
      {
        path: 'manage',
        component: Manage
      },
      {
        path: 'reports',
        component: Reports
      }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
