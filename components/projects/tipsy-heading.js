import classes from './tipsy-heading.module.css'
import Image from 'next/image'
export default function TipsyHeading() {
    return (
        <div className={`${classes.headerTwo} ${classes.juiceHead}`}>
            <Image src="/images/bar-bartender.jpg" alt="taco sign" fill object-fit="cover" /> 
        <div className={`${classes.void} ${classes.v2}`}>
            <Image src={"/images/tipsylogowhite.svg"} alt="company logo" width={225} height={75} />
            <p>
                A mobile local bartending service based out of Los Angeles, 
                as a service based company they need a website that is able 
                to inform the user about the type of services they provide 
                and while also being able to handle form requests from 
                prospective clients.
            </p>
            <div className={classes.btn}><a href="https://github.com/vic-villicana/tipsy">GitHub Repo</a></div>
        </div> 
      </div>
    )
}