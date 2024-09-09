import one from "../assets/images/one.jpg"
import two from "../assets/images/two.jpg"
import three from "../assets/images/three.jpg"

function Products(){
    return(
      <div className="products">
      <div className="product-group">
       <img src={one} alt="one"></img>
       <p>Sì by Giorgio Armani: A Captivating Blend of Modern Femininity and Bold Sensuality <br></br>(100ml) </p>
       </div>
       <div className="product-group">
       <img src={two} alt="two"></img>
       <p>N°5 Chanel: The Iconic Essence of Classic Sophistication and Timeless Beauty <br></br>(100ml)</p>
       </div>
       <div className="product-group">
       <img src={three} alt="three"></img>
       <p>Coco Noir Chanel: A Bold, Mysterious Fragrance Embodying Dark, Sensual Elegance <br></br>(100ml)</p>
       </div>
     
      </div>
    )
  }

  export default Products