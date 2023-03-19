import React from 'react'
import styles from "../styles/contact.module.css"

const contact = () => {
    return (
        <>
            {/* Inline css */}
            <h1 className={styles.mainHeading} style={{ fontSize: 56 }}>Contact page</h1>
            <p className='intro'>Subscribe and share</p>

            {/* Internal css */}
            <style jsx>
                {`
                h1{
                    background-color:green;
                }
                .intro{
                    color: pink;
                }
                `}
            </style>
        </>
    )
}

export default contact