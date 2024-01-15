import classes from "./blog.module.css"




export default function Blog() {
  return (
    <section className={classes.blogWrap}>
      <div className={classes.header}>
        <h2>Our Blog </h2>
        <p>Our Recent Posts</p>
      </div>
      <div className={classes.postWrap}>

      </div>
    </section>
  )
}