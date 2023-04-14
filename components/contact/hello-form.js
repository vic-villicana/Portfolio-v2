import Button from '../ui/Button'
import classes from './hello-form.module.css'
import {useRef, useState, useEffect} from 'react'

export default function ContactForm (){

    const formRef = useRef()
    const [errors, setErrors] = useState({})

    useEffect(() => {
        console.log('useEffect running')
    }, [errors])

    function validate(data){
        const errorObj = {}
        if(!data.name) errorObj.name = 'name required'
        if(!data.email) errorObj.email = 'email required'
        if(!data.message) errorObj.message = 'Ask us something!'
        setErrors(errorObj)
        return errorObj
    }

    function submitForm(e) {
        e.preventDefault()
  
        const formData = {
            name: formRef.current.name.value,
            email: formRef.current.email.value,
            message: formRef.current.textarea.value,
            service: formRef.current.service.value

        }
        const isErrors = validate(formData)
        if(Object.keys(isErrors).length === 0){
            console.log(errors)
            fetch('api/contact', {
                method:"POST",
                body:JSON.stringify(formData),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then((data) => data.json())
            .then(data => console.log(data))
        }
        
    }

    return(
        <section className={classes.formSection}>
            <div className={classes.heading}>
                <h1>Have a Project in Mind? <br></br> Lets collaborate!</h1>
            </div>
            <form className={classes.form} ref={formRef} onSubmit={submitForm} >
                <div className={classes.radioControl} >
                <p>Im intrested In...</p>
                    <input label="Website" type="radio" name="service" value="Website"  />
                    <input label="UI/UX Design" type="radio" name="service" value="UI/UX Design" />
                    <input label="Cloud Services" type="radio" name="service" value="Cloud Services" />
                    <input label="Other" type="radio" name="service" value="Other" />
                </div>
                <div className={classes.control}>
                    <label htmlFor="name"></label>
                    <input name="name" type='text' placeholder="Name"  />
                    <span>{errors.name}</span>
                </div>
                <div className={classes.control}>
                    <label htmlFor="email"></label>
                    <input name="email" type='text' placeholder="Email"  />
                    <span>{errors.email}</span>
                </div>
                <div className={classes.control}>
                    <label htmlFor="textarea"></label>
                    <textarea  name="textarea" type='text' placeholder="How can I help?"  />
                    <span>{errors.message}</span>
                </div>

                <Button>Submit</Button>
            </form>
        </section>
    )
}