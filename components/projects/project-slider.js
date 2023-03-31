import Link from 'next/link'
import ProjectSlideV2 from './project-slide-v2'
import ProjectSlide from './project-slide'
import classes from './project-slide.module.css'

export default function ProjectSlider(props) {
    console.log(props)

    const allProjects = props.projects.map(project => <ProjectSlideV2 key={project.pjid} id={project.pjid} title={project.title} description={project.description} image={project.image} />)
    console.log(allProjects)
    return(
        <section className={classes.sliderSection}>
            <div className={classes.sliderHeading}>
                <h2>Current Works</h2>
            </div>
            <div className={classes.slider}>
                {allProjects}
            </div>

        </section>

    )

}