import Link from 'next/link'
import classes from './project-slide.module.css'
import Image from 'next/image'

export default function ProjectSlideV2(props) {
    console.log(props)
    return(
            <div className={classes.slideContainer}>

                <div className={classes.projectv2}>
                    <Image className={classes.PJpicturev2} src={props.image} alt={props.title} height={285} width={425}/>
                    <div className={classes.slidev2} >
                        <div className={classes.contentv2}>
                            <h2>{props.title}</h2>
                            <div className={classes.pLine}></div>
                            <p>
                                {props.description}
                            </p>

                        </div>
                    </div>
                    <div className={classes.btnv2}>
                        <Link href={`/${props.id}`}>View Project</Link>
                    </div>
                </div>
                
            </div>

    )
}

