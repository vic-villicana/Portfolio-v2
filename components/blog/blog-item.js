import Link from 'next/link'
import classes from './blog-item.module.css'

export default function BlogItem(props) {

    const {title, id, image, date, preview} = props
    const theDate = new Date(date).toLocaleDateString('en-us', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })

    const  exploreLink = `/blog/${id}`

    return(
        <li className={classes.item}>
            <img alt={title} src={'/' + image} />
            <div className={classes.content}>
                <div className={classes.summary}>
                    <h2>{title}</h2>
                    <div className={classes.date}>
                        <time>{theDate}</time>
                    </div>
                    <div className={classes.address}>
                        {preview}
                    </div>
                </div>

                <div className={classes.actions}>
                    <Link href={exploreLink}>Read</Link>
                </div>
            </div>
        </li>
    )
}