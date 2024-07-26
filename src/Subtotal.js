import React from 'react'
import './Subtotal.css';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import CurrencyFormat from 'react-currency-format';
function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="subtotal">
      <CurrencyFormat
        value={getBasketTotal(basket)}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
        renderText={value => <>
          <p>
            Subtotal ({basket.length} items): <strong>{` ${value}`}</strong>
          </p>
          <small className="subtotal__gift">
            <input type="checkbox" /> This order contains a gift card..
            </small>
        </>} />
      <button>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal
