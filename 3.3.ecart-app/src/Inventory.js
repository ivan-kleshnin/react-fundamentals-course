import React from "react"
import PT from "prop-types"
import * as R from "./utils"

export default function Inventory({cart, inventory, buy}) {
  let products = R.sortBy(R.prop("title"))(Object.values(inventory))
  return <div>
    <h3 className="h4">Inventory</h3>
    <div>
      {!products.length ? <p><i>No products available.</i></p> : (
        products.map(product =>
          <Item key={product.id} cart={cart} product={product} buy={buy}/>
        )
      )}
    </div>
  </div>
}

Inventory.propTypes = {
  inventory: PT.object.isRequired,
  cart: PT.object.isRequired,
  buy: PT.func.isRequired,
}

function Item({cart, product, buy}) {
  let selected = cart[product.id] || 0
  let left = product.quantity - selected
  return <div className="my-2">
    <button className="btn btn-outline-primary btn-sm" onClick={_ => buy(product.id, 1)} disabled={!left ? true : null}>
      Buy
    </button>
    {" "}
    {product.title} – ${product.price}
    {" "}
    ({selected} selected, {left} in stock)
  </div>
}

Item.propTypes = {
  cart: PT.object.isRequired,
  product: PT.object.isRequired,
  buy: PT.func.isRequired,
}

