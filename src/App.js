import { useState } from "react"

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: true },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "spoon", quantity: 12, packed: false },
  { id: 4, description: "charger", quantity: 1, packed: false }
]



export default function App(){

  const [items,setItems]=useState([])










  function handleAddItems(item){
    setItems(items=>[...items,item])
  }



  function handleDeleteItem(id){
    setItems(items=>items.filter(item=>item.id !== id))
  }

  function handleToggleItem(id){
    setItems((items)=>
      items.map((item)=>
        item.id === id ? {...item,packed: !item.packed}:item)
    )
  }
















  return <div className="app">
    <Logo/>
    <Form onAddItems={handleAddItems}/>
    <PackingList onDelteItem={handleDeleteItem} items={items} onToggleItem={handleToggleItem}/>
    <Stats/>
  </div>



}


function Logo(){
  return <h1>🐱‍🐉Far Away</h1>

}

function Form({onAddItems}){
  const [description,setDescription]=useState("")
  const [selection,setSelection]=useState("")


















  function handleSubmit(e){
    e.preventDefault()

    if (!description) return;

    const newItem={description,Selection,packed:false,id:Date.now()}

    console.log(newItem)    

    onAddItems(newItem)

    setDescription("")
    setSelection(1)
  }

























  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you want for tour 😍 trip?</h3>
      <select value={selection} onChange={(e)=>setSelection(Number(e.target.value))}>
        {console.log(selection)}
        {Array.from({length:20},(_,i)=> i +1).map(num=><option value={num} key={num}>{num}</option>)}
      </select>
      <input type="text" placeholder="Item..." value={description} onChange={(e)=>setDescription(e.target.value)}></input>
      <button>ADD</button>
    </form>
  )


}













function PackingList({items,onDelteItem,onToggleItem}){
  return (

    <div className="list">
      <ul className="list">
        {items.map(item=><Item item={item}  key={item.id} onDelteItem={onDelteItem} onToggleItem={onToggleItem}/>)}
      </ul>
    </div>

  )

}


function Item({item,onDelteItem,onToggleItem}){
  return (

    <li>
      <input type="checkbox" value={item.packed} onChange={()=> onToggleItem(item.id)}/>
      <span style={item.packed ? {textDecoration:'line-through'} :{}}>
        {item.quantity} {item.description}
      </span>

      <button onClick={()=>onDelteItem(item.id)}>❌</button>
    </li>
  )
}

function Stats(){
  return(
    <footer className="stats">
      <em>💼 you have X items on your list, and you already packed X (X%)</em>
    </footer>
  )
}