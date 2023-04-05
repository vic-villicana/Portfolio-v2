import {Fragment} from 'react'
import NavBar from './navbar'
import Footer from './footer'
export default function Layout(props){
    return(
        <Fragment>
            <NavBar/>
            {props.children}
            <Footer />
        </Fragment>
    )
}