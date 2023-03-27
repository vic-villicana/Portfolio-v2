import classes from './project-header.module.css'

export default function ProjectHeader(){
    return(
        <div className={classes.PJheader}>
            <img className={classes.picture} src="/images/design.jpg" alt="some picture of success"/>
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

            </div>
        </div>
    )
}