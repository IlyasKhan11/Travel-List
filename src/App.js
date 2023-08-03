const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: true },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 2, description: "spoon", quantity: 12, packed: false },
  { id: 2, description: "charger", quantity: 1, packed: false }
]



export default function App(){

  return <div className="app">
    <Logo/>
    <Form/>
    <PackingList/>
    <Stats/>
  </div>



}


function Logo(){
  return <h1>🐱‍🐉Far Away</h1>

}

function Form(){
  return (
    <div className="add-form">
      <h3>What do you want for tour 😍 trip?</h3>
    </div>
  )


}

function PackingList(){




  return (

    <div className="list">
      <ul className="list">
        {initialItems.map(item=><Item item={item} />)}
      </ul>
    </div>

  )

}




function Item({item}){
  return (

    <li>
      <span style={item.packed ? {textDecoration:'line-through'} :{}}>
        {item.quantity} {item.description}
      </span>

      <button>❌</button>
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