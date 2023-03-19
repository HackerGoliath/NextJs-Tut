import React from 'react'

// fetch data at build time
export const getStaticProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/")
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
                data.map((currElem) => {
                    return <div key={currElem.id} className="ssr-styles">
                        <h3>{currElem.id}</h3>
                        <h2>{currElem.title}</h2>
                    </div>
                })
            }
        </>
    )
}

export default index