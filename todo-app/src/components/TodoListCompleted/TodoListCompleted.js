
import TodoItemCompleted from '../TodoItemCompleted/TodoItemCompleted';
import './TodoListCompleted.css'
import {FaTrashAlt} from "react-icons/fa"

const TodoListCompleted = (props) =>{
    const {onRemoveTodoList, isCheckTodoList, onUpdateTitle, todoList, setTodoList } = props
    const todoCompleted = todoList.filter(todoItem => todoItem.isChecked)
    const todoListValid = todoCompleted && Array.isArray(todoCompleted);

    const onDeleteAll = () => {
        const todoCompletedRemove = todoList.filter(todoItem => !todoItem.isChecked);
        setTodoList(todoCompletedRemove)
      }

    const todoListElement = todoListValid && todoCompleted.map((todoItem) =>{
       
        return <div key={todoItem.id}>
            <TodoItemCompleted {...todoItem} onRemoveTodoList={onRemoveTodoList} isCheckTodoList={isCheckTodoList} onUpdateTitle={onUpdateTitle} />
        </div>
    })

    return <div>
        {todoListElement}
        <button onClick={()=>onDeleteAll()} className='btn-delete'><FaTrashAlt /> Delete All</button>
    </div>   
    
}

export default TodoListCompleted;