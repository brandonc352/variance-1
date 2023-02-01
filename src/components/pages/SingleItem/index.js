import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getSingleItem, deleteItem } from "../../../controllers/items.js";
import ItemSales from "./ItemSales/index.js"

const SingleItem = () => {
    const navigate = useNavigate();

    const [item, setItem] = useState({ title: "", body: "" });
    const { name } = item;

    let { id } = useParams();

    useEffect(() => {
        getSingleItem(id).then((data) => setItem(data));
    }, [id]);

    const handleDelete = (event, id) => {
        deleteItem(event, id);
        navigate("/items");
    };

    return (
        <>
            <h1>Item</h1>
            <h1>{name}</h1>
            <a href="/delete" onClick={(e) => handleDelete(e, id)}>
                Delete Item
            </a>
            <ItemSales item={{ id: id }} />
        </>
    );
};

export default SingleItem;