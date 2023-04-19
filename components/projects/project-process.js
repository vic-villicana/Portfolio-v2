import classes from './project-process.module.css'
export default function ProjectProcess(){
    return(
        <div className={classes.mainContainer}>
            <div className={classes.processTitle}>
                <h2>How I Deliver</h2>
            </div>
            <div className={classes.processContainer}>
            <div className={classes.rowProcess}>
                    <div className={classes.item}>
                        <h2>Reuseability</h2>
                        <p>
                            A ReactJS web application is made up of multiple components, 
                            and each component has its own logic and controls. 
                            These components are responsible for outputting a small, 
                            reusable piece of HTML code which can be reused wherever 
                            you need them.
                        </p>
                    </div>
                    <div className={classes.item}>
                        <h2>Improve Performance</h2>
                        <p>             
                            The React Virtual DOM exists entirely in 
                            memory and is a representation of the web browsers DOM. 
                            Instead of rewriting the entire webpage everytime a change is made,
                            the virtual DOM only updates the elements that are being changed.
                        </p>
                    </div>
                    <div className={classes.item}>
                        <h2>SEO Friendly</h2>
                        <p>
                            Traditional JavaScript frameworks have an issue in dealing with SEO. 
                            NextJS overcomes this problem because NextJS applications can run on the 
                            server, and the virtual DOM will be rendering and returning to the browser as 
                            a regular web page. 
                        </p>
                    </div>
                </div>
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