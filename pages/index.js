import Link from 'next/link'

import Header from '../components/home/header'
import AboutSection from '../components/home/about-section'
import ContactForm from '../components/home/contact-form'
import Footer from '../components/footer/footer'

export default function MainPage() {
    return (
        <div>
            <ul>
                <Link href='/contact' >contact </Link>
                <Link href='/projects' >projects </Link>
                <Link href='/blog'>blog </Link>
            </ul>
            <Header />
            <AboutSection/>
            <ContactForm />
            <Footer />
        </div>
    )
}