import {useRouter} from 'next/router'
export default function ProjectPage() {
    const router = useRouter()
    const query =  router.query.projectId
    console.log(query)
    return (
        <div>
           { `welcome to the ${query} page`}
        </div>
    )
}