import React, { useReducer, useState } from 'react'
import "../../my styles/TodoApp.scss";
import Modal from './Modal';

let initialTodo =
{
    fruits: [],
    showModal: false,
    modalText:""
}

let todoReducer = (currentTodo, action) => {

    switch (action.type) {
        case 'add': return { ...currentTodo, fruits: [...currentTodo.fruits, action.payload],showModal:true,modalText:action.payload+" Added"}
        case 'delete': return { ...currentTodo, fruits: action.payload ,showModal:true,modalText:currentTodo.fruits[action.id]+" Deleted"}
        case 'close': return { ...currentTodo,showModal:false }
        case 'empty': return { ...currentTodo,showModal:true ,modalText:"Please Enter some fruit Name"}
        default: return currentTodo
    }

   
}
  

function TodoAppReducer() {
    let [fruit, setfruit] = useState("");
    let [todo, dispatchTodo] = useReducer(todoReducer, initialTodo)

    let changeFruit = ({ target: { value } }) => {
        setfruit(value)
    }

    let addFruit = () => {

        if(fruit)
        {
            dispatchTodo({ type: "add", payload: fruit })
        }
        else
        {
            dispatchTodo({ type: "empty" })
        }

        setfruit("")
    }

    let deletefruit = (index) => {

        let filteredfruits = todo.fruits.filter((f, id) => {
            return id !== index
        })
        dispatchTodo({ type: "delete", payload: filteredfruits, id:index})

    }


    let closeModal=()=>
    {
        dispatchTodo({ type: "close" })
    }

    return (
        <section className='todo'>
            {todo.showModal && <Modal myclass={todo.showModal ? "show" : "hide"} closeModal={closeModal} modalText={todo.modalText} />}
            <div className='inp'>
                <input type="text" placeholder='Enter Fruit name' onChange={changeFruit} value={fruit} />
                <button onClick={addFruit}>Add</button>
            </div>

            <ul>
                {todo.fruits.map((fruit, i) => {
                    return <div key={i} className='item'>
                        <li>{fruit}</li>
                        <button onClick={() => (deletefruit(i))}>Delete</button>
                    </div>
                })}
            </ul>


        </section>
    )
}

export default TodoAppReducer