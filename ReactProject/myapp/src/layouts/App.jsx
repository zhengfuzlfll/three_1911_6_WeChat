import React from 'react';
// import logo from './logo.svg';
// import '@/App.css';
import './main.scss'
/* 引入组件 */
import Home from '@/views/home/index.jsx'
import Kind from '@/views/kind/index.jsx'
import Cart from '@/views/cart/index.jsx'
import User from '@/views/user/index.jsx'
import Not from '@/views/not/index.jsx'

/* 引入路由 */
import {Route,Switch, Redirect, NavLink} from 'react-router-dom';

function App() {
  return (
    <div className="container">
      {/* <div className="box">
        <header className="header"></header>
        <div className="content"></div>
      </div> */}
      {/* <Home></Home> */}
      <Switch>
        <Route path='/home' component={ Home }></Route>
        <Route path='/kind' component={ Kind }></Route>
        <Route path='/cart' component={ Cart }></Route>
        <Route path='/user' component={ User }></Route>
        {/* 重定向 精确匹配*/}
        <Redirect exact path='/' to='/home'></Redirect>
        {/* 404 */}
        <Route component={ Not }></Route>
      </Switch>
      <footer className="footer">
        {/* <!-- 底部导航 --> */}
        <ul>
          {/* <!-- router-link默认被渲染为a标签，使用tag标签生成需要的标签 --> */}
          {/* <li >
            <span className="iconfont icon-yemian-copy-copy-copy-copy"></span>
            <p>首页</p>
          </li>
          <li>
            <span className="iconfont icon-leimupinleifenleileibie"></span>
            <p>分类</p>
          </li>
          <li >
            <span className="iconfont icon-gouwuche"></span>
            <p>购物车</p>
          </li>
          <li >
            <span className="iconfont icon-wodedangxuan"></span>
            <p>我的</p>
          </li> */}
          <NavLink to='/home' activeStyle={ { color: '#f66' } }>
            <span className="iconfont icon-yemian-copy-copy-copy-copy"></span>
            <p>首页</p>
          </NavLink>
          <NavLink to='/kind' activeStyle={ { color: '#f66' } }>
            <span className="iconfont icon-leimupinleifenleileibie"></span>
            <p>分类</p>
          </NavLink>
          <NavLink  to='/cart' activeStyle={ { color: '#f66' } }>
            <span className="iconfont icon-gouwuche"></span>
            <p>购物车</p>
          </NavLink>
          <NavLink to='/user' activeStyle={ { color: '#f66' } }>
            <span className="iconfont icon-wodedangxuan"></span>
            <p>我的</p>
          </NavLink>
        </ul>
      </footer>
    </div>
  );
}

export default App;
