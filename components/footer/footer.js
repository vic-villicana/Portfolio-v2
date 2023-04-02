import classes from './footer.module.css'

export default function Footer() {
    return (
        <footer className={classes.footerf}>
            <div className={classes.fLine}></div>
            <div className={classes.footer}>
                <div className={classes.iconGroup}>
                    <img className={classes.fIcon}src={'images/ionicons_linkedin.svg'} alt="" />
                    <img className={classes.fIcon}src={'images/ionicons_github.svg'} alt="" />
                </div>
                <div className={classes.trademark}>
                    <p> shawty&reg; all rights reserved</p>
                </div>
            </div>
        </footer>

    )
}