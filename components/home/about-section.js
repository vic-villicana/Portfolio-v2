import classes from './about-section.module.css'
import Image from 'next/image'

export default function AboutSection(){
    return (
        <section className={classes.aboutMe} id="about">
            <Image className={classes.picture} src="/images/portfolio-pic.jpg" alt="face" height={600} width={400} />
            <div className={classes.bio}>
                <div className={classes.bioSquare}>
                    <h2>Greetings!</h2>
                    <p>
                        Im a Web Developer and Cloud Architect 
                        from Los Angeles and I love having the power to create robust 
                        yet simple apps that can become a game changer for local 
                        businesses. Building UIs in React, handling user data 
                        with Node, deploying applications to AWS and the occasional 
                        static website are some of the ways I like to help people 
                        and small businesses achieve thier goals. 
                    </p>
                    <div className={classes.specialty}>
                    {/* <h2>Whats my Method?</h2> */}
                    <p>
                        Capturing the users attention, while staying true to 
                        the brand and the nature of the clients identity is 
                        one of my core standards when building websites. 
                        Endless cups of Premium Japanese Green Tea is also 
                        a standard part of my process. 
                    </p>
                    <Image className={classes.certified} src="/images/aws-certified-solutions-architect-associate.png" alt="aws-badge"  height={110} width={110}/>

                </div>
                </div>

            </div>
        </section>
    )
}