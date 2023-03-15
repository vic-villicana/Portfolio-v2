import classes from './header.module.css'

export default function Home() {
    return(
        <header className={classes.header}>
            <div className={classes.pip}>
                <div className={classes.heroBox}>
                    <div>
                        <h1>
                            Victor
                            <br></br>
                            Uribe
                        </h1>
                    </div>
                </div>
            </div>
        </header>
    )
}