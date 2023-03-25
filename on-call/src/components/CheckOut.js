
const CheckOut = (props) => {
  const { countCartItems } = props;
  return (
    <div className="w-1/5 h-auto bg-[#6D72C3] flex flex-col ml-10">
      <h1>{countCartItems}</h1>
    </div>
  )
}

export default CheckOut