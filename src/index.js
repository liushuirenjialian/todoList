// 加载react组件
import React from 'react';
// 把组件挂载到dom节点
import ReactDOM from 'react-dom';
import './index.css';
// App组件 ，大写字母开头都是组件
import TodoList from './TodoList';
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <TodoList />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
