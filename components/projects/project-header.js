import classes from './project-header.module.css'
import Link from 'next/link'
export default function ProjectHeader(){
    return(
        <div className={classes.PJheader}>
            <div className={classes.headerImage}>
                <img className={classes.picture} src="/images/design.jpg" alt="some picture of success"/>
            </div>
            <div className={classes.intro}>
                <div className={classes.PJtext}>
                    <h2>Building Your Future</h2>
                    <p>
                        Duis aute irure dolor in reprehenderit in 
                        voluptate velit esse cillum dolore eu fugiat 
                        nulla pariatur. Excepteur sint occaecat cupidatat 
                        non proident.
                    </p>
                </div>
                <div className={classes.hollowBtn}>
                    <Link href="/contact">Lets Build!</Link>
                </div>
            </div>
        </div>
    )
}