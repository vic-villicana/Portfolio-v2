import Button from '../ui/Button'
import classes from './contact-form.module.css'
export default function ContactForm() {

    function handleSubmit(e) {
        e.preventDefault()
        console.log('submitted')
    }
    return (
        <form className={classes.form} onSubmit={handleSubmit}>
            <h2>Contact Me!</h2>
                <div className={classes.control}>
                    <label htmlFor="name"></label>
                    <input name="name" type='text' placeholder="Name"/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="email"></label>
                    <input name="email" type='text' placeholder="Email"/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="textarea"></label>
                    <textarea  name="textarea" type='text' placeholder="How can I help?"/>
                </div>

            <Button>Submit</Button>
        </form>
    )
}