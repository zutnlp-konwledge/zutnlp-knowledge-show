import Vue from 'vue'
import Router from 'vue-router'
import appview from '../components/all/FirstPage.vue'
import Elast from '../components/ElasticSearch/ESList.vue'
import ldaDigest from '../components/lda/LDADigest.vue'
import ldaSubjects from '../components/lda/LDASubjects.vue'
import svmDomain from '../components/svm/SVMDomain.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'appview',
      component: appview,
      children:[{
        path: 'Elast',
        name: Elast,
        component: Elast

      },{
        path:'svmDomain',
        name:'svmDomain',
        component: svmDomain
      },{
        path:'ldaSubjects',
        name:'ldaSubjects',
        component: ldaSubjects
      },{
        path:'ldaDigest',
        name:'ldaDigest',
        component: ldaDigest
      },]
    }

  ]
})
