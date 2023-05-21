import React,{useEffect, useState} from 'react';
import './App.css';
import Form from './components/From';
import TodoList from './components/TodoList'




function App() {
  
  const [inputText , setInputText] = useState("");
  const [todos , setTodos] = useState([]);
  const [status,setStatus] = useState("all");
  const [filteredTodos,setFilteredTodos] = useState([]);


//run once
useEffect(() => {
  if(localStorage.getItem('todos') === null){
    localStorage.setItem('todos' , JSON.stringify([]))

  }
  else {
   let todoLocal = JSON.parse(localStorage.getItem('todos'));
   console.log(todoLocal);
   setTodos(todoLocal);
  
  }
  
}, []);

//use effect

useEffect(() => {
  filterHandler();
  saveLocalTodos();
}, [todos , status]);


  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter (todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter (todo =>todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }

  //Savelocals
  const saveLocalTodos = () => {
    
      if (todos.length > 0) {
        localStorage.setItem('todos', JSON.stringify(todos)); }

  };
 




  return (
    <div className="App">
      <header>Ace Todo List</header>
      <Form 
        inputText = {inputText} 
        setInputText={setInputText} 
        todos = {todos} 
        setTodos = {setTodos}
        setStatus={setStatus}
        
          />
      <TodoList setTodos = {setTodos} todos = {todos} filteredTodos = {filteredTodos}/>
    </div>
  );
}

export default App;
