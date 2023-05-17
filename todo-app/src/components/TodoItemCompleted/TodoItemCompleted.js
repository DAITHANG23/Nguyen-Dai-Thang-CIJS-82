import './TodoItemCompleted.css'
import { FaEdit,FaTrashAlt } from "react-icons/fa";
import { useState,useEffect, useRef } from 'react';

const TodoItemCompleted = (props) => {
    const { title, id, isChecked, onRemoveTodoList, isCheckTodoList,  onUpdateTitle } = props;

    const [isEditing, setIsEditing] = useState(false);
    const [isEditingValue, setIsEditingValue] = useState(title);
    const todoInputRef = useRef(null)
   
    const isStyleTitle = isChecked ? "title-todo check-todo " : "title-todo"
    const isStyleCard = isChecked ? "todo-item check-card" : "todo-item"

    const onEditing = () =>{
        setIsEditing(true); // change edit 
    }

    const onChangeTitle = (e) =>{
        setIsEditingValue(e.target.value) 
    }

    const onUpdateTitleHandle = () => {
        onUpdateTitle(isEditingValue, id)
        setIsEditing(false)
    }

    const onKeyDownHandler = (e) =>{
        if(e.key === 'Enter'){
            onUpdateTitleHandle();
        }
        if(e.key === 'Escape'){
            setIsEditingValue(title)
            // setIsEditing(false);
        }
    }

    useEffect(() => {
        if (isEditing && todoInputRef) {
          todoInputRef && todoInputRef.current.focus();
        }
      }, [isEditing]);

    return <div className={isStyleCard}>
        <div className='todo-item-title'>
            <input  type='checkbox' checked={isChecked} id={id} onChange={()=>isCheckTodoList(id)} />
            {
                isEditing?(
                    <input 
                    value={isEditingValue}
                    name={title}
                    onChange={onChangeTitle}
                    onBlur={onUpdateTitleHandle}
                    onKeyDown={onKeyDownHandler}
                    ref={todoInputRef}
                    />
                ): (<p  className={isStyleTitle}
                >{title}</p>)
            }
            
        </div>
        <div className='todo-func'>
            <FaEdit
                onClick={onEditing}
                style={{
                    color: "rgb(54, 231, 54)",
                    fontSize:"35px",
                    cursor: "pointer",
                    marginRight:"20px"
                }} />

            <button onClick={()=> onRemoveTodoList (id)} style={{border:"none",background:"none"}}><FaTrashAlt /></button>
        </div>

    </div>
}

export default TodoItemCompleted;