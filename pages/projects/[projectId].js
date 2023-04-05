import {useRouter} from 'next/router'
import ProjectHeading from '../../components/projects/project-heading'
import ProjectFlex from '../../components/projects/project-flex'
import NavBar from '../../components/layout/navbar'
export default function ProjectPage() {
    const router = useRouter()
    const query =  router.query.projectId
    return (
        <div>
            <ProjectHeading />
            <ProjectFlex />
        </div>
    )
}