import classes from './project-heading.module.css'

export default function ProjectHeading() {
    return (
        <div className={`${classes.headerTwo} ${classes.juiceHead}`}>
        <div className={`${classes.void} ${classes.v2}`}>
          <h1>Juicy Juize Tacos</h1>
            <p>
              Juicy Juize Tacos is a catering service that primarily serves 
              Los Angeles and the San Fernando  Valley. To build an effective 
              web experience for customers and the business itself i have to 
              make sure setting appointments and placing orders is simple and 
              effective.
            </p>
            <div className={classes.btn}><a href="https://github.com/vic-villicana/juicy">GitHub Repo</a></div>
        </div> 
      </div>
    )
}