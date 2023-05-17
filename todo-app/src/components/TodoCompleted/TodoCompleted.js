import React from 'react'
import TodoListCompleted from '../TodoListCompleted/TodoListCompleted'

const TodoCompleted = (props) => {
    const {todoList, onRemoveTodoList, isCheckTodoList, onUpdateTitle, todoCompleted, setTodoCompleted, onDeleteAll } =props
  return (
    <div>
        <TodoListCompleted todoList={todoList} onRemoveTodoList={onRemoveTodoList} isCheckTodoList={isCheckTodoList} onUpdateTitle={onUpdateTitle} todoCompleted={todoCompleted} setTodoCompleted={setTodoCompleted} onDeleteAll={onDeleteAll}/>
    </div>
  )
}

export default TodoCompleted