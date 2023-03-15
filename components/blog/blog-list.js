import BlogItem from '../blog/blog-item'
import classes from './blog-list.module.css'

export default function BlogList(props) {
    const {items} = props
    return(
        <ul className={classes.list}>
            {items.map(item => <BlogItem key={item.id} image={item.image} title={item.title} date={item.date} id={item.id} preview={item.preview}/>)}
        </ul>
    )
}