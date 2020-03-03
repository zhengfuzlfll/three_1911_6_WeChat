import React from 'react';
import ReactDOM from 'react-dom';
import '@/index.css';
import App from '@/layouts/App.jsx';//++++全局的布局文件
import * as serviceWorker from './serviceWorker';
/*引入路由 */
import {HashRouter as Router, Route, Switch}  from  'react-router-dom';

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
    <Router> {/* Router 下只能有一个子元素 */}
        <Switch>
            <Route path='/' component={App}></Route>
        </Switch>
    </Router>,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
