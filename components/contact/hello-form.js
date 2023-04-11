import Button from '../ui/Button'
import classes from './hello-form.module.css'
import {useRef} from 'react'

export default function ContactForm (){

    const nameRef = useRef()
    const emailRef = useRef()
    const messageRef = useRef()
    const serviceRef = useRef()
    const formRef = useRef()

    function submitForm(e) {
        e.preventDefault()
  
        const formData = {
            name: formRef.current.name.value,
            email: formRef.current.email.value,
            message: formRef.current.textarea.value,
            service: formRef.current.service.value

        }

        console.log(formData)
    }

    return(
        <section className={classes.formSection}>
            <div className={classes.heading}>
                <h1>Have a Project in Mind? <br></br> Lets collaborate!</h1>
            </div>
            <form className={classes.form} ref={formRef} onSubmit={submitForm} >
                <div className={classes.radioControl} >
                <p>Im Curious About...</p>
                    <input label="Website" type="radio" name="service" value="Website"  />
                    <input label="UI/UX Design" type="radio" name="service" value="UI/UX Design" />
                    <input label="Cloud Services" type="radio" name="service" value="Cloud Services" />
                    <input label="Other" type="radio" name="service" value="Other" />
                </div>
                <div className={classes.control}>
                    <label htmlFor="name"></label>
                    <input name="name" type='text' placeholder="Name"  />
                </div>
                <div className={classes.control}>
                    <label htmlFor="email"></label>
                    <input name="email" type='text' placeholder="Email"  />
                </div>
                <div className={classes.control}>
                    <label htmlFor="textarea"></label>
                    <textarea  name="textarea" type='text' placeholder="How can I help?"  />
                </div>

                <Button>Submit</Button>
            </form>
        </section>
    )
}