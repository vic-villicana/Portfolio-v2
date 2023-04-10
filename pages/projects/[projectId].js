import {useRouter} from 'next/router'

import HelloForm from '../../components/contact/hello-form'
import TipsyProject from '../../components/projects/tipsy-project'
import NavBar from '../../components/layout/navbar'
export default function ProjectPage() {
    const router = useRouter()
    const query =  router.query.projectId
    return (
        <div>
            <TipsyProject />
            <HelloForm />

        </div>
    )
}