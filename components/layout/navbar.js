import Link from "next/link"
import {useState} from 'react'
import classes from './navbar.module.css'
import Image from 'next/image'

export default function Navbar() {

   const [active, setActive] = useState(false)

   function setTheActive(theState){
        setActive(theState)
   }
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
                    <Link href='#about'>about </Link>
                </li>
                <li>
                    <Link href='/contact' >contact </Link>
                </li>
            </div>
            <div className={classes.hamburger}>
                <Image className={classes.close} src="/images/close.svg" alt="closed" height={45} width={45} />
                <div className={classes.hIcon} onClick={() => setTheActive(!active)}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className={  active ? `${classes.navActive} ${classes.hamLinks}` : `${classes.hamLinks} ${classes.nonActive}` }>
                    <li>
                        <Link href='/projects' >projects </Link>
                    </li>
                    <li>
                        <Link href='#about'>about </Link>
                    </li>
                    <li>
                        <Link href='/contact' >contact </Link>
                    </li>
                </div>
            </div>
        </div>

    )
}