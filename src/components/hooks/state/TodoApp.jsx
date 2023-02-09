
import React, { useState } from 'react';
import "../../my styles/TodoApp.scss"

function TodoApp() {

  let [fruits, setfruits] = useState([]);
  let [fruit, setfruit] = useState("");

  let [hidden, setHidden] = useState(false);
  let [task, setTask] = useState('');
  let [displayfruit, setdisplayfruit] = useState("");


  let changeFruit = ({ target: { value } }) => {
    setfruit(value)
  }

  let addFruit = () => {
    setfruits([...fruits, fruit])
    setHidden(true);
    setTimeout(() => {
      setHidden(false);

    }, 2000)
    setdisplayfruit(fruit)
    setTask("added")
    setfruit("")
  }

  let deletefruit = (index) => {

    let filteredfruits = fruits.filter((fruit, id) => {
      return id != index;
    })
    setHidden(true);
    setTimeout(() => {
      setHidden(false);

    }, 2000)
    setdisplayfruit(fruits[index])
    setTask("deleted")

    setfruits(filteredfruits);

  }

  return (
    <section className='todo'>
      <div className={hidden ? "show" : "hide"} style={{ backgroundColor: task == "added" ? "green" : "red" }}>
        {displayfruit} <span>{task == "added" ? "Added Successfully" : "Deleted Successfully"}</span>
      </div>

      <div className='inp'>
        <input type="text" placeholder='Enter Fruit name' onChange={changeFruit} value={fruit} />
        <button onClick={addFruit}>Add</button>
      </div>

      <ul>
        {fruits.map((fruit, i) => {
          return <div key={i} className='item'>
            <li>{fruit}</li>
            <button onClick={() => (deletefruit(i))}>Delete</button>
          </div>
        })}
      </ul>


    </section>
  )
}

export default TodoApp