import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'

export default function Sales() {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch("http://localhost:7500/sales")
            .then((response) => {
                if (response.ok) {
                    return response.json()
                }
                throw response
            })
            .then((data) => {
                setData(data)

            })
            .catch(error => {
                console.error("Error fetching data: ", error)
                setError(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    if (loading) return ""
    if (error) return "Error!"

    const pricePerItem = (soldQty, salePrice) => {
        return salePrice/soldQty
    }
    return (
        <>
            <h1>Sales</h1>
            <Link to="/add-sale">Add Sale</Link>
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
                    {data.map(({ id, soldQty, itemName, salePrice }) => (
                        <tr key={id}>
                            <td>{soldQty}</td>
                            <td>{itemName}</td>
                            <td>{salePrice}</td>
                            <td>{pricePerItem(soldQty,salePrice)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}