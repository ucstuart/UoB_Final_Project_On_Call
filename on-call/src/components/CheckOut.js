const CheckOut = (props) => {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((accumulator, current) => accumulator + current.price * current.qty, 0);
  return (
    <div className="w-1/5 h-auto bg-[#fff] flex flex-col ml-10">
      <div>
        <h1 className="ml-5 text-4xl mb-20 mt-5">Your Basket</h1>
        <div className="ml-5">
          {cartItems.length === 0 && <h2 className="text-xl ml-5">Your basket is empty.</h2>}
          {cartItems.map((item) => (
            <div className="justify-between"key={item.id}>
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
              <div className="flex justify-between mt-5 border-t-2 w-100">
                <div className="text-lg"> Total Price</div>
                <div className="mr-5 text-lg">£{ (itemsPrice.toFixed(2))}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
