import classes from './contract-heading.module.css'

export default function ContractHeading() {
    return (
        <div className={`${classes.headerTwo} ${classes.juiceHead}`}>
        <div className={`${classes.void} ${classes.v2}`}>
          <h1>The SmartContract Lottery</h1>
            <p>
                One of my personal projects where i explore the 
                possibilities and limits of blockchain technology. 
                This project focuses on creating a decentralized 
                solution to crowd funding where all users have 
                access to donation details.
            </p>
            <div className={classes.btn}><a href="https://github.com/vic-villicana">GitHub Repo</a></div>
        </div> 
      </div>
    )
}