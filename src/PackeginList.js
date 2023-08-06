import { useState } from "react";
import Item from "./Item";


function PackingList({ items, onDelteItem, onToggleItem, onDeleteAll }) {
    const [sortBy, setSortBy] = useState("input")
    let sortedItems;

    if (sortBy === 'input') sortedItems = items;

    if (sortBy === 'description')
        sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description));

    if (sortBy === 'packed')
        sortedItems = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));




    return (

        <div className="list">
            <ul className="list">
                {sortedItems.map(item => <Item item={item} key={item.id} onDelteItem={onDelteItem} onToggleItem={onToggleItem} />)}
            </ul>

            <div className="actions">
                <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
                    <option value='input'>Sort by Input Order</option>
                    <option value='description'>Sort by Description</option>
                    <option value='packed'>Sort by Packed status</option>
                </select>
                <button onClick={() => { onDeleteAll() }}>Clear List</button>

            </div>

        </div>

    )

}

export default PackingList