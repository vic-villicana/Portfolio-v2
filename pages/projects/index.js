import Link from 'next/link'
export default function Projects() {

    return (
        <div>
            <div>All Projects</div>
            <ul>
                <li><Link href="/projects/uno">first project</Link></li>
                <li><Link href="/projects/dos">second project</Link></li>
                <li></li>
            </ul>
        </div>
    )
}