import React from 'react'
import TodoForm from '../TodoForm/TodoForm'
import TodoListActive from '../TodoListActive/TodoListActive';
const TodoActive = (props) => {
    const {onAddNewTodo, todoList, onRemoveTodoList, isCheckTodoList, onUpdateTitle, todoActive } = props;
  return (
    <div>
        <TodoForm onAddNewTodo={onAddNewTodo} />
        <TodoListActive todoList={todoList} onRemoveTodoList={onRemoveTodoList} isCheckTodoList={isCheckTodoList} onUpdateTitle={onUpdateTitle} todoActive={todoActive} />
    </div>
  )
}

export default TodoActive