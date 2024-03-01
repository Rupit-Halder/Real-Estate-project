import About from "./components/about/About";
import Banner from "./components/banner/Banner";
import Menu from "./components/menu/Menu"
import 'bootstrap/dist/css/bootstrap.min.css';
import Residin from "./components/residen/Residin";
import { Blog } from "./components/blog/Blog";
import Footer from "./components/footer/Footer";
import Last from "./components/footer last/Last";


function App() {


  return (
    <>
     <Menu/>
     <Banner/>
     <About/>
     <Residin/>
     <Blog/>
     <Footer/>
     <Last/>
    </>
  )
}

export default App
