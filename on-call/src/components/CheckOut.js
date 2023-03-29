
const CheckOut = (props) => {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((accumulator, current) => accumulator + current.price * current.qty, 0);
  return (
    <div className="w-4/5 bg-[#fff] flex flex-col md:w-1/5">
      <div>
        <h1 className="ml-5 text-4xl mb-5 mt-5">Your Basket</h1>
        <div className="ml-5">
          {cartItems.length === 0 && <h2 className="text-xl ml-1 mb-10">Your basket is empty.</h2>}
          {cartItems.map((item) => (
            <div key={item.id}>
              <div><h3 className="text-lg">{item.name}</h3></div>
              <p className="text-sm mb-5">{item.description}</p>
              <div className="border-2 border-light-purple mr-5 inline">
                <button
                  onClick={() => onRemove(item)}
                  className="text-sm px-2 cursor-pointer"
                >
                  {" "}
                  -{" "}
                </button>
                <span className=" px-2 border-2 border-light-purple">{item.qty }</span>
                <button onClick={() => onAdd(item)} className=" px-2 text-sm cursor-pointer"> + </button>
              </div>
            </div>
          ))}
          {cartItems.length !== 0 && (
              <div className="mt-5 border-t-2 w-100 h-auto overflow-hidden">
                <div className="flex justify-between">
                  <div className="text-lg"> Total Price</div>
                <div className="mr-5 text-lg">£{ (itemsPrice.toFixed(2))}</div></div>
                  <button className="bg-[#CF9FFF] text-black p-4 rounded text-lg mt-7 mb-10 w-3/4 ml-10">Checkout</button>
                </div>
          )}
        </div>
      </div>
    </div>
  );
};

export { CheckOut };
