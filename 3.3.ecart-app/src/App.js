import React, {useState} from "react"
import PT from "prop-types"
import Cart from "./Cart"
import Inventory from "./Inventory"
import * as R from "./utils"

export default function App() {
  let [cart, setCart] = useState({})
  let [inventory, setInventory] = useState(
    {
      "1": {
        id: "1",
        title: "Apple",
        price: 10,
        quantity: 12,
      },
      "2": {
        id: "2",
        title: "Orange",
        price: 8,
        quantity: 20,
      },
      "3": {
        id: "3",
        title: "Melon",
        price: 20,
        quantity: 5,
      },
    }, // {{id: String, title: String, price: Number, quantity: Number}}
  )

  let buy = (id, quantity = 1) => {
    // TODO disallow to buy more than in inventory?
    setCart(
      {
        ...cart,
        [id]: (id in cart) ? cart[id] + quantity : Math.max(quantity, 0),
      }
    )
  }

  let checkout = () => {
    // TODO disallow to checkout more than in inventory?
    setCart({})
    setInventory(
      R.mapObjIndexed((_, id) => {
        return {...inventory[id], quantity: inventory[id].quantity - (cart[id] || 0)}
      }, inventory)
    )
  }

  return <div className="p-3">
    <h1 className="h3">Ecart App</h1>
    <Cart cart={cart} inventory={inventory} buy={buy} checkout={checkout}/>
    <hr/>
    <Inventory cart={cart} inventory={inventory} buy={buy}/>
    <hr/>
    <div>
      <h4 className="h6">Feature Ideas</h4>
      <ul>
        <li>
          Show a "Thank you" message after a checkout
        </li>
        <li>
          Add a "Remove" button to the Cart
        </li>
        <li>
          Add product images
        </li>
      </ul>
    </div>
  </div>
}
