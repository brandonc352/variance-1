import { useEffect, useState } from "react";
import { getItemSales } from "../../../../controllers/sales.js";

const ItemSales = (props) => {
    const { id } = props.item
    const [sales, setItems] = useState([])
  
    useEffect(() => {
        getItemSales(id).then((data) => setItems(data))
    }, [id]);

    const pricePerItem = (soldQty, salePrice) => {
        return salePrice / soldQty
    }

    return (
        <>
            <h1>Sale History</h1>
            <table>
                <thead>
                    <tr>
                        <th>Quanty Sold</th>
                        <th>Total Sale Price</th>
                        <th>Price per Item</th>
                    </tr >
                </thead >
                <tbody>
                    {sales &&
                        sales.map(({ id, soldQty, salePrice }) => (
                            <tr key={id}>
                                <td>{soldQty}</td>
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

export default ItemSales