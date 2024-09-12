import Link from 'next/link'
import {useEffect, useState} from 'react'
import Header from '../components/home/header'
import AboutSection from '../components/home/about-section'
import HelloForm from '../components/contact/hello-form'
import ProjectSlider from '../components/projects/project-slider'
import Footer from '../components/layout/footer'
import NavBar from '../components/layout/navbar'

export default function MainPage() {

    const projects = [
        {
            _id:'juicy',
            title:"Juicy Juize Tacos",
            description: "A full scale Food Ordering App with custom CMS",
            imageUrl:'/images/sign.jpg'
        },
        {
            _id:'contract',
            title:"Decentralized Reward Points System",
            description: "A Stablecoin writin in Solidity that keeps a 1:1 token to $ peg",
            imageUrl:'/images/code-computer-data.jpg'
        },
        {
            _id:'tipsy',
            title:"The Tipsy Bar",
            description: "A customer Facing Business website for local bar that handles post request data and more.",
            imageUrl:'/images/bar-bartender.jpg'
        },

    ]
    // const [projects, setProjects] = useState([])
    useEffect(() => {
        // fetch('api/projects').then(response => response.json()).then(data => setProjects(data.projects))


    }, [])
    return (
        <div>
            {/* <ul>
                <Link href='/contact' >contact </Link>
                <Link href='/projects' >projects </Link>
                <Link href='/blog'>blog </Link>
            </ul> */}
            <Header />
            <AboutSection/>
            <ProjectSlider projects={projects} />
            <HelloForm />
        </div>
    )
}