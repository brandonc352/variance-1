import { useEffect, useState } from "react"

export default function Items() {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch("http://localhost:7500/items")
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
                        <th>Item</th>
                    </tr >
                </thead >
                <tbody>
                    {data.map(({ id, name }) => (
                        <tr key={id}>
                            <td>{name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}