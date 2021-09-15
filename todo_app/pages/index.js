import { useState } from "react";

const Home = () => {
  const [todoItem, setTodoitems] = useState("");
 const [items, setItems] = useState([
   "Assignment 01",
   "Assignment 02",
   "Assignment 03",
   "Quiz 01",
   "Quiz 02",
 ]);

 const handleAdd = () => {
   setItems([
     todoItem,... items,
   ]);

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
          items.map((item) => (
            <li key={item}>{item}</li>
          ))
        }
       
       
      </ul>

    </div>
   
  )
};
export default Home;
