// import { useRouter } from 'next/router'

export const getStaticPaths = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await res.json();

    const paths = data.map((currElem) => {
        return {
            params: {
                blogNo: currElem.id.toString(),
            },
        }
    });
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.blogNo;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await res.json()

    return {
        props: {
            data,
        }
    }
}

const BlogNo = ({ data }) => {
    // const router = useRouter();
    // const pageNo = router.query.blogNo

    const { id, title, body } = data
    return (
        <>
            {/* <h1>Blog {pageNo} content here</h1> */}

            <div className="ssr-styles ssr-styles-inside">
                <h3>{id}</h3>
                <h2>{title}</h2>
                <p>{body}</p>
            </div>

        </>
    )
}

export default BlogNo