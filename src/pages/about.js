import React from 'react'
import styles from "../styles/about.module.css"
import Image from 'next/image'

const about = () => {
    return (
        <>
            <div style={{ textAlign: "center" }}>
                <h1 className={styles.mainHeading}>About Page</h1>
                {/* <Image src="/demo.jpeg" fill></Image> */}
                {/* <Image src="/demo.jpeg" width={500} height={300} alt="Image Here"></Image> */}

                {/* external images */}
                {/* <Image src="https://picsum.photos/200/300" width={500} height={300} alt="Image Here"></Image> */}
                <Image src="https://images.pexels.com/photos/4210852/pexels-photo-4210852.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    width={500} height={300} alt="Image Here"></Image>
            </div>
        </>
    )
}

export default about