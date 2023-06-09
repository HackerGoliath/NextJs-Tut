import React, { useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const ErrorPage = () => {
    const router = useRouter()
    const handleInput = () => {
        router.push("/")
    }

    useEffect(() => {
        setTimeout(() => {
            router.push("/")
        }, 3000);
    }, [])

    return (
        <>
            <div id='notfound'>
                <div className="notfound">
                    <div className="notfound-404">
                        <h1>404</h1>
                    </div>
                    <h2>We are sorry, Page not found</h2>
                    <p>
                        The page you are looking for might have been removed had its name
                        changed or is temporary unavailable.
                    </p>
                    {/* <Link href="/">Back to homeapge</Link> */}
                    {/* <a onClick={() => router.push("/")}>Back to homeapge</a> */}
                    <a onClick={handleInput}>Back to homeapge</a>
                </div>
            </div>
        </>
    )
}

export default ErrorPage