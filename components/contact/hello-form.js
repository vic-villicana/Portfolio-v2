import Button from '../ui/Button'
import classes from './hello-form.module.css'

export default function ContactForm (){
    return(
        <section className={classes.formSection}>
            <div className={classes.heading}>
                <h1>Have a Project in Mind? <br></br> Lets collaborate!</h1>
            </div>
            <form className={classes.form} >
                <h2>Say Hi!</h2>
                <div className={classes.control}>
                    <label htmlFor="name"></label>
                    <input name="name" type='text' placeholder="Name" />
                </div>
                <div className={classes.control}>
                    <label htmlFor="email"></label>
                    <input name="email" type='text' placeholder="Email" />
                </div>
                <div className={classes.control}>
                    <label htmlFor="textarea"></label>
                    <textarea  name="textarea" type='text' placeholder="How can I help?" />
                </div>

                <Button>Submit</Button>
            </form>
        </section>
    )
}