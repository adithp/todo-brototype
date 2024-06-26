import React, { useState } from 'react';
import './App.css';

function App() {
    const [todos,setTodos] = useState([])
    const [todo,setTodo] = useState('')
	

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={todo} onChange={(e)=> setTodo(e.target.value)}  type="text" placeholder="🖊️ Add item..." />
        <i onClick={()=> {
			setTodos([...todos,{id:Date.now(),text:todo,status:false}])
			setTodo('')
			}} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {
			todos.map((item,index) => {
				return (
				<div className="todo" key={index} >
					<div className="left">
						<input value={item.status} onChange={(e)=> {
							console.log(todos)
							setTodos(todos.filter(item2 => {
								if(item2.id === item.id){
									item2.status=e.target.checked
								}
								return item2
								
							}))
						}} type="checkbox" name="" id="" />
						<p>{item.text}</p>
					</div>
					<div className="right">
						<i className="fas fa-times" 
						onClick={()=> {
							setTodos(todos.filter(item2 => {
								if(item2.id === item.id) {
									item2 = null
								}
								return item2
							}))
						}}
						></i>
					</div>
		  		</div>
				)
			})
			
		  
		  }
       
      </div>
    </div>
  );
}

export default App;