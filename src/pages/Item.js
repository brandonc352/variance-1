import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from "react"

export default function Item() {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    let { id } = useParams()

    useEffect(() => {
        fetch(`http://localhost:7500/items/${id}`)
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
            <h1>Display Item</h1>
            <h1>{data.name}</h1>
        </>
    )
}