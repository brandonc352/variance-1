import { useEffect, useState } from "react"

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

    return (   
        <>
        <h1>Sales</h1>
        <table>
            <thead>
                <tr>
                    <th>Quanty</th>
                    <th>Item</th>
                    <th>Total</th>
                </tr >
            </thead >
            <tbody>
            {data.map(({id, soldQty, itemName, saleTotal}) => (
                <tr key={id}>
                    <td>{soldQty}</td>
                    <td>{itemName}</td>
                    <td>{saleTotal}</td>
                </tr>
            ))}
           </tbody>
        </table>
        </>
    )
}