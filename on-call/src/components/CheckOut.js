import React from "react";
import { useState } from "react";


const CheckOut = (props) => {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((accumulator, current) => accumulator + current.price * current.qty, 0);
   //Send in sms request to server to send collection message
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [mobileNumber, setMobileNumber] = useState("");
   const [OrderNo, setOrderNo] = useState(0);
   const [message, setMessage] = useState("");
   const baseUrl = 'http://localhost:3003/'
   
   let handleSubmit = async (e) => {
     e.preventDefault();
     setOrderNo(OrderNo + 1);
     try {
       let res = await fetch(baseUrl, {
         method: "POST",
         headers:{
           "Content-Type":'application/json'
         },
         body: JSON.stringify({
           name: name,
           email: email,
           mobileNumber: mobileNumber,
           OrderNo: `Pix00${OrderNo}`,
         }),
       });
       const resJson = await res.json();
       console.log(resJson);
       if (res.status === 200) {
         setName("");
         setEmail("");
         setMobileNumber("");
         setMessage("Thank you for your Order. A Pixie will let you know when the meal is ready!");
       } else {
         setMessage("Some error occured");
       }
     } catch (err) {
       console.log(err);
     }
   };

  return (
    <div className="w-4/5  bg-[#fff] flex flex-col md:w-1/5">
      <div>
        <h1 className="ml-5 text-4xl mb-5 mt-5">Your Basket</h1>
        <div className="ml-5">
          {cartItems.length === 0 && (
            <h2 className="text-xl ml-1 mb-10">Your basket is empty.</h2>
          )}
          {cartItems.map((item) => (
            <div key={item.id}>
              <div>
                <h3 className="text-lg">{item.name}</h3>
              </div>
              <p className="text-sm mb-5">{item.description}</p>
              <div className="border-2 border-light-purple mr-5 inline">
                <button
                  onClick={() => onRemove(item)}
                  className="text-sm px-2 cursor-pointer"
                >
                  {" "}
                  -{" "}
                </button>
                <span className=" px-2 border-2 border-light-purple">
                  {item.qty}
                </span>
                <button
                  onClick={() => onAdd(item)}
                  className=" px-2 text-sm cursor-pointer"
                >
                  {" "}
                  +{" "}
                </button>
              </div>
            </div>
          ))}
          {cartItems.length !== 0 && (
            <div>
              <div className="mt-5 border-t-2 w-100 h-auto overflow-hidden">
                <div className="flex justify-between">
                  <div className="text-lg"> Total Price</div>
                  <div className="mr-5 text-lg">£{itemsPrice.toFixed(2)}</div>
                </div>

                <form className="flex flex-col" onSubmit={handleSubmit}>
                  <input className="w-1/2"
                    type="text"
                    value={name}
                    placeholder="Name"
                    onChange={(e) => setName(e.target.value)}
                  />
                  <input className="w-1/2"
                    type="text"
                    value={email}
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input className="w-1/2"
                    type="text"
                    value={mobileNumber}
                    placeholder="Mobile Number"
                    onChange={(e) => setMobileNumber(e.target.value)}
                  />
                  <button className="bg-[#CF9FFF] text-black p-4 rounded text-lg mt-7 mb-10 w-3/4">
                    Checkout
                  </button>
                  <div className="message">
                    {message ? <p>{message}</p> : null}
                  </div>
                </form>
              </div>
                //   <button className="bg-[#CF9FFF] text-black p-4 rounded text-lg mt-7 mb-10 w-3/4 ml-10">Checkout</button>
                // </div>

          )}
        </div>
      </div>
    </div>
  );
};

export { CheckOut };
