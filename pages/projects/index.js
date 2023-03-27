import Link from 'next/link'
import ProjectSlide from '../../components/projects/project-slide'
import ProjectSlider from '../../components/projects/project-slider'
import ProjectHeader from '../../components/projects/project-header'
import ContactForm from '../../components/home/contact-form'


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
