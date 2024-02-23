import classes from "./menu.module.css"
import ArrowRight from "./arrowRight.svg"
import MenuCard from "../MenuCard/MenuCard"
import BlueberryCheesecake from "./blueberry.png"
import BiscoffCheesecake from "./biscoff.png"
import ChocolateCheesecake from "./chocolate.png"



export default function Menu() {
  const menuItems = [
    {
      id: 1,
      name: 'Blueberry Cheesecake',
      price: 9.00,
      headline: "Blueberry love, cheesecake delight!",
      image: BlueberryCheesecake,
    },
    {
      id: 2,
      name: 'Biscoff Cheesecake',
      price: 11.00,
      headline: "Biscoff adores cheesecake magic",
      image: BiscoffCheesecake
    },
    {
      id: 3,
      name: 'Chocolate Cheesecake',
      price: 10.00,
      headline: "Cherish Chocolate, relish cheesecake magic!",
      image: ChocolateCheesecake
    },
  ]
  return (
    <section className={`${classes.menuContainer} d-flex`}>
      <h2>Our Menu</h2>
      <div className={`${classes.menuWrap} d-flex justify-content-between`}>
        {menuItems.map((item) => (
          <MenuCard
            key={item.id}
            name={item.name}
            price={item.price}
            headline={item.headline}
            image={item.image}
          />
        ))}
      </div>
      <div className="d-flex justify-content-end">
        <span>View More</span>
        <span><img src={ArrowRight} alt="Arrow Right" /></span>
      </div>
    </section>
  );
}  