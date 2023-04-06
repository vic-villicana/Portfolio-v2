import classes from './footer.module.css'
import Image from 'next/image'

export default function Footer() {
    return (
        <footer className={classes.footerf}>
            <div className={classes.fLine}></div>
            <div className={classes.footer}>
                <div className={classes.iconGroup}>
                    <Image className={classes.fIcon}src={'images/ionicons_linkedin.svg'} alt="" height={45} width={45}/>
                    <Image className={classes.fIcon}src={'images/ionicons_github.svg'} alt="" height={45} width={45}/>
                </div>
                <div className={classes.trademark}>
                    <p> shawty&reg; all rights reserved</p>
                </div>
            </div>
        </footer>

    )
}