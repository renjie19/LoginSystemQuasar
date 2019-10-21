import Navigation from '../layouts/Navigation'
import Login from '../layouts/Login'
import Create from '../layouts/Create'
import Manage from '../layouts/Manage'
import Reports from '../layouts/Reports'

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
