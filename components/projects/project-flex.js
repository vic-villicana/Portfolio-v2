import classes from './project-flex.module.css'
import Image from 'next/image'

export default function Projectflex() {
    return (
        <div className={classes.proInfo}>
            <div className={`${classes.proInfoContainer} ${classes.respo}`}>    
                <div className={`${classes.imgContainer}`}>
                    <Image src="/images/juicyshot.png" alt="" height="615" width="300" />
                    <div className={`${classes.bioSquare} ${classes.bs-5}`} >
                        <h2>A robust web app hosted on aws</h2>
                        <p>
                        One of the most important aspects of web development is having a robust web
                        app that can scale to the demand of the network/users with no latency. 
                        thankfully, cloud infrastructure like AWS Amplify is specifically built for this 
                        scenario. AWS Amplify allows you to create full-stack apps, frontend UI and backends
                        visually, with authentication, storage, data, and more.
                        </p>
                        <br></br>
                        <p>
                        With the emergence of mobile browsing making up more than 50% of all web browsing, I decided to take a mobile first approach instead of the common approach of initially designing for the desktop. The process was a little diffrent considering the compact nature of mobile design so lets see how it all went down.    
                        </p>
                    </div>
                </div>
            </div> 
            <div className={classes.pLine}></div>

        </div>

    )
}