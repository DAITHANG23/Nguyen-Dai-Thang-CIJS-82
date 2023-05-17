import React from 'react'
import TodoForm from '../TodoForm/TodoForm'
import TodoList from '../TodoList/TodoList'

const TodoContainer = (props) => {

    const {onAddNewTodo, todoList, onRemoveTodoList, isCheckTodoList, onUpdateTitle } = props
  return (
    <div>
        <TodoForm onAddNewTodo={onAddNewTodo} />
        <TodoList todoList={todoList} onRemoveTodoList={onRemoveTodoList} isCheckTodoList={isCheckTodoList} onUpdateTitle={onUpdateTitle}  />
    </div>
  )
}

export default TodoContainer