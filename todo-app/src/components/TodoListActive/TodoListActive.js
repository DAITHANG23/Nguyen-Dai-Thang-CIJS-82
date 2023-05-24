
import TodoItem from '../TodoItem/TodoItem';
import TodoForm from '../TodoForm/TodoForm';
import './TodoListActive.css'

const TodoListActive = (props) =>{
    const { onRemoveTodoList, isCheckTodoList, onUpdateTitle,  onAddNewTodo, todoList} = props
        const todoActive = todoList.filter(todoItem => !todoItem.isChecked)
    const todoListValid = todoActive && Array.isArray(todoActive);

    const todoListElement = todoListValid && todoActive.map((todoItem) =>{
       
        return <div key={todoItem.id}>
             
            <TodoItem {...todoItem} onRemoveTodoList={onRemoveTodoList} isCheckTodoList={isCheckTodoList} onUpdateTitle={onUpdateTitle} />
        </div>
    })

    return <div>
        <TodoForm onAddNewTodo={onAddNewTodo} />
        {todoListElement}
    </div>   
    
}

export default TodoListActive;