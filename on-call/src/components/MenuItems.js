import React from 'react'

const MenuItems = (props) => {
  const { Pizza } = props;
  return (
    <div className="mb-10">
        <div className="flex justify-between">
        <h3 className="mb-1 text-xl">{ Pizza.name }</h3>
        <p className="ml-auto mr-5">{ Pizza.price }</p>
          <button className="border-2 border-violet-800 px-3 mr-2 text-sm">
            ADD
          </button>
        </div>
        <div>
        <p className="text-sm">{ Pizza.description }</p>
        </div>
      </div>

  )
}

export default MenuItems