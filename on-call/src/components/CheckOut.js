import React from 'react';
import {useState} from 'react';

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
         setMessage("Thank you for your Order. A Pixie will let you know when the meal is ready!");
       } else {
         setMessage("Some error occured");
       }
     } catch (err) {
       console.log(err);
     }
   };

  return (
    <div className="w-1/5 bg-[#fff] h-full flex flex-col ml-10">
      <div>
        <h1 className="ml-5 text-4xl mb-20 mt-5">Your Basket</h1>
        <div className="ml-5">
          {cartItems.length === 0 && <h2 className="text-xl ml-1 mb-10">Your basket is empty.</h2>}
          {cartItems.map((item) => (
            <div key={item.id}>
              <div><h3 className="text-lg mt-3">{item.name}</h3></div>
              <p className="text-sm mb-5">{item.description}</p>
              <div className="border-2 border-black mr-5 inline">
                <button
                  onClick={() => onRemove(item)}
                  className="text-sm px-2 cursor-pointer"
                >
                  {" "}
                  -{" "}
                </button>
                <span className=" px-2 border-2 border-black">{item.qty }</span>
                <button onClick={() => onAdd(item)} className=" px-2 text-sm cursor-pointer"> + </button>
              </div>
            </div>
          ))}
          {cartItems.length !== 0 && (
              <div className="mt-5 border-t-2 w-100 h-auto overflow-hidden">
                <div className="flex justify-between">
                  <div className="text-lg"> Total Price</div>
                <div className="mr-5 text-lg">£{ (itemsPrice.toFixed(2))}</div></div>
                  <form onSubmit={handleSubmit}>
                      <input
                        type="text"
                        value={name}
                        placeholder="Name"
                        onChange={(e) => setName(e.target.value)}
                      />
                      <input
                        type="text"
                        value={email}
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <input
                        type="text"
                        value={mobileNumber}
                        placeholder="Mobile Number"
                        onChange={(e) => setMobileNumber(e.target.value)}
                      />
                    <button type="submit" className="bg-[green] text-white p-4 rounded text-lg mt-7 w-3/4 ml-10">Checkout</button>
                    <div className='message'>{message ? <p>{message}</p>: null}</div>

                    </form>
              </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
