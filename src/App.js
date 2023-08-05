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

  function handleDeleteAll(){
    const confirm=window.confirm('Are you sure that you want to delete all items 🤔?')

    if (confirm) setItems([])
  }

  return <div className="app">
    <Logo/>
    <Form onAddItems={handleAddItems}/>
    <PackingList onDelteItem={handleDeleteItem} items={items} onToggleItem={handleToggleItem} onDeleteAll={handleDeleteAll}/>
    <Stats items={items}/>
  </div>
}


function Logo(){
  return <h1>🐱‍🐉Far Away</h1>

}

function Form({onAddItems}){
  const [description,setDescription]=useState("")
  const [quantity,setquantity]=useState("")


  function handleSubmit(e){
    e.preventDefault()

    if (!description) return;

    const newItem={description,quantity,packed:false,id:Date.now()}

    console.log(newItem)    

    onAddItems(newItem)

    setDescription("")
    setquantity(1)
  }



  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you want for tour 😍 trip?</h3>
      <select value={quantity} onChange={(e)=>setquantity(Number(e.target.value))}>
        {console.log(quantity)}
        {Array.from({length:20},(_,i)=> i +1).map(num=><option value={num} key={num}>{num}</option>)}
      </select>
      <input type="text" placeholder="Item..." value={description} onChange={(e)=>setDescription(e.target.value)}></input>
      <button>ADD</button>
    </form>
  )


}


function PackingList({items,onDelteItem,onToggleItem,onDeleteAll}){
  const [sortBy,setSortBy]=useState("input")
  let sortedItems;

  if(sortBy === 'input') sortedItems = items;

  if (sortBy === 'description') sortedItems = items.slice().sort((a,b)=>a.description.localCompare(b.description))

  if (sortBy === 'packed') sortedItems=items.slice().sort((a,b)=>Number(a.packed) - Number(b.packed))




  return (

    <div className="list">
      <ul className="list">
        {sortedItems.map(item=><Item item={item}  key={item.id} onDelteItem={onDelteItem} onToggleItem={onToggleItem}/>)}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={e=>setSortBy(e.target.value)}>
          <option value='input'>Sort by Input Order</option>
          <option value='description'>Sort by Description</option>
          <option value='packed'>Sort by Packed status</option>
        </select>

        <button onClick={()=>{onDeleteAll()}}>Clear List</button>

      </div>

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

function Stats({items}){

  if (!items.length){
    return (
      <p className="stats">
        <em>Start adding some items to your packiging list 🚕</em>
      </p>
    )
  }



  const numItems=items.length
  const numPacked=items.filter((item)=>item.packed).length
  const percentage=Math.round((numPacked / numItems *100))



  return(
    <footer className="stats">
      <em>{ percentage === 100? 'you got everything! Ready to go 👌' :`💼 you have ${numItems} items on your list, and you already packed ${numPacked} (${percentage}%)`}</em>
    </footer>
  )
}