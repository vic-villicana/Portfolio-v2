import Link from 'next/link'
import {useEffect, useState} from 'react'
import ProjectSlider from '../../components/projects/project-slider'
import ProjectHeader from '../../components/projects/project-header'
import ContactForm from '../../components/home/contact-form'
import Footer from '../../components/layout/footer'
import NavBar from '../../components/layout/navbar'


export default function Projects(props) {
    // console.log(props)
    const [projects, setProjects] = useState([])
    useEffect(() => {
        fetch('api/projects').then(response => response.json()).then(data => setProjects(data.projects))
    }, [])
    return (
        <div>
            {/* <div>All Projects</div>
            <ul>
                <li><Link href="/projects/uno">first project</Link></li>
                <li><Link href="/projects/dos">second project</Link></li>
                <li></li>
            </ul> */}
            <ProjectHeader />
            <ProjectSlider projects={projects} />
            <ContactForm />
        </div>
    )
}


// export async function getStaticProps(){
//     const response = await queryDatabase()
//     console.log(JSON.stringify(response))
//     parsedResponse = JSON.stringify(response)
//     return {props:{dataProps:parsedResponse}}
// }