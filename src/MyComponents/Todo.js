import React from 'react'
import {TodoItem} from './TodoItem';

// Exporting a named component
export const Todo = (props) => {
  return (
    <div className='container' style={{backgroundColor: "#b4b8bf"}}>
        <h3 className='text-center my-3'>Todo List</h3>

          <div className='container' style={{backgroundColor: "#e1e3e6"}}>
          {props.todo.length === 0 ? "You're all done for today! Add more Todo items to plan your day." :
            props.todo.map((todo) => {
                return (
                  <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
                )
            })
          }
          </div>
          
    </div>
  )
}

export default Todo
