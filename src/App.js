import Navbar from  "./components/Navbar"
import Search from "./components/searchbar"
import Products from "./components/products"
import About from "./components/aboutus"
import Footer from "./components/footer"

function App(){
    return(
        <div>
        <Navbar></Navbar>
        <Search></Search>
        <Products></Products>
        <About></About>
        <Footer></Footer>
      </div>
    )
}

export default App