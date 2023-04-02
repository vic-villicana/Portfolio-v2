import Button from '../ui/Button'
import {useRef} from 'react'
import classes from './contact-form.module.css'


export default function ContactForm() {

    const nameRef = useRef()
    const emailRef = useRef()
    const messageRef = useRef()

    function handleSubmit(e) {
        e.preventDefault()  
        const submitObj = {
            name:nameRef.current.value,
            email:emailRef.current.value,
            message:messageRef.current.value
        }

        fetch('api/contact', {
            method:"POST",
            body:JSON.stringify(submitObj),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((data) => data.json())
        .then(data => console.log(data))
    }

    return (
        <section className={classes.formSection}>
            <form className={classes.form} onSubmit={handleSubmit}>
                <h2>Contact Me!</h2>
                <div className={classes.control}>
                    <label htmlFor="name"></label>
                    <input name="name" type='text' placeholder="Name" ref={nameRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="email"></label>
                    <input name="email" type='text' placeholder="Email" ref={emailRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="textarea"></label>
                    <textarea  name="textarea" type='text' placeholder="How can I help?" ref={messageRef}/>
                </div>

                <Button>Submit</Button>
            </form>
        </section>
        
    )
}