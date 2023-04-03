import Link from 'next/link'
import {useEffect, useState} from 'react'
import Header from '../components/home/header'
import AboutSection from '../components/home/about-section'
import ContactForm from '../components/home/contact-form'
import ProjectSlider from '../components/projects/project-slider'
import Footer from '../components/footer/footer'
import NavBar from '../components/navbar/navbar'

export default function MainPage() {

    const [projects, setProjects] = useState([])
    useEffect(() => {
        fetch('api/projects').then(response => response.json()).then(data => setProjects(data.projects))
    }, [])
    return (
        <div>
            {/* <ul>
                <Link href='/contact' >contact </Link>
                <Link href='/projects' >projects </Link>
                <Link href='/blog'>blog </Link>
            </ul> */}
            <NavBar />
            <Header />
            <AboutSection/>
            <ProjectSlider projects={projects} />
            <ContactForm />
            <Footer />
        </div>
    )
}