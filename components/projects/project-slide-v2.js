import Link from 'next/link'
import classes from './project-slide.module.css'

export default function ProjectSlideV2() {
    return(
            <div className={classes.slideContainer}>

                <div className={classes.projectv2}>
                    <img className={classes.PJpicturev2} src="/images/sign.jpg" alt="" />

                    <div className={classes.slidev2} >
                        <div className={classes.contentv2}>
                            <h2>Juizy Juize Tacos</h2>
                            <h2>-</h2>
                            <p>
                                Juicy Juize Tacos is a catering service and pop-up food
                                stand that primarily serves Los Angeles and the San Fernando 
                                Valley. This project primarily focuses on the food stand and 
                                how to make ordering faster, easier, more stream-lined.
                            </p>
                            <div className={classes.btnv2}>
                                <Link href="/projects/Juizy">View Project</Link>
                            </div>
                        </div>
                    </div>
                    
                </div>
                
            </div>

    )
}

