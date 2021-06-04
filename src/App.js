import { useState } from 'react'
//importing different components
import Header from "./components/Header";
import List from "./components/List"
import AddTodo from "./components/AddTodo"
 

//functional component
//function style syntax
function App() {

    // it's a hook because it starts with "use"... 
    // here an array of objects
    // when app loads first time, will have that data, these are defaults
    // useState returns an array, therefore we need to use destructuring
    // [todos, setTodos]  is array destructuring 
    // usually the function will be called "set" something
  const [todos, setTodos] = useState([
    {
      id: 1,
      item: "Drink Water",
    },
    {
      id: 2,
      item: "Make Healthy Dinner",
    },
    {
      id: 3,
      item: "Exercise",
    },
  ]);

    const addTodo = (todo) => {
      //create unique id from random
        const id = Math.ceil(Math.random() * 100000)
    //create a new todo, with this hnew id, and pass in everything with the spread
        const newTodo = { id, ...todo }
//now update state, state is immutable
// since state is an arra, copy everyhing already in there, and copy to the new todo
        
    setTodos([...todos, newTodo])
  }

  return (
      <div className="container">
          {/* first rendering the Header */}
      <Header title="Todo List" />
          <AddTodo onAdd={addTodo} /> {/* sending onAdd to AddToDo.js */}
        {/* // first one is a state, second one is a property */}
      <List todos={todos}/>
    </div>
  );
}

export default App;
