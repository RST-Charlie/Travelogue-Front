import React, { useState } from "react";
import "../styles/PackingList.css";

const PackingList = () => {
    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState("");

    const handleInputChange = (e) => {
        setNewItem(e.target.value);
    };

    const addItem = () => {
        if (newItem.trim() !== "") {
            setItems([...items, newItem]);
            setNewItem("");
        }
    };

    const removeItem = (index) => {
        const updatedItems = items.filter((_, i) => i !== index);
        setItems(updatedItems);
    };

    return (
        <div className="packing-list-container">
            <h2 className="packing-list-header">Packing List</h2>
            <div className="packing-list-form">
                <input
                    type="text"
                    value={newItem}
                    onChange={handleInputChange}
                    placeholder="Add an item"
                />
                <button onClick={addItem}>Add</button>
            </div>
            <ul className="packing-list-items">
                {items.map((item, index) => (
                    <li className="packing-list-item" key={index}>
                        <span>{item}</span>
                        <button onClick={() => removeItem(index)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PackingList;