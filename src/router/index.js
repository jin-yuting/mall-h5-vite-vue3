/*
 * @Copyright: 
 * @file name: File name
 * @Data: Do not edit
 * @LastEditors: jinyt
 * @LastData: 
 * @Describe: 
 */
/*
 * @Copyright: 
 * @file name: File name
 * @Data: Do not edit
 * @LastEditors: jinyt
 * @LastData: 
 * @Describe: 
 */
import { createRouter, createWebHashHistory } from "vue-router";
import { projectName } from '../../config';
import Home from '../views/home/index.vue'
import Login from '../views/login/index.vue'
import User from '../views/user/index.vue'
import UserOrder from '../views/user/order.vue'
import UserSetting from '../views/user/setting.vue'
import UserAddress from '../views/address/index.vue'
import addressEdit from '../views/address/edit.vue'
import Cart from '../views/cart/index.vue'
import Category from '../views/category/index.vue'
import ProductList from '../views/productList/index.vue'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
  },
  {
    name: 'user',
    path: '/user',
    component: User,
  },
  {
    name: 'order',
    path: '/user/order',
    component: UserOrder,
  },
  {
    name: 'setting',
    path: '/user/setting',
    component: UserSetting,
  },
  {
    name: 'address',
    path: '/user/address',
    component: UserAddress,
  },
  {
    name: 'cart',
    path: '/cart',
    component: Cart,
  },
  {
    name: 'category',
    path: '/category',
    component: Category,
  },
  {
    name: 'product-list',
    path: '/product-list',
    component: ProductList,
  },
  {
    path: '/address-edit',
    name: 'address-edit',
    component: addressEdit,
  }
]

const router = new createRouter({
  routes,
  history: createWebHashHistory(`/${projectName}/`),
})

export default router