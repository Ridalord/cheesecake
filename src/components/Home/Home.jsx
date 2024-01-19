import Blog from "../Blog/Blog";
import Footer from "../Footer/Footer";
import Landing from "../Landing/Landing";
import Menu from "../Menu/Menu";




export default function Home() {
  return (
    <>
      <Landing />
      <Menu />
      <Blog/>
      <Footer />
    </>
  )
}