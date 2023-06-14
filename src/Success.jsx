
// import StripeCheckout from 'react-stripe-checkout';

const Success = () =>{


  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}>

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
            Success!
        </button>


    </div>
  )
}

export default Success
