import classes from './blog-heading.module.css';

export default function BlogHeading(props) {
  const { title } = props;

  return (
    <section className={classes.summary}>
      <h1>{title}</h1>
    </section>
  );
}

