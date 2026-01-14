import { useState } from "react";

function RenderingKeyAndMap() {
    const [items, setItems] = useState([
        { id: 1, name: "Mie Ayam" },
        { id: 2, name: "Nasi Goreng" },
        { id: 3, name: "Sate Ayam" },
    ]);

    const reverseItems = () => {
        setItems([...items].reverse());
    };

    return (
        <div>
            <h2>Contoh Rendering dengan Key dan Map</h2>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
            <button onClick={reverseItems}>Balik Urutan Item</button>
        </div>
    );
        }

export default RenderingKeyAndMap;