import React from 'react'

export const TodoItem = ({todo, onDelete}) => {   // Here {todo} is used by destructuring of array rather than passing props. Now, any parameter passed on to TodoItem will have to be explicitly mentioned in the destructuring format
  return (
    <>
    <div className='container-fluid px-4 py-4'>
        <h6>{todo.title}</h6>
        <p>{todo.desc}</p>
        <button className="btn-sm btn-success" onClick={()=> {onDelete(todo)}}>Done</button> 
        {/* Here we are calling a function rather than passing a function like onClick={onDelete()}. This will only run when onClick function is called */}
    </div>
    <hr/>
    </>
  )
}

export default TodoItem
