import React,{Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as todoActions from "./actions/todoActions.js";
import todoReducer from "./reducers/todoReducer.js";
import Item from "./Item.js";

class App extends Component{
  constructor(props){
    super(props);
    this.props.actions.fetchDefaultData();
  }

  changeGou(_id,done){
    this.props.actions.changeGou(_id,"done",done);
  }

  del(_id){
   this.props.actions.del(_id);
  }
  changeTitle(_id,title){
   this.props.actions.changeGou(_id,"title",title);
  }

  render(){
    return (<div>
      <h1>ToDo-List</h1>
      <input type="text" ref="kk"/>{"  "}
      <button onClick={()=>{this.props.actions.add(this.refs.kk.value);this.refs.kk.value="";}}>增加</button>
    <ul>
       {this.props.todos.map((item,index)=>{
         return <Item key={index}
         item={item}
         changeGou={this.changeGou.bind(this)}
         del={this.del.bind(this)}
         changeTitle={this.changeTitle.bind(this)}></Item>
       })
     }
    </ul>

      </div>)
  }
}

export default connect(
({todoReducer})=>{
  return {
    todos:todoReducer.todos
  }
},
(dispatch)=>({
  actions : bindActionCreators(todoActions,dispatch)
})
)(App);
