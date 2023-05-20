import classes from './contract-heading.module.css'
import Image from 'next/image'
export default function ContractHeading() {
    return (
        <div className={`${classes.headerTwo} ${classes.juiceHead}`}>
        <Image src="/images/future2.jpg" alt="futuristic" fill object-fit='cover'/>
        <div className={`${classes.void} ${classes.v2}`}>
          <h1>The SmartContract Lottery</h1>
            <p>
                One of my personal projects where I explore the 
                possibilities and limits of blockchain technology. 
                This project focuses on creating a decentralized 
                solution to crowd funding where all users have 
                access to donation details.
            </p>
            <div className={classes.btn}><a href="https://github.com/vic-villicana/Decentralized-Lottery">GitHub Repo</a></div>
        </div> 
      </div>
    )
}