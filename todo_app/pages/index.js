import { useState } from "react";

const Home = () => {
 const [items, setItems] = useState([
   "Assignment 01",
   "Assignment 02",
   "Assignment 03",
   "Quiz 01",
   "Quiz 02",
 ]);
  return (
    <div>
      <h1>Todo App</h1>
      
      <div>
        <input type="text" />
        <button type="button">Add</button>
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
