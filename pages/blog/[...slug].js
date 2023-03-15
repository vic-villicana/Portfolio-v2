import {useRouter} from 'next/router'

export default function SpecificBlogPost() {
    const router = useRouter()
    const params = router.asPath
    console.log(params)
    return (
        <div>
            welcome to the {`${params}`} page
        </div>
    )
}