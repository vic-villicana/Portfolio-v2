import Link from 'next/link'
import classes from './project-slide.module.css'

export default function ProjectSlideV2() {
    return(
            <div className={classes.slide}>

                <div className={classes.project}>
                <div className={classes.slide} >
                        <div className={classes.content}>
                            <h2>Juizy Juize Tacos</h2>
                            <h2>-</h2>
                            <p>
                                Juicy Juize Tacos is a catering service and pop-up food
                                stand that primarily serves Los Angeles and the San Fernando 
                                Valley. This project primarily focuses on the food stand and 
                                how to make ordering faster, easier, more stream-lined.
                            </p>
                            <div className={classes.btn}>
                                <Link href="/projects/Juizy">View Project</Link>
                            </div>
                        </div>
                    </div>
                    <img className={classes.PJpicture} src="/images/sign.jpg" alt="" />
                    
                </div>
                
            </div>

    )
}

