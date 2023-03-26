import React from 'react'

const MenuItems = (props) => {
  const { item, Pizza, onAdd, onRemove } = props;
  return (
    <div className="mb-10">
        <div className="flex justify-between ml-5">
        <h3 className="mb-1 text-xl">{ Pizza.name }</h3>
        <p className="ml-auto mr-5">£{ Pizza.price }</p>
        {item ? (<div> <div className='inline border-2 border-black mr-2'>
          <button onClick={() => onRemove(item)} className="px-2 text-sm cursor-pointer"> - </button>
          <span className='border-2 border-black px-2'> {item.qty} </span>
          <button onClick={() => onAdd(item)} className="px-2 text-sm cursor-pointer"> + </button>
        </div></div>) : (
        <button onClick={() => onAdd(Pizza)} className=" border-2 border-black px-2 mr-2 text-sm cursor-pointer"> ADD </button>
        )
        }
        </div>
        <div>
        <p className="text-sm ml-5 text-left">{ Pizza.description }</p>
        </div>
      </div>

  )
}

export default MenuItems