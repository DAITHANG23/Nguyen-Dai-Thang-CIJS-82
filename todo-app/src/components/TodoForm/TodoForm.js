import { useState } from 'react'
import './TodoForm.css'

const TodoForm = (props) => {


    const [title, setTitle] = useState("");
    const onChangeTodoForm = (e) => {
        setTitle(e.target.value)
    }

    const onAddNewTodoList = (e) => {
        e.preventDefault();
        if(title.trim())
        {
            props.onAddNewTodo(title);
        }else{
            alert("Fill in form, please!")
        }
       
        setTitle("");
    }
    return <div className='form'>
        <form onSubmit={onAddNewTodoList}>
            <div>
            <input
                type="text"
                className="input-form"
                onChange={onChangeTodoForm}
                value={title}
                placeholder='Add details'
                
            />
            </div>
            
            <button type='submit' className="button-form"> ADD</button>
        </form>

    </div>
}

export default TodoForm;