import { useState } from "react"

export default function AddItem() {
    const [name, setName] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault()
        fetch("http://localhost:7500/items", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name
            })
        })
    }

    return (
        <>
            <h1>Add an Item</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label><br />
                <input id="name" type='text' value={name} onChange={(e) => { setName(e.target.value) }} /><br />
                <button >Submit</button>
            </form>
        </>
    )
}