import React from 'react';
const Login = React.lazy(() => import("../components/Login/index"));
const Layout = React.lazy(() => import("../components/Layout/index"));
const Home = React.lazy(() => import("../components/Home/index"));
const NoPage = React.lazy(() => import("../components/NoPage/index"));
const Sys = () => <div>系统管理</div>;
let isAuth = () => {
  let token = localStorage.getItem("token");
  return token ? true : false;
};
const routes = [
    {
      path: "/home",
      name: "首页",
      component: Layout,
      redirect: "/home/index",
      isAuth: isAuth(),
      exact: false,
      children: [
        {
          path: "/index",
          component: Home,
          hidden: true,
        },
        {
          path: "/sys",
          component: Sys,
        },
      ],
    },
    {
      path: "/system",
      name: "系统管理",
      component: Layout,
      isAuth: isAuth(),
      exact: false,
      children: [
        {
          path: "/sys",
          component: Sys,
        },
      ],
    },
    {
      path: "/",
      component: Layout,
      redirect: "/home/index",
      isAuth: isAuth(),
      exact: true,
    },
    {
      path: "/login",
      component: Login,
      hidden: true,
      exact: true,
    },
    {
      path: "*",
      component: NoPage,
      hidden:true
    },
  ];

  export { default as NoPage } from '../components/NoPage/index'
  export default routes