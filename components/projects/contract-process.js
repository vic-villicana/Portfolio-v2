import classes from './contract-process.module.css'
export default function ContractProcess(){
    return(
        <div className={classes.mainContainer}>
            <div className={classes.processTitle}>
                <h2>The Benefits of Blockchain</h2>
            </div>
            <div className={classes.processContainer}>
            <div className={classes.rowProcess}>
                    <div className={classes.item}>
                        <h2>Decentralization</h2>
                        <p>Blockchain apps or Dapps are free from the control and interference of a single authority, it’s very difficult for anyone individual or government to control or restrict access to the dapp</p>
                    </div>
                    <div className={classes.item}>
                        <h2>Reliability</h2>
                        <p>Existing on a P2P network of computers, it does not rely on a single point of failure like a hosting server. This ensures no downtime or restrictions.</p>
                    </div>
                    <div className={classes.item}>
                        <h2>Power to the User</h2>
                        <p>Dapps are open source allowing users to contribute to the exosystem. The lack of a central authority allows users to take ownership of their data to do with it as they wish.</p>
                    </div>
                </div>

            </div>
            
        </div>
    )
}