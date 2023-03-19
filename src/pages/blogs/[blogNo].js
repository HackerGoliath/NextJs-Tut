import { useRouter } from 'next/router'

const BlogNo = () => {
    const router = useRouter();
    const pageNo = router.query.blogNo
    return (
        <>
            <h1>Blog {pageNo} content here</h1>
        </>
    )
}

export default BlogNo