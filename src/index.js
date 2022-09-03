import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import App from './components/app';

// 定义reducer
const f1 = (state = 0, action) => {
  switch(action.type) {
    case 'add':
      return state + action.value;
    case 'sub':
      return state - action.value;
    default:
      return state;
  }
};


const f2 = (state = "zyc", action) => {
  switch(action.type) {
    case 'concat':
      return state + action.character;
    default:
      return state;
  }
};

// const f3 = (state = {}, action) => {
//   return {
//     // 这两行的第一个参数不是很理解
//     /* 
//       可以这样理解，这里的return是返回state值，所以说f2是f1那里return的state的值，
//       因此f1(state.f2, action)中第一个参数就是f1返回的state，会存到f3种state的f2里
//     */
//     f2: f1(state.f2, action),   
//     f4: f2(state.f4, action),
//   }
// }
// 另一种写法，使用combineReducers，等同于上一种写法，参数名不重要，随便取的
const f3 = combineReducers({
  number:f1,
  string:f2,
}) 




// 将定义的f1转换为树结构
const store = configureStore({
  reducer: f3
});
// // 每次触发dispatch的时候都会执行这个subscribe函数
// store.subscribe(() => {console.log(store.getState())});
// // 传递action对象，其中这里和f1中type名字是任意取的，只是习惯上取type。type是必须的，也可以额外加参数，比如value
// store.dispatch({type: 'add', value: 5});
// store.dispatch({type: 'add', value: 5});
// store.dispatch({type: 'add', value: 5});
// store.dispatch({type: 'add', value: 5});
// store.dispatch({type: 'sub', value: 1});
// store.dispatch({type: 'sub', value: 1});
// store.dispatch({type: "concat", character: 'zyc'});



// console.log(store.getState());



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

