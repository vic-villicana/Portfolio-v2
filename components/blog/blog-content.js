import classes from './event-content.module.css';

export default function BlogContent(props){
    return (
        <>
                <section className={classes.content}>
                    {props.children}
                </section>
        </>
    )
}