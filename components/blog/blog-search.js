import { useRef } from 'react'
import Button from '../ui/Button'
import classes from './blog-search.module.css'
export default function BlogSearch(props) {
    const catRef = useRef()

    function formHandler(e) {
        e.preventDefault()
        const theValue = catRef.current.value
        props.onSearch(theValue)
    }

    return(
        <form className={classes.form} onSubmit={formHandler}>
            <div className={classes.control}>
                <label htmlFor="category">Category</label>
                <select id="category" placeholder='category' ref={catRef}>
                    <option value="productivity">productivity</option>
                    <option value="development">development</option>
                    <option value="blockchain">blockchain</option>
                </select>
            </div>
            <Button >find post</Button>
        </form>

    )
}