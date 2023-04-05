import {useRouter} from 'next/router'
import ProjectHeading from '../../components/projects/project-heading'
import ProjectFlex from '../../components/projects/project-flex'
import NavBar from '../../components/navbar/navbar'
export default function ProjectPage() {
    const router = useRouter()
    const query =  router.query.projectId
    return (
        <div>
            <NavBar />
            <ProjectHeading />
            <ProjectFlex />
        </div>
    )
}