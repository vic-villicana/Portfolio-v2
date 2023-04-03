import Link from "next/link"
import classes from './navbar.module.css'

export default function Navbar() {
    return(
        <div className={classes.navbar}>
            <div className={classes.logo}>
                <Link href='/'>
                    <img src="/images/logo.svg" alt="thunderbolt" />
                </Link>
            </div>
            <div className={classes.links}>
                <li>
                    <Link href='/projects' >projects </Link>
                </li>
                <li>
                    <Link href='/blog'>blog </Link>
                </li>
                <li>
                    <Link href='/contact' >contact </Link>
                </li>
            </div>
        </div>

    )
}