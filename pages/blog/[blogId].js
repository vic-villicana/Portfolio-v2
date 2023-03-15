import { useRouter } from "next/router"
import {getEventById} from '../../dummy-data'

import BlogContent from '../../components/blog/blog-content'
import BlogInfo from '../../components/blog/blog-info'
import BlogHeading from '../../components/blog/blog-heading'

export default function BlogPost(){

    const router = useRouter()
    const blogId = router.query.blogId

    const data = getEventById(blogId)
    console.log(data)

    if(!data){
        return <p>Loading bitch...</p>
    }

    return (
        <div>
            <BlogHeading title={data.title} />
            <BlogInfo  date={data.date}  image={data.image} imageAlt={data.title} />
            <BlogContent>
                {data.description}
            </BlogContent>
        </div>
    )
}