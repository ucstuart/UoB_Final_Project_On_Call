const CheckOut = (props) => {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((accumulator, current) => accumulator + current.price * current.qty, 0);
  return (
    <div className="w-1/5 h-auto bg-[#fff] flex flex-col ml-10">
      <div>
        <h1 className="text-center text-5xl mb-20 mt-5">Your Basket</h1>
        <div>
          {cartItems.length === 0 && <h2 className="text-xl ml-3">Your basket is empty.</h2>}
          {cartItems.map((item) => (
            <div key={item.id}>
              <div>{item.name}</div>
              <div>
                <button
                  onClick={() => onRemove(item)}
                  className="border-2 border-white  mr-2 px-1 text-sm cursor-pointer"
                >
                  {" "}
                  -{" "}
                </button>
                <span className="border-2 border-white px-3">{item.qty }</span>
                <button onClick={() => onAdd(item)} className="border-2 border-white mr-2 px-1 text-sm cursor-pointer ml-1"> + </button>
              </div>
            </div>
          ))}
          {cartItems.length !== 0 && (
            <>
              <hr />
              <div>
                <div> Items Price</div>
                <div>£{ (itemsPrice.toFixed(2))}</div>
            </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
