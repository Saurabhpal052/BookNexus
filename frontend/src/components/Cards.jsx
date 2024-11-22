import React from "react";

function Cards(item) {
  console.log(item);
  return (
    <>
      <div className="mt-4 my-3 p-3">
        <div className="card bg-base-100 w-92 shadow-xl hover:scale-105 duration-200">
          <figure>
            <img src={item.item.image} alt="book" height="50%"/>
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.item.name}
              <div className="badge badge-secondary">{item.item.category}</div>
            </h2>
            <p>{item.item.title}</p>
            <div className="card-actions flex justify-between">
              <div className="badge badge-outline">${item.item.price}</div>
              <div className=" cursor-pointer hover:bg-pink-500 hover:text-white duration-200 px-2 py-1 rounded-full border-[2px]">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
