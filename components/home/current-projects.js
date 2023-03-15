import classes from './current-projects.module.css'

export default function CurrentProjects (){
    return (
        <section className={classes.theSlider}>
            <div className={classes.slider}>
                <div className={classes.slide}>
                    <div className={classes.content}>
                        <h2>Juicy Juize</h2>
                        <h2>-</h2>
                        <p>
                            Juicy Juize Tacos is a catering service and 
                            pop-up food stand that primarily serves 
                            Los Angeles and the San Fernando Valley. 
                            This project primarily focuses on the food 
                            stand and how to make ordering faster, easier, 
                            more stream-lined.
                        </p>
                    </div>
                </div>
            </div>
            
        </section>
    )
}