import BlogCard from "../BlogCard/BlogCard"
import classes from "./blog.module.css"
import Image from "./imageOne.jfif"




export default function Blog() {
  return (
    <section className={classes.blogWrap}>
      <div className={classes.header}>
        <h2>Our Blog </h2>
        <p>Our Recent Posts</p>
      </div>
      <div className={`${classes.postWrap} d-flex justify-content-between`}>
        <BlogCard image={Image} date={'23 Nov, 2023'} title={'A Peek Behind the Cheesecake Curtain'} detail={'Step into our cheesecake haven, where the magic unfolds behind the scenes, whisking dreams into reality. Our kitchen is a symphony and very...'}/>
      </div>
    </section>
  )
}