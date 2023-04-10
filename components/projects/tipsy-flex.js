import Image from 'next/image'
import {Fragment} from 'react'
import classes from './tipsy-flex.module.css'
export default function TipsyFlex(){
    return(
        <Fragment>
            <div className={classes.proInfo}>
                <div className={classes.proInfoContainer}>
                    <div className={classes.bs2}>
                        <h2>A Static Mobile First Webpage</h2>
                        <p>
                            Tipsy Bars main focus was to have a website that represented the brand well while also having the ability to process form data. With the main objective being to inform people of the services and handle form requests, this type of website is very straight forward to build, as no user has the need for dynamic content. Even with this in mind I decided to code all of the back-end myself instead relying on a third party.
                        </p>
                    </div>
                    <Image src="/images/tipsyscreentwo.png" height="275" width="500" alt=""  />
                </div>
                <div className={`${classes.respo} ${classes.proInfoContainer}`}>    
                <div className={`${classes.imgContainer}`}>
                <img src="/images/screentipsytwo.png" alt="" height="135" width="85"/>
                <img src="/images/screentipsyone.png" alt="" height="135" width="210"/>
                <img src="/images/tipsyscreentwo.png" alt="" height="160" width="260"/>      
                <img src="/images/tipsyscreenone.png" alt="" height="510" width="285"/>
            </div>
            <div className={classes.bs3}>
                <h2>Responsive For Every Device</h2>
                <p>
                    One of the most important aspects of web design is being able to design a website to render well on a variety of devices, from the largest desktop screens to the small screens of any smartphone. Responsive design ensures the user has a consistent experience no matter what device they browse on.
                </p>
                <br></br>
                <p>
                    With the emergence of mobile browsing making up more than 50% of all web browsing, I decided to take a mobile first approach instead of the common approach of initially designing for the desktop. The process was a little diffrent considering the compact nature of mobile design so lets see how it all went down.    
                </p>
                </div>
            </div> 
        </div>
      </Fragment>
    )
}







