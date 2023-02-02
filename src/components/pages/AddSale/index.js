import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addSale } from "../../../controllers/sales";
import AutoCompleteItemName from "./AutoComplete";

const AddSale = () => {
    const navigate = useNavigate();

    const [sale, setSale] = useState({ itemId: 0, itemName: "", soldQty: 0, salePrice: 0 });
    const { itemId, soldQty, salePrice } = sale;

    const handleChange = (event) => {
        const { name, value } = event.target;
        setSale({
            ...sale,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        addSale(sale);
        navigate("/sales");
    };

    const parentStates = (name) => {
        setSale({
            ...sale,
            itemName: name,
        });
    }
    
    return (
        <>
            <h1>Add Sale</h1>
            <label htmlFor="id">ID</label>
            <form onSubmit={handleSubmit}>
                <input
                    id="id"
                    name="itemId"
                    type="text"
                    value={itemId}
                    onChange={(e) => {
                        handleChange(e);
                    }}
                />
                <br />
                <label htmlFor="title">Title</label>
                <br />
                <AutoCompleteItemName stateAccess={parentStates} />
                <br />
                <label htmlFor="sold-qty">Sold Quantity</label>
                <br />
                <input
                    id="sold-qty"
                    name="soldQty"
                    type="number"
                    value={soldQty}
                    onChange={(e) => {
                        handleChange(e);
                    }}
                />
                <br />
                <label htmlFor="sale-price">Sale Price</label>
                <br />
                <input
                    id="sale-price"
                    name="salePrice"
                    type="number"
                    value={salePrice}
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

export default AddSale;