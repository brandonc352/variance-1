import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addItem } from "../../../controllers/items";

const AddItem = () => {
    const navigate = useNavigate();

    const [item, setItem] = useState({ name: "" });
    const { name } = item;

    const handleChange = (event) => {
        const { name, value } = event.target;
        setItem({
            ...item,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        addItem(item);
        navigate("/items");
    };

    return (
        <>
            <h1>Add Item</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <br />
                <input
                    id="name"
                    name="name"
                    type="text"
                    value={name}
                    onChange={(e) => {
                        handleChange(e);
                    }}
                />
                <br />
                <br />
                <button>Submit</button>
            </form>
        </>
    );
};

export default AddItem;