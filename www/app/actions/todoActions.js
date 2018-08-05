//拉取默认数据
export const fetchDefaultData=()=> async (dispatch)=>{
  var {results} = await fetch("/todos").then(data=>data.json());
  dispatch({"type":"INIT",results});
}
//增加
export const add=(title)=> async (dispatch)=>{
  //用fetch发送请求
   var {result}=await fetch("/todos",{
     method:"POST",
     headers:{
       'Content-Type':'application/json'
     },
     body:JSON.stringify({"title":title})
   }).then(data=>data.json());
   dispatch({"type":"ADD",result})
}
//改变针对所有
export const changeGou=(_id,k,v)=> async (dispatch)=>{
  //用fetch发送请求
   var {result}=await fetch("/todos/"+_id,{
     method:"POST",
     headers:{
       'Content-Type':'application/json'
     },
     body:JSON.stringify({"k":k,"v":v})
   }).then(data=>data.json());
   dispatch({"type":"CHANGE","_id":_id,k,v});
}

export const del=(_id)=> async (dispatch)=>{
  //用fetch发送请求
   await fetch("/todos/"+_id,{
     method:"DELETE",
     headers:{
       'Content-Type':'application/json'
     }
   }).then(data=>data.json());
   dispatch({"type":"DEL","_id":_id});
}
