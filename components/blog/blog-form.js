import classes from './blog-form.module.css'
export default function BlogForm() {
    return (
        <form className={classes.form}>
            <div className={''}>
                <div className={classes.inputSpace}>
                    <input name="blogTitle" type="text" placeholder="Post Title" />
                </div>
                <div className={`${classes.inputSpace} ${classes.textInputHeight}`}>
                    <input className={classes.textInputHeight} name="BlogBody" type="textarea" placeholder="Post Body" />
                </div>
            </div>

        </form>
    )
}