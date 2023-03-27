import Link from 'next/link'
import ProjectSlide from '../../components/projects/project-slide'
import ProjectSlider from '../../components/projects/project-slider'
import ProjectHeader from '../../components/projects/project-header'
import ContactForm from '../../components/home/contact-form'
import {getCurrentProjects} from '../../dummy-data'

import fs from 'fs/promises'
import path from 'path'

export default function Projects(props) {
    console.log(props)
    return (
        <div>
            {/* <div>All Projects</div>
            <ul>
                <li><Link href="/projects/uno">first project</Link></li>
                <li><Link href="/projects/dos">second project</Link></li>
                <li></li>
            </ul> */}
            <ProjectHeader />
            <ProjectSlider  />
            <ContactForm />

        </div>
    )
}
async function getData(){
    const filePath = path.join(process.cwd(), "data", "dummy-data.json")
    const readData = await fs.readFile(filePath)
    const parsed = JSON.parse(readData)
    return parsed
}
export async function getStaticProps() {
    const projects = await getData()
    return {
        props:{
            projects:projects.projects
        }
    }
}