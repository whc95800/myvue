import VueRouter from "vue-router";
import About from "@/pages/About";
import Home from "@/pages/Home";
import News from "@/pages/News";
import Message from "@/pages/Message";
import Detail from "@/pages/Detail";

const router = new VueRouter({
  mode:"history",
  routes:[
    {
      name:'about',
      path:'/about',
      component:About,
      meta:{title:'关于'}
    },
    {
      path:'/home',
      component:Home,
      meta:{title:'主页'},
      children:[
        {
          name:'news',
          path:'news',
          component:News,
          meta:{title:'新闻',isAuth:true},
          beforeEnter:(to, from, next)=>{
            if(to.meta.isAuth){
              if(localStorage.getItem('school')==='atguigu2') {
                next()
              }
              else {
                alert('学校名不对！')
              }
            }else {
              next()
            }
          }
        },
        {
          name:'message',
          path:'message',
          component:Message,
          meta:{title:'消息',isAuth:true},
          children:[
            {
              name:'detail',
              path:'detail',
              component:Detail,
              props($router){
                return{id:$router.query.id,title:$router.query.title}
              }
          }
          ]
        }
      ]
    },
  ]
})

router.beforeEach((to, from, next)=>{
  if(to.meta.isAuth){
    if(localStorage.getItem('school')==='atguigu') {
      next()
    } else {
      alert('学校名不对！')
    }
  }else {
    next()
  }
})

router.afterEach((to)=>{
    document.title = to.meta.title ||'硅谷系统'
})

export default router

