import Link from 'next/link'
export default function BlogLinks() {
    return (
        <section className={'classes'}>
            <ul>
                <li>
                    <Link href='/blog/e1'>first post </Link>
                </li>
                <li>
                    <Link href='/blog/e2'>second post </Link>
                </li>
                <li>
                    <Link href='/blog/e3'>third post </Link>
                </li>
            
            
            </ul>
            
        </section>

    )
}