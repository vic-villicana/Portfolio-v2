import classes from './footer.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className={classes.footerf}>
            <div className={classes.fLine}></div>
            <div className={classes.footer}>
                <div className={classes.iconGroup}>
                    <Link href="https://www.linkedin.com/in/victor-uribe-v/">
                        <Image className={classes.fIcon}src={'/images/ionicons_linkedin.svg'} alt="" height={45} width={45}/>
                    </Link>
                    <Link href="https://github.com/vic-villicana">
                        <Image className={classes.fIcon}src={'/images/ionicons_github.svg'} alt="" height={45} width={45}/>
                    </Link>
                </div>
                <div className={classes.trademark}>
                    <p> Victor Uribe &copy; all rights reserved</p>
                </div>
            </div>
        </footer>

    )
}