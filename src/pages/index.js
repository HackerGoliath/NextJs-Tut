import React from 'react'
import styles from "../styles/index.module.css"
import Head from 'next/head'

const index = () => {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      {/* for global css */}
      {/* <h1 className='mainHeading'>Index Page</h1> */}

      {/* for component based css */}
      {/* <h1 className={styles.mainHeading}>Index Page Component Style</h1> */}

      <header className={styles.header}>
        <div className={styles.brand_box}>
          {/* Adding Multiple styles */}
          <h1 className={`${styles.mainHeading} ${styles.mainHeader}`}>Index Page</h1>
        </div>
      </header>
    </>
  )
}

export default index