
import './App.css';
import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from "uuid";
import Header from './components/Header/Header';
import { Routes, Route } from 'react-router-dom'
import TodoContainer from './components/TodoContainer/TodoContainer';
import TodoListActive from './components/TodoListActive/TodoListActive'
import TodoListCompleted from './components/TodoListCompleted/TodoListCompleted';

function App() {
  const [todoList, setTodoList] = useState(() => {
    const todoListStorage = localStorage.getItem("todoApp");
    return todoListStorage ? JSON.parse(todoListStorage) : [];
  });

  useEffect(() => {
    window.localStorage.setItem("todoApp", JSON.stringify(todoList));
  }, [todoList])

  useEffect(() => {
    const storedTodoList = localStorage.getItem("todoApp");
    if (storedTodoList) {
      setTodoList(JSON.parse(storedTodoList));
    }
    
   },[])
  
  const onAddNewTodo = (todoTitle) => {
    const NewTodoList = {
      title: todoTitle,
      id: uuidv4(),
      isChecked: false
    }

    const nextTodoList = [...todoList, NewTodoList];
    setTodoList(nextTodoList);

  }

  const onRemoveTodoList = (id) => {
    const removeTodoItem = todoList.filter((todoItem) => {
      return todoItem.id !== id;
    })
    setTodoList(removeTodoItem);
  }

  const isCheckTodoList = (todoId) => {
    const todoIndex = todoList.findIndex((itemId) => {
      return itemId.id === todoId;
    })
    const newTodoItem = [...todoList]

    if (newTodoItem[todoIndex].isChecked === false) {
      newTodoItem[todoIndex].isChecked = true;

      //  setTodoActive([])
    } else {
      newTodoItem[todoIndex].isChecked = false;
      // setTodoActive(newTodoItem)
    }
    setTodoList(newTodoItem)
 }

  const onUpdateTitle = (updateTitle, id) => {
    const todoIndex = todoList.findIndex((itemId) => {
      return itemId.id === id;
    })
    const updateTodoList = [...todoList];
    updateTodoList[todoIndex] = {
      ...updateTodoList[todoIndex],
      title: updateTitle
    }
    // updateTodoList[todoIndex].title = updateTitle;
    setTodoList(updateTodoList)
  }

  const onDeleteAll = () => {
    setTodoList("");
  }

  return (
    <div className="App">
      <h1 style={{ textAlign: "center", marginTop: "20px" }}>#todo</h1>
      <main style={{ marginLeft: "60px" }}>
        <Header />
        <Routes>
          <Route path='/' element={<TodoContainer onAddNewTodo={onAddNewTodo} todoList={todoList}  isCheckTodoList={isCheckTodoList}/>} />
          <Route path='/active' element={<TodoListActive todoList={todoList} onAddNewTodo={onAddNewTodo} isCheckTodoList={isCheckTodoList} />} />
          <Route path='/completed' element={<TodoListCompleted todoList={todoList} onRemoveTodoList={onRemoveTodoList} isCheckTodoList={isCheckTodoList} onUpdateTitle={onUpdateTitle} onDeleteAll={onDeleteAll} />} />
        </Routes>
      </main>

    </div>
  );
}

export default App;
