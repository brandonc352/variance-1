import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllSales } from "../../../controllers/sales.js";

const AllSales = () => {
    const [sales, setItems] = useState([])

    useEffect(() => {
        getAllSales().then((data) => setItems(data))
    }, []);

    const pricePerItem = (soldQty, salePrice) => {
        return salePrice / soldQty
    }

    return (
        <>
            <h1>Sales</h1>
            <Link to="/add-sale">Add Sale</Link>
            <br />
            <br />
            <table>
                <thead>
                    <tr>
                        <th>Quanty Sold</th>
                        <th>Item Name</th>
                        <th>Total Sale Price</th>
                        <th>Price per Item</th>
                    </tr >
                </thead >
                <tbody>
                    {sales &&
                        sales.map(({ id, soldQty, itemName, salePrice }) => (
                            <tr key={id}>
                                <td>{soldQty}</td>
                                <td>{itemName}</td>
                                <td>{salePrice}</td>
                                <td>{pricePerItem(soldQty, salePrice)}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}

export default AllSales

