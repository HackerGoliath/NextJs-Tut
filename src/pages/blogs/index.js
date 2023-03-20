import React from 'react'
import Link from 'next/link'

// fetch data at build time
export const getStaticProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await res.json()

    return {
        props: {
            data,
        }
    }
}
const index = ({ data }) => {
    return (
        <>
            {
                data.slice(0, 5).map((currElem) => {
                    return <div key={currElem.id} className="ssr-styles">
                        <h3>{currElem.id}</h3>
                        <Link href={`/blogs/${currElem.id}`}><h2>{currElem.title}</h2></Link>
                    </div>
                })
            }
        </>
    )
}

export default index