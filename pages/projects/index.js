import Link from 'next/link'
import {useEffect, useState} from 'react'
import {Fragment} from 'react'
import ProjectSlider from '../../components/projects/project-slider'
import ProjectHeader from '../../components/projects/project-header'
import HelloForm from '../../components/contact/hello-form'


export default function Projects(props) {
    // console.log(props)
    const [projects, setProjects] = useState([])
    useEffect(() => {
        fetch('/api/projects').then(response => response.json()).then(data => setProjects(data.projects))
    }, [])
    return (
        <Fragment>
            {/* <div>All Projects</div>
            <ul>
                <li><Link href="/projects/uno">first project</Link></li>
                <li><Link href="/projects/dos">second project</Link></li>
                <li></li>
            </ul> */}
            <ProjectHeader />
            <ProjectSlider projects={projects} />
            <HelloForm />
        </Fragment>
    )
}


// export async function getStaticProps(){
//     const response = await queryDatabase()
//     console.log(JSON.stringify(response))
//     parsedResponse = JSON.stringify(response)
//     return {props:{dataProps:parsedResponse}}
// }