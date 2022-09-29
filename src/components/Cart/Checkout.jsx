import React from 'react'
import classses from './Cart/Checkout.module.css'

const Checkout = (props) => {
  return (
      <form>
          <div className={classses.control}>
              <label htmlFor="name">Your Name</label>
              <input type="text"   id='name'/>
          </div>
          <div className={classses.control}>
              <label htmlFor="street">Street</label>
              <input type="text"   id='street'/>
          </div>
          <div className={classses.control}>
              <label htmlFor="postal">Postal</label>
              <input type="text"   id='postal'/>
          </div>
          <div className={classses.control}>
              <label htmlFor="city">City</label>
              <input type="text"   id='city'/>
          </div>
<button>Confirm</button>
    </form>
  )
}

export default Checkout