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
            <div key={item.id}>
              <div>{item.name}</div>
              <div className="border-2 border-black inline">
                <button
                  onClick={() => onRemove(item)}
                  className="text-sm px-2 cursor-pointer"
                >
                  {" "}
                  -{" "}
                </button>
                <span className=" px-2">{item.qty }</span>
                <button onClick={() => onAdd(item)} className=" px-2 text-sm cursor-pointer"> + </button>
              </div>
            </div>
          ))}
          {cartItems.length !== 0 && (
              <div>
                <div> Items Price</div>
                <div>£{ (itemsPrice.toFixed(2))}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
