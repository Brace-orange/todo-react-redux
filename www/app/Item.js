import React,{Component} from "react";

export default class Item extends Component{
  constructor(props){
    super(props);
    this.state={
      "onEdit":false,
      "txt":props.item.title
    }
  }
  render(){
    return <div>
    *<input
    type="checkbox"
     checked={this.props.item.done}
     onChange={(e)=>{this.props.changeGou(this.props.item._id,e.target.checked)}}/>

    {
      this.state.onEdit
      ?
    <span>  <input type="text"
    value={this.state.txt}
    onChange={(e)=>{this.setState({"txt":e.target.value})}}
    onBlur={(e)=>{this.props.changeTitle(this.props.item._id,e.target.value);this.setState({"onEdit":false});}}/></span>
    :
    <span onDoubleClick={()=>{this.setState({"onEdit":true})}}>{this.props.item.title}</span>

    }

    <button onClick={()=>{this.props.del(this.props.item._id)}}>删除</button>
    </div>
  }
}
