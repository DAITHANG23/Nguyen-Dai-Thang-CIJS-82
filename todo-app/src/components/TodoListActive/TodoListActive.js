
import TodoItemActive from '../TodoItemActive/TodoItemActive';
import './TodoListActive.css'

const TodoListActive = (props) =>{
    const {todoList, onRemoveTodoList, isCheckTodoActive, onUpdateTitle, todoActive} = props

    const todoListValid = todoActive && Array.isArray(todoActive);

    const todoListElement = todoListValid && todoActive.map((todoItem) =>{
       
        return <div key={todoItem.id}>
            <TodoItemActive {...todoItem} onRemoveTodoList={onRemoveTodoList} isCheckTodoList={isCheckTodoActive} onUpdateTitle={onUpdateTitle} />
        </div>
    })

    return <div>
        {todoListElement}
    </div>   
    
}

export default TodoListActive;