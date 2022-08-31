import React from "react"
import PT from "prop-types"
import * as R from "./utils"

let countTotal = (cart) => {
  return R.sum(Object.values(cart))
}

let countTotalPrice = (cart, inventory) => {
  return R.sum(Object.keys(cart).map(id => {
    return cart[id] * inventory[id].price
  }))
}

export default function Cart({cart, inventory, buy, checkout}) {
  let products = R.sortBy(R.prop("title"))(Object.keys(cart).map(id => inventory[id]))
  let total = countTotal(cart)
  let totalPrice = countTotalPrice(cart, inventory)

  if (!products.length) {
    return <div>Your cart is empty</div>
  }

  return <div>
    <div>
      {products.map(product =>
        <Item key={product.id} cart={cart} product={product} buy={buy}/>
      )}
    </div>
    <div>
      Total: ${totalPrice}
    </div>
    <button className="btn btn-primary" onClick={checkout} disabled={!total}>
      Checkout
    </button>
  </div>
}

Cart.propTypes = {
  cart: PT.object.isRequired,
  inventory: PT.object.isRequired,
  buy: PT.func.isRequired,
  checkout: PT.func.isRequired,
}

function Item({cart, product, buy}) {
  let selected = cart[product.id] || 0
  let left = product.quantity - selected
  return <div className="my-2">
    <button className="btn btn-outline-primary btn-sm" onClick={_ => buy(product.id, 1)} disabled={!left ? true : null}>
      +1
    </button>
    {" "}
    <button className="btn btn-outline-primary btn-sm" onClick={_ => buy(product.id, -1)} disabled={!selected ? true : null}>
      -1
    </button>
    {" "}
    <span style={{textDecoration: selected ? "none" : "line-through"}}>
      {product.title} – ${product.price} &times; {selected}
    </span>
  </div>
}

Item.propTypes = {
  cart: PT.object.isRequired,
  product: PT.object.isRequired,
  buy: PT.func.isRequired,
}
