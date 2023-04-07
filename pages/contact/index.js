import HelloForm from '../../components/contact/hello-form'

export default function Contactme() {

    fetch('api/contact').then(data => data.json()).then(response => console.log(response))
    return(
        <div>
            <HelloForm />
        </div>
    )
}