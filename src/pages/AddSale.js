import { useState } from "react"

export default function AddSale() {
    const [soldQty, setSoldQty] = useState('');
    const [itemName, setItemName] = useState('');
    const [salePrice, setSalePrice] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault()
        fetch("http://localhost:7500/sales", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                soldQty: soldQty,
                itemName: itemName,
                salePrice: salePrice
            })
        })
    }

    return (
        <>
            <h1>Add a Sale</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="soldQty">Quantity Sold</label><br />
                <input id="soldQty" type='text' value={soldQty} onChange={(e) => { setSoldQty(e.target.value) }} /><br />
                <label htmlFor="itemName">Item Name</label><br />
                <input id="itemName" type='text' value={itemName} onChange={(e) => { setItemName(e.target.value) }} /><br />
                <label htmlFor="salePrice">Total Sale Price</label><br />
                <input id="salePrice" type='text' value={salePrice} onChange={(e) => { setSalePrice(e.target.value) }} /><br />
                <button >Submit</button>
            </form>
        </>
    )
}