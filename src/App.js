import { useState } from "react"
import Logo from "./Logo"
import Form from "./Form"
import PackingList from "./PackeginList"
import Item from "./Item"
import Stats from "./Stats"

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: true },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "spoon", quantity: 12, packed: false },
  { id: 4, description: "charger", quantity: 1, packed: false }
]

export default function App() {

  const [items, setItems] = useState([])

  function handleAddItems(item) {
    setItems(items => [...items, item])
  }

  function handleDeleteItem(id) {
    setItems(items => items.filter(item => item.id !== id))
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item)
    )
  }

  function handleDeleteAll() {
    const confirm = window.confirm('Are you sure that you want to delete all items 🤔?')

    if (confirm) setItems([])
  }

  return <div className="app">
    <Logo />
    <Form onAddItems={handleAddItems} />
    <PackingList onDelteItem={handleDeleteItem} items={items} onToggleItem={handleToggleItem} onDeleteAll={handleDeleteAll} />
    <Stats items={items} />
  </div>
}












