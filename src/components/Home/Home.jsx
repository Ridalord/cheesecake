import Blog from "../Blog/Blog";
import Footer from "../Footer/Footer";
import Landing from "../Landing/Landing";
import Menu from "../Menu/Menu";




export default function Home() {
  return (
    <>
      {/* <h1>Home</h1> */}
      <Landing />
      <Menu />
      <Blog/>
      <Footer />
    </>
  )
}