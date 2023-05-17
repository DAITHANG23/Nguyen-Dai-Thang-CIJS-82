import React from 'react'
import TodoForm from '../TodoForm/TodoForm'
import TodoListActive from '../TodoListActive/TodoListActive';
const TodoActive = (props) => {
    const {onAddNewTodo, todoList, onRemoveTodoList, isCheckTodoActive, onUpdateTitle, todoActive } = props;
  return (
    <div>
        <TodoForm onAddNewTodo={onAddNewTodo} />
        <TodoListActive todoList={todoList} onRemoveTodoList={onRemoveTodoList} isCheckTodoActive={isCheckTodoActive} onUpdateTitle={onUpdateTitle} todoActive={todoActive} />
    </div>
  )
}

export default TodoActive