'use client'

import { useEffect, useState } from "react"



const TagList = () => {
    const [tags, setTags] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchTags = async () => {
            try {
                const response = await fetch('/api/tags')
                if (!response.ok) {
                    throw new Error('Failed to fetch tags')
                }
                const data = await response.json()
                setTags(data)
            } catch (err) {
                setError(err.message)
            }
        }

        fetchTags()
    }, [])

  return (
    <div>
        <h1>All Tags</h1>
        {error && <p className="text-red-600">{error}</p>}
        <ul>
            {tags.map((tag, index) => (
                <li key={index}>{tag}</li>
            ))}
        </ul>
    </div>
  )
}

export default TagList