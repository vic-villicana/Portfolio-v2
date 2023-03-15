import BlogLinks from '../../components/blog/blog-links'
import BlogForm from '../../components/blog/blog-form'
import BlogSearch from '../../components/blog/blog-search'
import { useRouter } from 'next/router'
import {getFeaturedEvents} from '../../dummy-data'

export default function Blog() {
    const router = useRouter()

    function onSearch(value){
        // const values = getFeaturedEvents(value)
        router.push(`/blog/filter/${value}`)
    }

    return (
        <>
            <h1>Welcome to my blog</h1>
            <BlogSearch onSearch={onSearch}/>
            <BlogLinks />
        </>

    )
}