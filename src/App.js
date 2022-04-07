import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './MyComponents/Header';
import {Todo} from './MyComponents/Todo';
import {Footer} from './MyComponents/Footer';
import {AddTodo} from './MyComponents/AddTodo';
import {About} from './MyComponents/About';

// React Router DOM imports - For enabling single page redirects of different pages
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  let initTodo;
  if(localStorage.getItem("todos") === null){
    initTodo = [];
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"))
  }

  const onDelete = (todo) => {
    console.log("I'm ondelete of todo: ", todo);
    //console.log(typeof(todo));  // object
    setTodo(todos.filter((e)=> {
      // console.log(typeof(e));   // e is also an object as its one of todo object being filtered
      return e!==todo;
    }))
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  const addTodo = (title, desc)=>{
    console.log("I'm adding this todo: ", title, desc);
    let sno;
    if(todos.length-1 < 0){
      sno = 1;
    }
    else{
      sno = todos[todos.length-1].sno + 1;
    }
    const newTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    // Add this todo object to the todos array using setTodo
    setTodo([...todos, newTodo])
    console.log(newTodo);
  }

  const [todos, setTodo] = useState(initTodo);

  // UseEffect hook handling the updation of todos array
  // Whenever todos gets changed, useEffect hook gets called
  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <>
    <Router>
      <Header title="My Todo List"/> {/* Pass data from parent object to child object - Header.js */}

      <Routes>
        <Route path='/' element={
          <>
            <AddTodo addTodo={addTodo} />
              <Todo todo={todos} onDelete={onDelete} />
          </>
        }>
        </Route>
        <Route exact path={"/about"} element={<About />} />
      </Routes>

      <Footer />
    </Router> 
    </>
  );
}

export default App;
