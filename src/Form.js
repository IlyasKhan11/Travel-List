import { useState } from "react";

function Form({ onAddItems }) {
    const [description, setDescription] = useState("")
    const [quantity, setquantity] = useState("")


    function handleSubmit(e) {
        e.preventDefault()

        if (!description) return;

        const newItem = { description, quantity, packed: false, id: Date.now() }

        console.log(newItem)

        onAddItems(newItem)

        setDescription("")
        setquantity(1)
    }



    return (
        <form className="add-form" onSubmit={handleSubmit}>
            <h3>What do you want for tour 😍 trip?</h3>
            <select value={quantity} onChange={(e) => setquantity(Number(e.target.value))}>
                {console.log(quantity)}
                {Array.from({ length: 20 }, (_, i) => i + 1).map(num => <option value={num} key={num}>{num}</option>)}
            </select>
            <input type="text" placeholder="Item..." value={description} onChange={(e) => setDescription(e.target.value)}></input>
            <button>ADD</button>
        </form>
    )


}

export default Form;