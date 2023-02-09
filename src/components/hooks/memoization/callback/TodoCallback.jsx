import React, { useState } from 'react'
import '../../../my styles/TodoApp.scss'

function TodoCallback({changeHidden,hidden}) {
    let [fruits, setfruits] = useState([]);
    let [fruit, setfruit] = useState("");
  
    let [task, setTask] = useState('');
    let [displayfruit, setdisplayfruit] = useState("");
  
  
    let changeFruit = ({ target: { value } }) => {
      setfruit(value)
    }
  
    let addFruit = () => {
      setfruits([...fruits, fruit])
      changeHidden(true)
      setTimeout(() => {
        changeHidden(false)
      }, 2000)
      setdisplayfruit(fruit)
      setTask("added")
      setfruit("")
    }
  
    let deletefruit = (index) => {
  
      let filteredfruits = fruits.filter((fruit, id) => {
        return id != index;
      })

      changeHidden(true)

      setTimeout(() => {
        changeHidden(false)
  
      }, 2000)
      setdisplayfruit(fruits[index])
      setTask("deleted")
  
      setfruits(filteredfruits);
  
    }
  
    return (
      <section className='todo'>
        {console.log("Todo Callback")}
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

export default React.memo(TodoCallback)