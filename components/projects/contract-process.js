import classes from './contract-process.module.css'
export default function ContractProcess(){
    return(
        <div className={classes.mainContainer}>
            <div className={classes.processTitle}>
                <h2>What i Learned</h2>
            </div>
            <div className={classes.processContainer}>
            <div className={classes.rowProcess}>
                    <div className={classes.item}>
                        <h2>Shorter Load Time</h2>
                        <p>Server-side Rendering and Static Generation, together with Next.js smart data handling, make it possible to build applications that are quick to load and render data.</p>
                    </div>
                    <div className={classes.item}>
                        <h2>Faster Development</h2>
                        <p>AWS Amplify a fully managed CI/CD and hosting service, allows Next.js apps deploy at least 3x faster, helping me deliver changes to production faster.</p>
                    </div>
                    <div className={classes.item}>
                        <h2>Measurable Performance</h2>
                        <p>Next.js provides built-in analytics support for measuring various performance metrics, such as Time to first byte (TTFB) and First contentful paint (FCP)</p>
                    </div>
                </div>

            </div>
            
        </div>
    )
}