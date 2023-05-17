import TodoItem from '../TodoItem/TodoItem';
import './TodoList.css'

const TodoList = (props) =>{
    const {todoList, onRemoveTodoList, isCheckTodoList, onUpdateTitle} = props

    const todoListValid = todoList && Array.isArray(todoList);

    const todoListElement = todoListValid && todoList.map((todoItem) =>{
       
        return <div key={todoItem.id}>
            <TodoItem {...todoItem} onRemoveTodoList={onRemoveTodoList} isCheckTodoList={isCheckTodoList} onUpdateTitle={onUpdateTitle} />
        </div>
    })

    return <div>
        {todoListElement}
    </div>   
    
}

export default TodoList;