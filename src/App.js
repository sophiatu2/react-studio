import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";
import CartItem from "./components/CartItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0.0);

  const addToCart = (item) => {
    console.log(item.name);
    console.log(cart);
    setCart([...cart, item]);
    setTotal(total + item.price);
  };

  return (
    <div className="background">
      <div className="App">
        <h1>A Butter Place</h1>
        <h2>Menu</h2>
        <div className="row-container">
          {/* TODO: personalize your bakery (if you want) */}
          {bakeryData.map(
            (
              item,
              index // TODO: map bakeryData to BakeryItem components
            ) => (
              <BakeryItem key={index} item={item} onClick={addToCart} /> // replace with BakeryItem component
            )
          )}
        </div>
        <div className="col-container">
          <h2>Cart</h2>
          {/* TODO: render a list of items in the cart */}
          {cart.map((item, index) => (
            <p>
              {item.name} ${item.price}
            </p>
          ))}
          <h2>Total: {total}</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
