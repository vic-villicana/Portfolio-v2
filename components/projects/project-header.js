import classes from './project-heading.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function ProjectHeader(){
    return(
<div className={`${classes.headerTwo} ${classes.juiceHead}`}>
        <Image src="/images/future.jpg" alt="futuristic" fill object-fit="cover" /> 
        <div className={`${classes.void} ${classes.v2}`}>
        <div className={classes.intro}>
                <div className={classes.PJtext}>
                    <h2>Current Projects</h2>
                    <p>
                        Here you will find some of my most
                        favorite projects. Static websites, 
                        Single Page Applications, and
                        decentralized apps (or Dapps).
                        These projects represent the core
                        of my skills in AWS cloud architercture,
                        mobile web app, and full-stack development.

                    </p>
                </div>
                <div className={classes.hollowBtn}>
                    <Link href="/contact">Lets Build!</Link>
                </div>
            </div>
        </div> 
      </div>




    )
}