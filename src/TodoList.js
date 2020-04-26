import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// 面向数据编程
// 定义一个React组件    
/******  无状态组件与有状态组件的区分，函数方式定义的组件不具备state状态，再看你的代码编写的是ES6的语法
一种是解释型的函数来定义，一种使用es6的class来继承。函数型的定义比较简单，语法清晰，
但是不能使用state和lifecycle（或者说如果使用的话需要hook）。class继承的方式相对复杂，
但可以拥有state和lifecycle            *******/
 


// function TodoList() { //函数式组件写法
// 类组件
  class TodoList extends React.Component {
 // state 数据存放的位置 ， 组件的构造函数 组件创建瞬间，constructor自动被执行
  constructor(props) {
    // todolist刚被创建， constructor自动被执行，super初始化 
    super(props);
    // state数据项 存放数据内容
    this.state = {
      list:[],
      inputValue: ''
    };
  }
handleInputChange(e){
  this.setState({
    inputValue: e.target.value
  })
 }

 handleBtnClick(){
   //点击按钮时候调setstate改变stae中的数据 ...扩展运算符，拿到以前的数据
   this.setState({
    list:[...this.state.list,this.state.inputValue],
    inputValue: ''
    //  list:[...this.state.list,'hello world']
   })
   }
  render() { 
     // jsx语法 可以写js表达式 this指向当前组件
     return(
    <div> 
    <div>
      <input value={this.state.inputValue} onChange={this.handleInputChange.bind(this)}/>
      <button onClick={this.handleBtnClick.bind(this)}>add</button>
    </div>
    <ul>
      {
        this.state.list.map((item,index)=>{
        return <li key={index}>{item}</li>
        })
      }
      </ul>
      </div>
  );
}
}

export default TodoList;
