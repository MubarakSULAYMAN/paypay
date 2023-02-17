
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
    ]
  },
  {
    path: '/app',
    component: () => import('layouts/AppLayout.vue'),
    children: [
      { path: 'dashboard', component: () => import('pages/Dashboard.vue') },
      { path: 'invoices', component: () => import('pages/Invoices.vue') },
      { path: 'wallet', component: () => import('pages/Wallet.vue') },
      { path: 'activity', component: () => import('pages/Activity.vue') },
      { path: 'help', component: () => import('pages/Help.vue') },
      // { path: '', component: () => import('pages/Index.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
