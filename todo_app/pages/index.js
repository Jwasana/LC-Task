import cx from "classnames";
import { useState } from "react";
import {v4 as uuidv4 } from "uuid";

import styles from "../styles/Home.module.css"

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

 const handdleEnter = (e) => {
   if(e.key == 'Enter') {
     handleAdd();
   }

 };

 const handdleToggle = (id)=> {
   const _item = items.map((item) => {
     if(item.id == id )
     {
       return {
        ... item,
        done: !item.done,
       }
     };


     return item;
   });

  
   setItems(_item);

 };

  return (
    <div className="w-3/4 mx-auto text-center ">
     <div className="pt-12">
     <h1 className="text-4xl text-white">Todo List</h1>

     </div>
    
      
      <div className="pt-5">
        <input type="text" className="w-full rounded text-gray-900 px-4 py-2 text-center" 
        value={todoItem} 
        onChange={(e)=> setTodoitems(e.target.value)}
        onKeyDown={handdleEnter}
         />
      
      </div>

      <ul className="pt-8 text-2xl text-white">
        {
          items.filter(({done}) => !done).map(({id, message }) => (
            <li key={id} onClick={() => handdleToggle(id)}
             className= {cx(styles.item)}>{message}</li>
          ))
        }

{
          items.filter(({done}) => done).map(({id, message}) => (
            <li key={id} onClick={() => handdleToggle(id)} 
            className= {cx(styles.item, styles.done)}>
              {message}
              </li>
          ))
        }
       
       
      </ul>

    </div>
   
  )
};
export default Home;
