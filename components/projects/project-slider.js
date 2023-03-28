import Link from 'next/link'
import ProjectSlideV2 from './project-slide-v2'
import ProjectSlide from './project-slide'
import classes from './project-slide.module.css'

export default function ProjectSlider() {
    return(
            <div className={classes.slider}>
                <ProjectSlide />
                <ProjectSlideV2 />
                <ProjectSlide />

            </div>

    )

}