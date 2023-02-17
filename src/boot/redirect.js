export default ({ router, redirect }) => {
  router.beforeEach((to, from, next) => {
    if (to.path === '/app') {
      redirect({ path: '/app/dashboard' })
      // next()
    } else {
      next()
    }
  })
}
