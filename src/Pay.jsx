import React, { useState, useEffect } from 'react'
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';


const KEY = 'pk_test_51NIrLxEkNg4eAb3UV0dwghY3dXKxAnBBOeaRCJwujlcQNjplwzsdszRTAS5DlSTHEwhQgnrNnQMNCPHLRJIVv6h700ShyMycds'

const Pay = () =>{


    const [stripeToken, setStripeToken] = useState(null)

    const onToken = (token) => {
      setStripeToken(token)
  }

  useEffect(() => {
    const makeRequest = async () => {
      try{
        const res = await axios.post("http://localhost:5000/api/checkout/payment", {
          tokenId: stripeToken.id,
          amount: 2000
        })
        console.log(res.data)
      }catch(err){
        console.log(err)
      }
    }
    stripeToken && makeRequest()
  }, [stripeToken])

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}>
        <StripeCheckout name="MCM" image="https://www.vidhub.co/assets/logos/vidhub-icon-2e5c629f64ced5598a56387d4e3d0c7c.png"
        billingAddress
        shippingAddress
        description='Your total is $20'
        //20 dollars below
        amount={2000}
        token={onToken}
        stripeKey={KEY}
        >
        <button
          style={{
            border: "none",
            width: 120,
            borderRadius: 5,
            padding: "20px",
            backgroundColor: "#000",
            color: "#fff",
            fontWeight: "600",
            cursor: "pointer"
          }}>
            Pay Now
        </button>
        </StripeCheckout>

    </div>
  )
}

export default Pay
