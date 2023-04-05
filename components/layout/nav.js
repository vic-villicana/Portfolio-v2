import Link from "next/link"
import {useState} from 'react'
import classes from './nav.module.css'

export default function Nav(){
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
                     <Link href='/blog'>blog </Link>
                 </li>
                 <li>
                     <Link href='/contact' >contact </Link>
                 </li>
             </div>
             <div className={classes.hamburger}>
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
                         <Link href='/blog'>blog </Link>
                     </li>
                     <li>
                         <Link href='/contact' >contact </Link>
                     </li>
                 </div>
             </div>
         </div>
 
     )
}