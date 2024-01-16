import BlogCard from "../BlogCard/BlogCard";
import classes from "./blog.module.css";
import Image from "./imageOne.jfif";
import ImageTwo from "./imageTwo.jfif"
import ImageThree from "./imageThree.jfif"

export default function Blog() {
  const blogItems = [
    {
      id: 1,
      image: Image,
      date: '23 Nov, 2023',
      title: 'A Peek Behind the Cheesecake Curtain',
      detail: 'Step into our cheesecake haven, where the magic unfolds behind the scenes, whisking dreams into reality. Our kitchen is a symphony and very...'
    },
    {
      id: 2,
      image: ImageTwo,
      date: '18 July, 2023',
      title: 'Low-Sugar & Gluten-Free Cheesecakes',
      detail: "Welcome to our guilt-free indulgence zone, where we're redefining the art of cheesecake with our delectable low- sugar..."
    },
    {
      id: 3,
      image: ImageThree,
      date: '1 January, 2024',
      title: 'Sweet Words - Customer Reviews of Cheesecakes',
      detail: 'Indulge in the rich tapestry of heartfelt stories within "Sweet Words." This curated collection of customer reviews offers a glimpse into the joy...'
    },
  ];

  return (
    <section className={classes.blogWrap}>
      <div className={classes.header}>
        <h2>Our Blog</h2>
        <p>Our Recent Posts</p>
      </div>
      <div className={`${classes.postWrap} d-flex justify-content-between`}>
        {blogItems.map((item) => (
          <BlogCard
            key={item.id}
            image={item.image}
            date={item.date}
            title={item.title}
            detail={item.detail}
          />
        ))}
      </div>
    </section>
  );
}
