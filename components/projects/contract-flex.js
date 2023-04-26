import Image from 'next/image'
import classes from './contract-flex.module.css'


export default function Contractflex() {
    return (
        <div className={classes.proInfo}>
            <div className={`${classes.proInfoContainer} ${classes.respo}`}>    
                <div className={`${classes.imgContainer}`}>
                    <div className={classes.imagine}>
                        <Image src="/images/contract.png" alt="" height="350" width="640" unoptimized />
                    </div>
                    <div className={`${classes.bioSquare} ${classes.bs-5}`} >
                        <h2>Decentralized Lottery</h2>
                        <p>
                            One of the most important aspects of Blockchain technology is having the ability to 
                            verify exactly what goes on behind the scenes of a decentralized application.
                            In this example we have the ability to verify that the selected winner is in-fact 
                            selected at random. Eliminating the problem the mcdonalds monopoly game had where 
                            winners of the game paid for winning tickets.
                        
                        </p>
                        <br></br>
                        {/* <p>
                        With the emergence of mobile browsing making up more than 50% of all web browsing, I decided to take a mobile first approach instead of the common approach of initially designing for the desktop. The process was a little diffrent considering the compact nature of mobile design so lets see how it all went down.    
                        </p> */}
                    </div>
                </div>
            </div> 
            <div className={classes.pLine}></div>

        </div>

    )
}