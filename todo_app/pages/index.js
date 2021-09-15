import { useState } from "react";
import {v4 as uuidv4 } from "uuid"

const Home = () => {
  const [todoItem, setTodoitems] = useState("");
 const [items, setItems] = useState([
   {
    id: "1234",
    message: "quiz 01",
    done: false,

   }
  
 ]);

 const handleAdd = () => {
   if(todoItem) {
    setItems([{
      id: uuidv4(),
      message: todoItem,
      done: false,

    },
     ... items,
    ]);
    setTodoitems("");

   }
  

 };
  return (
    <div>
      <h1>Todo App</h1>
      
      <div>
        <input type="text" value={todoItem} onChange={(e)=> setTodoitems(e.target.value)} />
        <button type="button" onClick={handleAdd}>Add</button>
      </div>

      <ul>
        {
          items.map(({id, message}) => (
            <li key={id}>{message}</li>
          ))
        }
       
       
      </ul>

    </div>
   
  )
};
export default Home;
