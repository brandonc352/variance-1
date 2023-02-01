import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllItems } from "../../../controllers/items.js";

const AllItems = () => {
    const [item, setItems] = useState([])

    useEffect(() => {
        getAllItems().then((data) => setItems(data))
    }, []);

    return (
        <>
            <h1>All Items</h1>
            <Link to="/add-item">Add Item</Link>
            <br /><br />
            <div>
                {item &&
                    item.map(({ id, name }) => (
                        <div key={id}>
                            <Link to={{ pathname: `/item/${id}` }}>{name}</Link>
                        </div>
                    ))}
            </div>
        </>
    )
}

export default AllItems