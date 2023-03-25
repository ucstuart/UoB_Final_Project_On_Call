import React from 'react'

const MenuItems = (props) => {
  const { item, Pizza, onAdd, onRemove } = props;
  return (
    <div className="mb-10">
        <div className="flex justify-between">
        <h3 className="mb-1 text-xl">{ Pizza.name }</h3>
        <p className="ml-auto mr-5">{ Pizza.price }</p>
        {/* <button onClick={ () => onAdd(Pizza)} className="border-2 border-violet-800 px-3 mr-2 text-sm">
            ADD
        </button> */}
        {item ? ( <div>
          <buton onClick={() => onRemove(item)} className="border-2 border-violet-800  mr-2 px-1 text-sm cursor-pointer"> - </buton>
          <span> {item.qty} </span>
          <buton onClick={() => onAdd(item)} className="border-2 border-violet-800  mr-2 px-1 text-sm cursor-pointer ml-1"> + </buton>
        </div>) : (
        <buton onClick={() => onAdd(Pizza)} className="border-2 border-violet-800 px-3 mr-2 text-sm cursor-pointer"> ADD </buton>
        )
        }
        </div>
        <div>
        <p className="text-sm">{ Pizza.description }</p>
        </div>
      </div>

  )
}

export default MenuItems