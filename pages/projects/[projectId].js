import {useRouter} from 'next/router'

import HelloForm from '../../components/contact/hello-form'
import TipsyProject from '../../components/projects/tipsy-project'
import JuicyProject from '../../components/projects/juicy-project'
import NavBar from '../../components/layout/navbar'
export default function ProjectPage() {
    const router = useRouter()
    const query =  router.query.projectId
    console.log(query)
    return (
        <div>
            {query === 'v1' && <JuicyProject/>}
            {query === 'v2' && <TipsyProject/>}
            {query === 'v3' && "project coming soon!"}
            <HelloForm />
        </div>
    )
}