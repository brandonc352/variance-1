import { useEffect, useState } from "react"

export default function ItemSales(props) {

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch(`http://localhost:7500/sales/?itemName=${props.itemName}`)
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

    return (
        <>
            <h1>Item Sales History</h1>
            <table>
                <thead>
                    <tr>
                        <th>Quantity Sold</th>
                        <th>Price per Item</th>
                    </tr >
                </thead >
                <tbody>
                    {data.map(({ id, soldQty, salePrice, itemName }) => (
                        <tr key={id}>
                            <td>{soldQty}</td><td>{salePrice}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}