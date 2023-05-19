
import './App.css';
import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from "uuid";
import Header from './components/Header/Header';
import { Routes, Route } from 'react-router-dom'
import TodoContainer from './components/TodoContainer/TodoContainer';
import TodoActive from './components/TodoActive/TodoActive';
import TodoCompleted from './components/TodoCompleted/TodoCompleted';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [todoActive, setTodoActive] = useState([]);
  const [todoCompleted, setTodoCompleted] = useState([]);

  console.log(todoList)
  useEffect(() => {
   getLocalStorage();
  }, [])

  useEffect(() => {

    window.localStorage.setItem("todoApp", JSON.stringify(todoList));
    // window.localStorage.setItem("todoActive", JSON.stringify(todoActive));
    // window.localStorage.setItem("todoCompleted", JSON.stringify(todoCompleted));

  }, [todoList])
  
  const getLocalStorage = () =>{
    if (window.localStorage.getItem("todoApp") === null) {
      window.localStorage.setItem("todoApp", JSON.stringify([]))
    } else {
      let todoLocalStorage = JSON.parse(window.localStorage.getItem("todoApp"));
      console.log(todoLocalStorage)
      setTodoList(todoLocalStorage);
    }

    // let todoLocalActive = JSON.parse(localStorage.getItem("todoACtive"));
    // let todoLocalCompleted = JSON.parse(localStorage.getItem("todoCompeted"))

    // setTodoActive(todoLocalActive);
    // setTodoCompleted(todoLocalCompleted);
  }
  

  const onAddNewTodo = (todoTitle) => {
    const NewTodoList = {
      title: todoTitle,
      id: uuidv4(),
      isChecked: false
    }

    const nextTodoList = [...todoList, NewTodoList];
    setTodoList(nextTodoList);
    setTodoActive(nextTodoList)

  }

  const onRemoveTodoList = (id) => {
    const removeTodoItem = todoList.filter((todoItem) => {
      return todoItem.id !== id;
    })
    setTodoList(removeTodoItem);
    setTodoCompleted(removeTodoItem);
    setTodoActive(removeTodoItem)
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
    setTodoCompleted(todoList.filter((todoItem) => todoItem.isChecked === true))
    setTodoActive(todoList.filter((todoItem) => todoItem.isChecked === false))
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
    setTodoActive("")
    setTodoCompleted("")
  }


  return (
    <div className="App">
      <h1 style={{ textAlign: "center", marginTop: "20px" }}>#todo</h1>
      <main style={{ marginLeft: "60px" }}>
        <Header />
        <Routes>
          <Route path='/' element={<TodoContainer onAddNewTodo={onAddNewTodo} todoList={todoList} onRemoveTodoList={onRemoveTodoList} isCheckTodoList={isCheckTodoList} onUpdateTitle={onUpdateTitle} />} />
          <Route path='/active' element={<TodoActive onAddNewTodo={onAddNewTodo} todoList={todoList} onRemoveTodoList={onRemoveTodoList} isCheckTodoList={isCheckTodoList} onUpdateTitle={onUpdateTitle} todoActive={todoActive} />} />
          <Route path='/completed' element={<TodoCompleted todoList={todoList} onRemoveTodoList={onRemoveTodoList} isCheckTodoList={isCheckTodoList} onUpdateTitle={onUpdateTitle} todoCompleted={todoCompleted} setTodoCompleted={setTodoCompleted} onDeleteAll={onDeleteAll} />} />
        </Routes>
      </main>

    </div>
  );
}

export default App;
