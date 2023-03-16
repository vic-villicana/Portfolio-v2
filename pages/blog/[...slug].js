import {useRouter} from 'next/router'
import BlogSearch from '../../components/blog/blog-search'
import BlogList from '../../components/blog/blog-list'
import {getFeaturedEvents} from '../../dummy-data'
export default function SpecificBlogPost() {
    const router = useRouter()
    const params = router.query.slug

    function takePath(param) {
        router.push(`/blog/filter/${param}`)
    }

    const data = params[1]

    if(!params){
        return <p>loading...</p>
    }

    const filteredData = getFeaturedEvents(data)

    return (
        <div>
            <h2>{data} Blog Posts</h2>
            <BlogSearch onSearch={takePath} />
            <BlogList  items={filteredData}/>
        </div>
    )
}