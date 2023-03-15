import Link from 'next/link'

import Header from '../components/home/header'
import AboutSection from '../components/home/about-section'

export default function MainPage() {
    return (
        <div>
            <h1>VICTOR URIBE</h1>
            <ul>
                <Link href='/contact' >contact </Link>
                <Link href='/projects' >projects </Link>
                <Link href='/about' >about </Link>
                <Link href='/blog'>blog </Link>
            </ul>
            <Header />
            <AboutSection/>
        </div>
    )
}