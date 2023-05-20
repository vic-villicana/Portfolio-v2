import { useRouter } from "next/router"
// import {getEventById} from '../../dummy-data'
// import {getAllEvents} from '../../dummy-data'

import BlogContent from '../../components/blog/blog-content'
import BlogInfo from '../../components/blog/blog-info'
import BlogHeading from '../../components/blog/blog-heading'

export default function BlogPost(props){

    // const router = useRouter()
    // const blogId = router.query.blogId

    // // const data = getEventById(blogId)
    // // console.log(data)
    // const data = props.data[0]
    // console.log(data)
    // if(!data){
    //     return <p>Loading bitch...</p>
    // }

    // return (
    //     <div>
    //         <BlogHeading title={data.title} />
    //         <BlogInfo  date={data.date}  image={data.image} imageAlt={data.title} category={data.isFeatured} />
    //         <BlogContent>
    //             {data.description}
    //         </BlogContent>
    //     </div>
    // )
}

// export async function getStaticProps(context){
//     const {params} = context
//     //this parameter will be used to searh for any relative data
//     //ex. as a paramter for a mongoose model query
//     const parameter = params.blogId
//     const data = getAllEvents()
//     const thePost = data.filter(theEvent => theEvent.id === parameter)
//     return {
//         props: {
//             data: thePost
//         }
//     }
// }

// export async function getStaticPaths() {
//     const data = getAllEvents()

//     const thePaths = data.map(item => ({ params:{blogId: item.id} }))

//     return {
//         paths:thePaths,
//         fallback:true
//     }
// }