// uising destructuring
import { useState } from 'react'

const AddTodo = ({ onAdd }) => {
    //destruturing
    // set the tiems

    //start state with empty string
    const [item, setItem] = useState('')

    //takes in the event
    //prevents default so whole page doesn't reload
    const onSubmit = (e) => {
        e.preventDefault()
        // onadd comes from
        onAdd({item})
//GETS CLEARED WHEN DONE
        setItem('')
    }
    // value - we got from state , 
    // onchange got from 
    // form inputs are CONTROLLED COMPONENTS
    // onchange pass anonymous function, updating the state with the value of the input
    return (
        <form onSubmit={onSubmit}>
            <label>Add Todo:</label>
            <input 
                type="text" 
                placeholder="Todo Item"
                value={item}
                onChange={ (e) => setItem(e.target.value)}
            /> 
            <input type="submit" value="Add Todo" />
        </form>
    )
}

export default AddTodo
