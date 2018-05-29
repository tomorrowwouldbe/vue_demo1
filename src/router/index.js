import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Page1 from '@/pages/page1'
import Page2 from '@/pages/page2'
import Page3 from '@/pages/page3'
import Page4 from '@/pages/page4'

import Section1 from '@/section/section1'
import Section2 from '@/section/section2'
import Section3 from '@/section/section3'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      redirect:'/',
      children:[
      	{
      		path:'/',
      		name:'page1',
      		component:Page1
      	},
      	{
      		path:'/page2',
      		name:'page2',
      		component:Page2,
      		children:[
      			{
      				path:'/page2',
      				name:'section1',
      				component:Section1
      			},
      			{
      				path:'/page2/section2',
      				name:'section2',
      				component:Section2
      			},
      			{
      				path:'/page2/section3',
      				name:'section3',
      				component:Section3
      			}
      		]
      	},
      	{
      		path:'/page3',
      		name:'page3',
      		component:Page3
      	},
      	{
      		path:'/page4',
      		name:'page4',
      		component:Page4
      	}
      ]
    }
  ]
})
